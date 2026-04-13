import Types "../types/auth-teacher-homework";
import List "mo:core/List";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Principal "mo:core/Principal";

module {
  // Re-export types for convenience
  public type TeacherProfile = Types.TeacherProfile;
  public type StudentProfile = Types.StudentProfile;
  public type HomeworkAssignment = Types.HomeworkAssignment;
  public type HomeworkSubmission = Types.HomeworkSubmission;
  public type TimetableEntry = Types.TimetableEntry;
  public type Announcement = Types.Announcement;
  public type UserRole = Types.UserRole;
  public type ApiResult<T> = Types.ApiResult<T>;

  // --- Auth / Role resolution ---
  public func resolveRole(
    teachers : Map.Map<Principal, TeacherProfile>,
    students : Map.Map<Principal, StudentProfile>,
    caller : Principal,
  ) : UserRole {
    if (teachers.containsKey(caller)) { #teacher }
    else if (students.containsKey(caller)) { #student }
    else { #unregistered }
  };

  // --- Teacher ---
  public func registerTeacher(
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
    name : Text,
    subjects : [Text],
    contactPhone : Text,
    bio : Text,
  ) : ApiResult<TeacherProfile> {
    if (teachers.containsKey(caller)) {
      return #err("Already registered as teacher");
    };
    let profile : TeacherProfile = {
      principal_ = caller;
      name;
      subjects;
      contactPhone;
      bio;
    };
    teachers.add(caller, profile);
    #ok(profile)
  };

  public func getTeacherProfile(
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
  ) : ?TeacherProfile {
    teachers.get(caller)
  };

  public func listAllTeachers(
    teachers : Map.Map<Principal, TeacherProfile>,
  ) : [TeacherProfile] {
    teachers.values().toArray()
  };

  // --- Student ---
  public func registerStudent(
    students : Map.Map<Principal, StudentProfile>,
    caller : Principal,
    name : Text,
    className : Text,
    email : Text,
    rollNumber : Text,
    board : ?Text,
    academicMedium : ?Text,
    livingAddress : ?Text,
    schoolName : ?Text,
    schoolAddress : ?Text,
    parent1Name : ?Text,
    parent1Contact : ?Text,
    parent2Name : ?Text,
    parent2Contact : ?Text,
    schoolTiming : ?Text,
    dateOfBirth : ?Text,
    gender : ?Text,
    bloodGroup : ?Text,
  ) : ApiResult<StudentProfile> {
    if (students.containsKey(caller)) {
      return #err("Already registered as student");
    };
    let profile : StudentProfile = {
      principal_ = caller;
      name;
      className;
      email;
      rollNumber;
      board;
      academicMedium;
      livingAddress;
      schoolName;
      schoolAddress;
      parent1Name;
      parent1Contact;
      parent2Name;
      parent2Contact;
      schoolTiming;
      dateOfBirth;
      gender;
      bloodGroup;
    };
    students.add(caller, profile);
    #ok(profile)
  };

  public func getStudentProfile(
    students : Map.Map<Principal, StudentProfile>,
    caller : Principal,
  ) : ?StudentProfile {
    students.get(caller)
  };

  public func getStudentList(
    students : Map.Map<Principal, StudentProfile>,
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
  ) : ApiResult<[StudentProfile]> {
    if (not teachers.containsKey(caller)) {
      return #err("Only teachers can view the student list");
    };
    #ok(students.values().toArray())
  };

  // --- Homework ---
  public func postHomework(
    homework : List.List<HomeworkAssignment>,
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
    subject : Text,
    title : Text,
    description : Text,
    dueDate : Text,
    assignedClasses : [Text],
    nextId : Nat,
  ) : ApiResult<HomeworkAssignment> {
    if (not teachers.containsKey(caller)) {
      return #err("Only teachers can post homework");
    };
    let assignment : HomeworkAssignment = {
      id = nextId;
      teacherPrincipal = caller;
      subject;
      title;
      description;
      dueDate;
      assignedClasses;
      createdAt = Time.now();
    };
    homework.add(assignment);
    #ok(assignment)
  };

  public func getHomeworkByClass(
    homework : List.List<HomeworkAssignment>,
    className : Text,
  ) : [HomeworkAssignment] {
    homework.filter(func(h) {
      h.assignedClasses.find(func(c) { c == className }) != null
    }).toArray()
  };

  public func submitHomework(
    submissions : List.List<HomeworkSubmission>,
    students : Map.Map<Principal, StudentProfile>,
    caller : Principal,
    homeworkId : Nat,
    submittedContent : Text,
    nextId : Nat,
  ) : ApiResult<HomeworkSubmission> {
    if (not students.containsKey(caller)) {
      return #err("Only students can submit homework");
    };
    // Check for duplicate submission
    let existing = submissions.find(func(s) {
      Principal.equal(s.studentPrincipal, caller) and s.homeworkId == homeworkId
    });
    switch (existing) {
      case (?_) { #err("Already submitted for this homework") };
      case null {
        let submission : HomeworkSubmission = {
          id = nextId;
          studentPrincipal = caller;
          homeworkId;
          submittedContent;
          submittedAt = Time.now();
          status = #submitted;
        };
        submissions.add(submission);
        #ok(submission)
      };
    }
  };

  public func getSubmissions(
    submissions : List.List<HomeworkSubmission>,
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
    homeworkId : Nat,
  ) : ApiResult<[HomeworkSubmission]> {
    if (not teachers.containsKey(caller)) {
      return #err("Only teachers can view submissions");
    };
    let result = submissions.filter(func(s) { s.homeworkId == homeworkId }).toArray();
    #ok(result)
  };

  // --- Timetable ---
  public func updateTimetable(
    timetable : List.List<TimetableEntry>,
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
    entry : TimetableEntry,
  ) : ApiResult<TimetableEntry> {
    if (not teachers.containsKey(caller)) {
      return #err("Only teachers can update the timetable");
    };
    if (entry.id == 0) {
      // Create new entry — id will be assigned by the mixin counter
      timetable.add(entry);
      #ok(entry)
    } else {
      // Upsert: try to find and replace existing
      var found = false;
      timetable.mapInPlace(func(e) {
        if (e.id == entry.id) {
          found := true;
          entry
        } else { e }
      });
      if (not found) {
        timetable.add(entry);
      };
      #ok(entry)
    }
  };

  public func getTimetable(
    timetable : List.List<TimetableEntry>,
    className : Text,
  ) : [TimetableEntry] {
    timetable.filter(func(e) { e.className == className }).toArray()
  };

  // --- Announcements ---
  public func postAnnouncement(
    announcements : List.List<Announcement>,
    teachers : Map.Map<Principal, TeacherProfile>,
    caller : Principal,
    title : Text,
    body : Text,
    targetClasses : [Text],
    nextId : Nat,
  ) : ApiResult<Announcement> {
    if (not teachers.containsKey(caller)) {
      return #err("Only teachers can post announcements");
    };
    let announcement : Announcement = {
      id = nextId;
      teacherPrincipal = caller;
      title;
      body;
      targetClasses;
      publishedAt = Time.now();
    };
    announcements.add(announcement);
    #ok(announcement)
  };

  public func getAnnouncements(
    announcements : List.List<Announcement>,
    className : Text,
  ) : [Announcement] {
    announcements.filter(func(a) {
      a.targetClasses.find(func(c) { c == className }) != null or
      a.targetClasses.find(func(c) { c == "all" }) != null
    }).toArray()
  };
};
