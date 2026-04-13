import type { backendInterface } from "../backend";
import { UserRole } from "../backend";
import type { Principal } from "@icp-sdk/core/principal";

export const mockBackend: backendInterface = {
  completeTask: async (_taskId: string) => true,
  getAttendance: async (_studentId: string) => [
    { studentId: "student1", markedVia: "QR", present: true, date: "2026-04-12" },
    { studentId: "student1", markedVia: "QR", present: true, date: "2026-04-11" },
    { studentId: "student1", markedVia: "manual", present: false, date: "2026-04-10" },
    { studentId: "student1", markedVia: "QR", present: true, date: "2026-04-09" },
    { studentId: "student1", markedVia: "QR", present: true, date: "2026-04-08" },
  ],
  getStreak: async (_studentId: string) => ({
    studentId: "student1",
    lastStudyDate: "2026-04-12",
    longestStreak: BigInt(14),
    currentStreak: BigInt(7),
  }),
  getStudentProfile: async (_studentId: string) => ({
    id: "student1",
    subjects: ["Maths", "Science", "English", "Social Studies", "Geography", "Commerce", "IT", "Computer Science", "Hindi"],
    className: "Class 10",
    name: "Arjun Sharma",
    streakCount: BigInt(7),
    avatar: "🎓",
  }),
  getStudyTasks: async (_studentId: string) => [
    { id: "t1", title: "Complete Algebra Chapter 5", studentId: "student1", subject: "Maths", completed: false, dueDate: "2026-04-13", priority: "high" },
    { id: "t2", title: "Read Photosynthesis Notes", studentId: "student1", subject: "Science", completed: true, dueDate: "2026-04-12", priority: "medium" },
    { id: "t3", title: "Write Essay on My Favourite Leader", studentId: "student1", subject: "English", completed: false, dueDate: "2026-04-14", priority: "low" },
    { id: "t4", title: "Practice Trigonometry", studentId: "student1", subject: "Maths", completed: false, dueDate: "2026-04-15", priority: "high" },
    { id: "t5", title: "Revise Social Studies – Democracy Chapter", studentId: "student1", subject: "Social Studies", completed: false, dueDate: "2026-04-15", priority: "medium" },
    { id: "t6", title: "Complete Python loops assignment", studentId: "student1", subject: "Computer Science", completed: false, dueDate: "2026-04-15", priority: "high" },
    { id: "t7", title: "Map work – Physical features of India", studentId: "student1", subject: "Geography", completed: false, dueDate: "2026-04-16", priority: "medium" },
    { id: "t8", title: "Commerce – Journal entries exercise", studentId: "student1", subject: "Commerce", completed: false, dueDate: "2026-04-17", priority: "low" },
    { id: "t9", title: "Hindi poem recitation practice", studentId: "student1", subject: "Hindi", completed: false, dueDate: "2026-04-17", priority: "medium" },
    { id: "t10", title: "IT lab – HTML form creation", studentId: "student1", subject: "IT", completed: false, dueDate: "2026-04-18", priority: "medium" },
  ],
  getSubjectProgress: async (_studentId: string) => [
    { studentId: "student1", subject: "Maths", weeklyScores: [BigInt(65), BigInt(72), BigInt(78), BigInt(75)], currentPercentage: BigInt(75) },
    { studentId: "student1", subject: "Science", weeklyScores: [BigInt(70), BigInt(75), BigInt(80), BigInt(85)], currentPercentage: BigInt(85) },
    { studentId: "student1", subject: "English", weeklyScores: [BigInt(60), BigInt(65), BigInt(68), BigInt(70)], currentPercentage: BigInt(70) },
    { studentId: "student1", subject: "Social Studies", weeklyScores: [BigInt(62), BigInt(68), BigInt(72), BigInt(76)], currentPercentage: BigInt(76) },
    { studentId: "student1", subject: "Geography", weeklyScores: [BigInt(58), BigInt(64), BigInt(70), BigInt(74)], currentPercentage: BigInt(74) },
    { studentId: "student1", subject: "Commerce", weeklyScores: [BigInt(55), BigInt(60), BigInt(65), BigInt(68)], currentPercentage: BigInt(68) },
    { studentId: "student1", subject: "IT", weeklyScores: [BigInt(72), BigInt(76), BigInt(80), BigInt(85)], currentPercentage: BigInt(85) },
    { studentId: "student1", subject: "Computer Science", weeklyScores: [BigInt(68), BigInt(73), BigInt(78), BigInt(82)], currentPercentage: BigInt(82) },
    { studentId: "student1", subject: "Hindi", weeklyScores: [BigInt(75), BigInt(78), BigInt(82), BigInt(85)], currentPercentage: BigInt(85) },
  ],
  markAttendance: async (_studentId: string, _date: string, _via: string) => true,
  // --- Auth ---
  getMyRole: async () => UserRole.unregistered,
  getMyProfile: async () => null,
  registerTeacher: async () => ({ __kind__: "err", err: "mock" }),
  registerStudent: async () => ({ __kind__: "err", err: "mock" }),
  // --- Teachers ---
  listAllTeachers: async () => [
    { principal: "aaaaa-aa" as unknown as import("@dfinity/principal").Principal, name: "Sangya Ma'am", subjects: ["English", "Science", "Social Studies"], contactPhone: "7355367393", bio: "Experienced teacher specializing in English, Science, and Social Studies." },
    { principal: "aaaaa-aa" as unknown as import("@dfinity/principal").Principal, name: "Shruti Ma'am", subjects: ["Maths", "Geography", "Commerce"], contactPhone: "8879102547", bio: "Dedicated teacher for Maths, Geography, and Commerce." },
    { principal: "aaaaa-aa" as unknown as import("@dfinity/principal").Principal, name: "Shristi Ma'am", subjects: ["IT", "Computer Science", "Hindi"], contactPhone: "7039375142", bio: "Passionate teacher for IT, Computer Science, and Hindi." },
  ],
  seedTeachers: async () => {},
  // --- Students ---
  getStudentList: async () => ({ __kind__: "ok", ok: [] }),
  seedDemoData: async () => {},
  // --- Chat ---
  getMessages: async (_subject: string) => [],
  postMessage: async (_content: string, _subject: string) => ({ __kind__: "err" as const, err: "mock" }),
  // --- Homework ---
  postHomework: async () => ({ __kind__: "err", err: "mock" }),
  getHomeworkByClass: async (_className: string) => [],
  submitHomework: async () => ({ __kind__: "err", err: "mock" }),
  getSubmissions: async () => ({ __kind__: "err", err: "mock" }),
  // --- Timetable ---
  updateTimetable: async () => ({ __kind__: "err", err: "mock" }),
  getTimetable: async (_className: string) => [],
  // --- Announcements ---
  postAnnouncement: async () => ({ __kind__: "err", err: "mock" }),
  getAnnouncements: async (_className: string) => [],
};
