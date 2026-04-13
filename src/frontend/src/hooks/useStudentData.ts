import { useActor } from "@caffeineai/core-infrastructure";
import { useEffect, useState } from "react";
import type {
  AttendanceRecord as BackendAttendanceRecord,
  StudyTask as BackendStudyTask,
} from "../backend";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";
import type {
  Achievement,
  Student,
  StudyStreak,
  SubjectProgress,
} from "../types";

interface StudentData {
  student: Student;
  tasks: BackendStudyTask[];
  progress: SubjectProgress[];
  attendance: BackendAttendanceRecord[];
  streak: StudyStreak;
  achievements: Achievement[];
  isLoading: boolean;
}

// Empty/zero defaults for a brand new student
const EMPTY_STUDENT: Student = {
  id: "",
  name: "",
  className: "",
  rollNumber: "",
  avatar: "",
  streak: 0,
  totalPoints: 0,
  rank: 0,
};

const EMPTY_STREAK: StudyStreak = {
  current: 0,
  longest: 0,
  thisWeek: [false, false, false, false, false, false, false],
};

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "7-Day Streak",
    description: "Study 7 days in a row!",
    icon: "🔥",
    unlocked: false,
  },
  {
    id: "a2",
    title: "Maths Master",
    description: "Score above 85 in Maths",
    icon: "🏆",
    unlocked: false,
  },
  {
    id: "a3",
    title: "Perfect Attendance",
    description: "No absences this month",
    icon: "⭐",
    unlocked: false,
  },
  {
    id: "a4",
    title: "Quick Learner",
    description: "Finish 10 tasks in a day",
    icon: "⚡",
    unlocked: false,
  },
  {
    id: "a5",
    title: "Top 3 Student",
    description: "Rank in the top 3 this week",
    icon: "🎓",
    unlocked: false,
  },
  {
    id: "a6",
    title: "Speed Reader",
    description: "Complete 5 chapters fast",
    icon: "📚",
    unlocked: false,
  },
];

export function useStudentData(): StudentData {
  const { studentProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);

  const [tasks, setTasks] = useState<BackendStudyTask[]>([]);
  const [progress, setProgress] = useState<SubjectProgress[]>([]);
  const [attendance, setAttendance] = useState<BackendAttendanceRecord[]>([]);
  const [streak, setStreak] = useState<StudyStreak>(EMPTY_STREAK);
  const [isLoading, setIsLoading] = useState(true);

  // Build the Student object from the real profile
  const student: Student = studentProfile
    ? {
        id: studentProfile.principal?.toText() ?? "",
        name: studentProfile.name,
        className: studentProfile.className,
        rollNumber: studentProfile.rollNumber,
        avatar: studentProfile.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        streak: streak.current,
        totalPoints: 0,
        rank: 0,
      }
    : EMPTY_STUDENT;

  useEffect(() => {
    if (!actor || isFetching || !studentProfile) {
      setIsLoading(false);
      return;
    }

    const studentId = studentProfile.principal?.toText() ?? "";
    if (!studentId) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const COLORS = [
      "#7c3aed",
      "#a855f7",
      "#c084fc",
      "#6d28d9",
      "#8b5cf6",
      "#7e22ce",
      "#a21caf",
      "#86198f",
      "#9333ea",
    ];

    Promise.allSettled([
      actor.getStudyTasks(studentId).then(setTasks),
      actor.getSubjectProgress(studentId).then((raw) => {
        const mapped: SubjectProgress[] = raw.map((p, i) => ({
          subject: p.subject,
          progress: Number(p.currentPercentage),
          color: COLORS[i % COLORS.length],
          score: Number(p.currentPercentage),
          totalTopics: p.weeklyScores.length || 0,
          completedTopics: 0,
          trend: "stable" as const,
        }));
        setProgress(mapped);
      }),
      actor.getAttendance(studentId).then(setAttendance),
      actor.getStreak(studentId).then((raw) => {
        if (raw) {
          const today = new Date();
          const dayOfWeek = today.getDay(); // 0=Sun...6=Sat
          const currentStreak = Number(raw.currentStreak);
          const thisWeek: boolean[] = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ];
          // Mon=0 format; mark last N days active based on streak
          const todayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
          for (
            let i = todayIndex;
            i >= 0 && i > todayIndex - currentStreak;
            i--
          ) {
            thisWeek[i] = true;
          }
          setStreak({
            current: currentStreak,
            longest: Number(raw.longestStreak),
            thisWeek,
          });
        } else {
          setStreak(EMPTY_STREAK);
        }
      }),
    ]).finally(() => setIsLoading(false));
  }, [actor, isFetching, studentProfile]);

  return {
    student,
    tasks,
    progress,
    attendance,
    streak,
    achievements: DEFAULT_ACHIEVEMENTS,
    isLoading,
  };
}
