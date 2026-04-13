import Types "../types/students-courses-attendance";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type Student = Types.Student;
  public type AttendanceRecord = Types.AttendanceRecord;
  public type StudyTask = Types.StudyTask;
  public type SubjectProgress = Types.SubjectProgress;
  public type StudyStreak = Types.StudyStreak;

  public func getStudentProfile(
    students : List.List<Student>,
    studentId : Text,
  ) : ?Student {
    students.find(func(s) { s.id == studentId })
  };

  public func getAttendance(
    attendance : List.List<AttendanceRecord>,
    studentId : Text,
  ) : [AttendanceRecord] {
    attendance.filter(func(r) { r.studentId == studentId }).toArray()
  };

  public func markAttendance(
    attendance : List.List<AttendanceRecord>,
    studentId : Text,
    date : Text,
    via : Text,
  ) : Bool {
    // Prevent duplicate attendance for same student+date
    let alreadyMarked = attendance.find(func(r) { r.studentId == studentId and r.date == date });
    switch (alreadyMarked) {
      case (?_) { false };
      case null {
        attendance.add({
          studentId;
          date;
          present = true;
          markedVia = via;
        });
        true
      };
    }
  };

  public func getStudyTasks(
    tasks : List.List<StudyTask>,
    studentId : Text,
  ) : [StudyTask] {
    tasks.filter(func(t) { t.studentId == studentId }).toArray()
  };

  public func completeTask(
    tasks : List.List<StudyTask>,
    taskId : Text,
  ) : Bool {
    var found = false;
    tasks.mapInPlace(
      func(task) {
        if (task.id == taskId and not task.completed) {
          found := true;
          { task with completed = true }
        } else {
          task
        }
      }
    );
    found
  };

  public func getSubjectProgress(
    progress : List.List<SubjectProgress>,
    studentId : Text,
  ) : [SubjectProgress] {
    progress.filter(func(p) { p.studentId == studentId }).toArray()
  };

  public func getStreak(
    streaks : List.List<StudyStreak>,
    studentId : Text,
  ) : ?StudyStreak {
    streaks.find(func(s) { s.studentId == studentId })
  };

  public func seedDemoData(
    students : List.List<Student>,
    attendance : List.List<AttendanceRecord>,
    tasks : List.List<StudyTask>,
    progress : List.List<SubjectProgress>,
    streaks : List.List<StudyStreak>,
  ) {
    // Only seed if empty
    if (not students.isEmpty()) return;

    let demoStudents : [Student] = [
      { id = "demo-student-1"; name = "Rahul Sharma"; className = "10A"; subjects = ["Maths", "Science", "English", "Hindi", "Social Studies"]; avatar = "🧑‍🎓"; streakCount = 7 },
      { id = "demo-student-2"; name = "Priya Singh"; className = "9B"; subjects = ["Maths", "Science", "English", "Hindi", "Commerce"]; avatar = "👩‍🎓"; streakCount = 12 },
      { id = "demo-student-3"; name = "Amit Kumar"; className = "10A"; subjects = ["IT", "Computer Science", "Maths", "English", "Geography"]; avatar = "🧑‍💻"; streakCount = 5 },
    ];

    for (s in demoStudents.values()) {
      students.add(s);
    };

    let today = "2026-04-12";
    let yesterday = "2026-04-11";
    attendance.add({ studentId = "demo-student-1"; date = today; present = true; markedVia = "QR" });
    attendance.add({ studentId = "demo-student-1"; date = yesterday; present = true; markedVia = "manual" });
    attendance.add({ studentId = "demo-student-2"; date = today; present = true; markedVia = "QR" });

    tasks.add({ id = "task-1"; studentId = "demo-student-1"; subject = "Maths"; title = "Complete Chapter 5 exercises"; dueDate = "2026-04-15"; completed = false; priority = "high" });
    tasks.add({ id = "task-2"; studentId = "demo-student-1"; subject = "Science"; title = "Read Chapter 8: Electricity"; dueDate = "2026-04-14"; completed = true; priority = "medium" });
    tasks.add({ id = "task-3"; studentId = "demo-student-2"; subject = "English"; title = "Write essay on environment"; dueDate = "2026-04-16"; completed = false; priority = "high" });

    progress.add({ studentId = "demo-student-1"; subject = "Maths"; weeklyScores = [72, 78, 75, 80, 82, 85, 88, 90]; currentPercentage = 90 });
    progress.add({ studentId = "demo-student-1"; subject = "Science"; weeklyScores = [65, 70, 68, 72, 75, 78, 80, 82]; currentPercentage = 82 });
    progress.add({ studentId = "demo-student-1"; subject = "English"; weeklyScores = [80, 82, 85, 83, 87, 88, 90, 92]; currentPercentage = 92 });

    streaks.add({ studentId = "demo-student-1"; currentStreak = 7; longestStreak = 15; lastStudyDate = today });
    streaks.add({ studentId = "demo-student-2"; currentStreak = 12; longestStreak = 20; lastStudyDate = today });
    streaks.add({ studentId = "demo-student-3"; currentStreak = 5; longestStreak = 10; lastStudyDate = yesterday });
  };
};
