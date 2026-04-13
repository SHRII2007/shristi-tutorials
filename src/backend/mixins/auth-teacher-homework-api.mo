import Types "../types/auth-teacher-homework";
import Lib "../lib/auth-teacher-homework";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

mixin (
  teachers : Map.Map<Principal, Types.TeacherProfile>,
  students : Map.Map<Principal, Types.StudentProfile>,
  homework : List.List<Types.HomeworkAssignment>,
  submissions : List.List<Types.HomeworkSubmission>,
  timetable : List.List<Types.TimetableEntry>,
  announcements : List.List<Types.Announcement>,
  chatMessages : List.List<Types.ChatMessage>,
) {
  var nextHomeworkId : Nat = 1;
  var nextSubmissionId : Nat = 1;
  var nextTimetableId : Nat = 1;
  var nextAnnouncementId : Nat = 1;
  var nextChatMessageId : Nat = 1;
  var teachersSeedDone : Bool = false;

  /// Returns the caller's role: #student, #teacher, or #unregistered
  public query ({ caller }) func getMyRole() : async Types.UserRole {
    Lib.resolveRole(teachers, students, caller)
  };

  /// Returns the caller's own profile (teacher or student), null if unregistered
  public query ({ caller }) func getMyProfile() : async ?{ #teacher : Types.TeacherProfile; #student : Types.StudentProfile } {
    switch (teachers.get(caller)) {
      case (?t) { ?#teacher(t) };
      case null {
        switch (students.get(caller)) {
          case (?s) { ?#student(s) };
          case null { null };
        }
      };
    }
  };

  /// Register the caller as a teacher
  public shared ({ caller }) func registerTeacher(
    name : Text,
    subjects : [Text],
    contactPhone : Text,
    bio : Text,
  ) : async Types.ApiResult<Types.TeacherProfile> {
    Lib.registerTeacher(teachers, caller, name, subjects, contactPhone, bio)
  };

  /// Register the caller as a student (all fields, optional ones may be null)
  public shared ({ caller }) func registerStudent(
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
  ) : async Types.ApiResult<Types.StudentProfile> {
    Lib.registerStudent(
      students, caller,
      name, className, email, rollNumber,
      board, academicMedium, livingAddress,
      schoolName, schoolAddress,
      parent1Name, parent1Contact,
      parent2Name, parent2Contact,
      schoolTiming, dateOfBirth, gender, bloodGroup,
    )
  };

  /// Post a homework assignment (teacher only)
  public shared ({ caller }) func postHomework(
    subject : Text,
    title : Text,
    description : Text,
    dueDate : Text,
    assignedClasses : [Text],
  ) : async Types.ApiResult<Types.HomeworkAssignment> {
    let result = Lib.postHomework(homework, teachers, caller, subject, title, description, dueDate, assignedClasses, nextHomeworkId);
    switch (result) {
      case (#ok(_)) { nextHomeworkId += 1 };
      case (#err(_)) {};
    };
    result
  };

  /// Get homework assignments visible to the given class
  public query func getHomeworkByClass(className : Text) : async [Types.HomeworkAssignment] {
    Lib.getHomeworkByClass(homework, className)
  };

  /// Submit homework (student only)
  public shared ({ caller }) func submitHomework(
    homeworkId : Nat,
    submittedContent : Text,
  ) : async Types.ApiResult<Types.HomeworkSubmission> {
    let result = Lib.submitHomework(submissions, students, caller, homeworkId, submittedContent, nextSubmissionId);
    switch (result) {
      case (#ok(_)) { nextSubmissionId += 1 };
      case (#err(_)) {};
    };
    result
  };

  /// Get all submissions for a homework item (teacher only)
  public query ({ caller }) func getSubmissions(homeworkId : Nat) : async Types.ApiResult<[Types.HomeworkSubmission]> {
    Lib.getSubmissions(submissions, teachers, caller, homeworkId)
  };

  /// Add or update a timetable entry (teacher only)
  public shared ({ caller }) func updateTimetable(entry : Types.TimetableEntry) : async Types.ApiResult<Types.TimetableEntry> {
    // If new entry (id == 0), assign next id
    let finalEntry : Types.TimetableEntry = if (entry.id == 0) {
      let e : Types.TimetableEntry = { entry with id = nextTimetableId };
      nextTimetableId += 1;
      e
    } else { entry };
    Lib.updateTimetable(timetable, teachers, caller, finalEntry)
  };

  /// Get timetable entries for a class
  public query func getTimetable(className : Text) : async [Types.TimetableEntry] {
    Lib.getTimetable(timetable, className)
  };

  /// Get all registered students (teacher only)
  public query ({ caller }) func getStudentList() : async Types.ApiResult<[Types.StudentProfile]> {
    Lib.getStudentList(students, teachers, caller)
  };

  /// Post an announcement (teacher only)
  public shared ({ caller }) func postAnnouncement(
    title : Text,
    body : Text,
    targetClasses : [Text],
  ) : async Types.ApiResult<Types.Announcement> {
    let result = Lib.postAnnouncement(announcements, teachers, caller, title, body, targetClasses, nextAnnouncementId);
    switch (result) {
      case (#ok(_)) { nextAnnouncementId += 1 };
      case (#err(_)) {};
    };
    result
  };

  /// Get announcements for a class
  public query func getAnnouncements(className : Text) : async [Types.Announcement] {
    Lib.getAnnouncements(announcements, className)
  };

  /// Seed 3 default demo teacher profiles for Sangya, Shruti, Shristi Ma'am
  /// Callable by any user; idempotent — runs only once.
  public shared ({ caller }) func seedTeachers() : async () {
    if (teachersSeedDone) return;
    teachersSeedDone := true;

    // Only seed if no teachers exist yet
    if (not teachers.isEmpty()) return;

    // Use the caller's principal for Sangya (first caller seeds as Sangya),
    // and derive demo principals from well-known IC blobs for the other two.
    // Blob encoding: opaque self-authenticating format with length up to 29 bytes.
    let demoSangya : Types.TeacherProfile = {
      principal_ = caller;
      name = "Sangya Ma'am";
      subjects = ["English", "Science", "Social Studies"];
      contactPhone = "7355367393";
      bio = "Experienced teacher specializing in English, Science, and Social Studies.";
    };
    teachers.add(caller, demoSangya);

    // For Shruti and Shristi, use opaque principals constructed from blobs
    // (29-byte opaque principals are valid IC principals)
    let shrutiBlob : Blob = "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\10\11\12\13\14\15\16\17\18\19\1a\1b\1c\00";
    let shrutiP = shrutiBlob.fromBlob();
    let shrutiProfile : Types.TeacherProfile = {
      principal_ = shrutiP;
      name = "Shruti Ma'am";
      subjects = ["Maths", "Geography", "Commerce"];
      contactPhone = "8879102547";
      bio = "Dedicated teacher for Maths, Geography, and Commerce.";
    };
    teachers.add(shrutiP, shrutiProfile);

    let shristiBlob : Blob = "\02\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\10\11\12\13\14\15\16\17\18\19\1a\1b\1c\00";
    let shristiP = shristiBlob.fromBlob();
    let shristiProfile : Types.TeacherProfile = {
      principal_ = shristiP;
      name = "Shristi Ma'am";
      subjects = ["IT", "Computer Science", "Hindi"];
      contactPhone = "7039375142";
      bio = "Passionate teacher for IT, Computer Science, and Hindi.";
    };
    teachers.add(shristiP, shristiProfile);
  };

  /// Get all teachers (public — for display on homepage etc.)
  public query func listAllTeachers() : async [Types.TeacherProfile] {
    Lib.listAllTeachers(teachers)
  };

  /// Post a doubt chat message (registered students and teachers only)
  public shared ({ caller }) func postMessage(
    content : Text,
    subject : Text,
  ) : async Types.ApiResult<Types.ChatMessage> {
    // Determine sender name from profile
    let senderName : Text = switch (teachers.get(caller)) {
      case (?t) { t.name };
      case null {
        switch (students.get(caller)) {
          case (?s) { s.name };
          case null { return #err("You must be registered to send messages") };
        }
      };
    };
    let msg : Types.ChatMessage = {
      id = nextChatMessageId;
      senderPrincipal = caller;
      senderName;
      content;
      subject;
      sentAt = Time.now();
    };
    chatMessages.add(msg);
    nextChatMessageId += 1;
    #ok(msg)
  };

  /// Get all chat messages, optionally filtered by subject ("" or "all" returns everything)
  public query func getMessages(subject : Text) : async [Types.ChatMessage] {
    if (subject == "" or subject == "all") {
      chatMessages.toArray()
    } else {
      chatMessages.filter(func(m) { m.subject == subject }).toArray()
    }
  };
};
