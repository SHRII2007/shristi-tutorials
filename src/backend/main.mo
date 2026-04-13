import SCATypes "types/students-courses-attendance";
import ATHTypes "types/auth-teacher-homework";
import SCAMixin "mixins/students-courses-attendance-api";
import ATHMixin "mixins/auth-teacher-homework-api";

import List "mo:core/List";
import Map "mo:core/Map";




actor {
  // --- Students / Courses / Attendance state ---
  let students = List.empty<SCATypes.Student>();
  let attendance = List.empty<SCATypes.AttendanceRecord>();
  let tasks = List.empty<SCATypes.StudyTask>();
  let progress = List.empty<SCATypes.SubjectProgress>();
  let streaks = List.empty<SCATypes.StudyStreak>();

  // --- Auth / Teacher / Homework state ---
  let teachers = Map.empty<Principal, ATHTypes.TeacherProfile>();
  let studentProfiles = Map.empty<Principal, ATHTypes.StudentProfile>();
  let homework = List.empty<ATHTypes.HomeworkAssignment>();
  let submissions = List.empty<ATHTypes.HomeworkSubmission>();
  let timetable = List.empty<ATHTypes.TimetableEntry>();
  let announcements = List.empty<ATHTypes.Announcement>();
  let chatMessages = List.empty<ATHTypes.ChatMessage>();
  include SCAMixin(students, attendance, tasks, progress, streaks);
  include ATHMixin(
    teachers,
    studentProfiles,
    homework,
    submissions,
    timetable,
    announcements,
    chatMessages,
  );
};
