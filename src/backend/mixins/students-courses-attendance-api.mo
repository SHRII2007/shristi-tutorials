import Types "../types/students-courses-attendance";
import Lib "../lib/students-courses-attendance";
import List "mo:core/List";

mixin (
  students : List.List<Types.Student>,
  attendance : List.List<Types.AttendanceRecord>,
  tasks : List.List<Types.StudyTask>,
  progress : List.List<Types.SubjectProgress>,
  streaks : List.List<Types.StudyStreak>,
) {
  public query func getStudentProfile(studentId : Text) : async ?Types.Student {
    Lib.getStudentProfile(students, studentId)
  };

  public query func getAttendance(studentId : Text) : async [Types.AttendanceRecord] {
    Lib.getAttendance(attendance, studentId)
  };

  public func markAttendance(studentId : Text, date : Text, via : Text) : async Bool {
    Lib.markAttendance(attendance, studentId, date, via)
  };

  public query func getStudyTasks(studentId : Text) : async [Types.StudyTask] {
    Lib.getStudyTasks(tasks, studentId)
  };

  public func completeTask(taskId : Text) : async Bool {
    Lib.completeTask(tasks, taskId)
  };

  public query func getSubjectProgress(studentId : Text) : async [Types.SubjectProgress] {
    Lib.getSubjectProgress(progress, studentId)
  };

  public query func getStreak(studentId : Text) : async ?Types.StudyStreak {
    Lib.getStreak(streaks, studentId)
  };

  public func seedDemoData() : async () {
    Lib.seedDemoData(students, attendance, tasks, progress, streaks)
  };
};
