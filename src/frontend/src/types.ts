// Types for Shristi Tutorials EdTech platform

// ── Backend-aligned types ──────────────────────────────

export type {
  TeacherProfile,
  StudentProfile,
  HomeworkAssignment,
  HomeworkSubmission,
  TimetableEntry,
  Announcement,
} from "./backend";

// ── Frontend-only types ────────────────────────────────

export interface Student {
  id: string;
  name: string;
  className: string;
  rollNumber: string;
  avatar: string;
  streak: number;
  totalPoints: number;
  rank: number;
}

export interface AttendanceRecord {
  date: string;
  subject: string;
  status: "present" | "absent" | "late";
}

export interface StudyTask {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  estimatedMinutes: number;
}

export interface SubjectProgress {
  subject: string;
  progress: number;
  color: string;
  score: number;
  totalTopics: number;
  completedTopics: number;
  trend: "up" | "down" | "stable";
}

export interface StudyStreak {
  current: number;
  longest: number;
  thisWeek: boolean[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
}
