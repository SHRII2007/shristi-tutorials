module {
  // --- Shared primitive aliases ---
  public type Timestamp = Int; // nanoseconds from Time.now()

  // --- Roles ---
  public type UserRole = {
    #student;
    #teacher;
    #unregistered;
  };

  // --- Teacher ---
  public type TeacherProfile = {
    principal_ : Principal;
    name : Text;
    subjects : [Text];
    contactPhone : Text;
    bio : Text;
  };

  // --- Student (auth-aware, extended with Indian coaching institute fields) ---
  public type StudentProfile = {
    principal_ : Principal;
    // Core required fields
    name : Text;
    className : Text;
    email : Text;
    rollNumber : Text;
    // Extended optional fields
    board : ?Text;           // SSC | CBSE | IGSE | IGCSE
    academicMedium : ?Text;  // English | semi-English | Hindi | semi-Hindi | Marathi | semi-Marathi
    livingAddress : ?Text;
    schoolName : ?Text;
    schoolAddress : ?Text;
    parent1Name : ?Text;
    parent1Contact : ?Text;
    parent2Name : ?Text;
    parent2Contact : ?Text;
    schoolTiming : ?Text;    // e.g. "8:00 AM - 2:00 PM"
    dateOfBirth : ?Text;
    gender : ?Text;
    bloodGroup : ?Text;
  };

  // --- Homework ---
  public type HomeworkAssignment = {
    id : Nat;
    teacherPrincipal : Principal;
    subject : Text;
    title : Text;
    description : Text;
    dueDate : Text; // ISO date string
    assignedClasses : [Text];
    createdAt : Timestamp;
  };

  public type SubmissionStatus = {
    #pending;
    #submitted;
    #graded;
  };

  public type HomeworkSubmission = {
    id : Nat;
    studentPrincipal : Principal;
    homeworkId : Nat;
    submittedContent : Text;
    submittedAt : Timestamp;
    status : SubmissionStatus;
  };

  // --- Timetable ---
  public type TimetableEntry = {
    id : Nat;
    dayOfWeek : Text; // "Monday", "Tuesday", …
    startTime : Text; // "09:00"
    endTime : Text;   // "10:00"
    subject : Text;
    className : Text;
    teacherPrincipal : Principal;
  };

  // --- Announcements ---
  public type Announcement = {
    id : Nat;
    teacherPrincipal : Principal;
    title : Text;
    body : Text;
    targetClasses : [Text];
    publishedAt : Timestamp;
  };

  // --- Doubt Chat ---
  public type ChatMessage = {
    id : Nat;
    senderPrincipal : Principal;
    senderName : Text;
    content : Text;
    subject : Text;   // subject/topic for routing, or "general"
    sentAt : Timestamp;
  };

  // --- API result wrapper ---
  public type ApiResult<T> = {
    #ok : T;
    #err : Text;
  };
};
