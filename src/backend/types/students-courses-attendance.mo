module {
  public type StudentId = Text;
  public type DateText = Text;

  public type Student = {
    id : StudentId;
    name : Text;
    className : Text;
    subjects : [Text];
    avatar : Text;
    streakCount : Nat;
  };

  public type AttendanceRecord = {
    studentId : StudentId;
    date : DateText;
    present : Bool;
    markedVia : Text; // "QR" or "manual"
  };

  public type StudyTask = {
    id : Text;
    studentId : StudentId;
    subject : Text;
    title : Text;
    dueDate : DateText;
    completed : Bool;
    priority : Text; // "high", "medium", "low"
  };

  public type SubjectProgress = {
    studentId : StudentId;
    subject : Text;
    weeklyScores : [Nat]; // 8 weekly scores
    currentPercentage : Nat;
  };

  public type StudyStreak = {
    studentId : StudentId;
    currentStreak : Nat;
    longestStreak : Nat;
    lastStudyDate : DateText;
  };
};
