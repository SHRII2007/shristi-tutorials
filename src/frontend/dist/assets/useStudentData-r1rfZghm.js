import { e as useAuth, u as useActor, a as reactExports, h as createActor } from "./index-Ct0isu-0.js";
const EMPTY_STUDENT = {
  id: "",
  name: "",
  className: "",
  rollNumber: "",
  avatar: "",
  streak: 0,
  totalPoints: 0,
  rank: 0
};
const EMPTY_STREAK = {
  current: 0,
  longest: 0,
  thisWeek: [false, false, false, false, false, false, false]
};
const DEFAULT_ACHIEVEMENTS = [
  {
    id: "a1",
    title: "7-Day Streak",
    description: "Study 7 days in a row!",
    icon: "🔥",
    unlocked: false
  },
  {
    id: "a2",
    title: "Maths Master",
    description: "Score above 85 in Maths",
    icon: "🏆",
    unlocked: false
  },
  {
    id: "a3",
    title: "Perfect Attendance",
    description: "No absences this month",
    icon: "⭐",
    unlocked: false
  },
  {
    id: "a4",
    title: "Quick Learner",
    description: "Finish 10 tasks in a day",
    icon: "⚡",
    unlocked: false
  },
  {
    id: "a5",
    title: "Top 3 Student",
    description: "Rank in the top 3 this week",
    icon: "🎓",
    unlocked: false
  },
  {
    id: "a6",
    title: "Speed Reader",
    description: "Complete 5 chapters fast",
    icon: "📚",
    unlocked: false
  }
];
function useStudentData() {
  var _a;
  const { studentProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [tasks, setTasks] = reactExports.useState([]);
  const [progress, setProgress] = reactExports.useState([]);
  const [attendance, setAttendance] = reactExports.useState([]);
  const [streak, setStreak] = reactExports.useState(EMPTY_STREAK);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const student = studentProfile ? {
    id: ((_a = studentProfile.principal) == null ? void 0 : _a.toText()) ?? "",
    name: studentProfile.name,
    className: studentProfile.className,
    rollNumber: studentProfile.rollNumber,
    avatar: studentProfile.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2),
    streak: streak.current,
    totalPoints: 0,
    rank: 0
  } : EMPTY_STUDENT;
  reactExports.useEffect(() => {
    var _a2;
    if (!actor || isFetching || !studentProfile) {
      setIsLoading(false);
      return;
    }
    const studentId = ((_a2 = studentProfile.principal) == null ? void 0 : _a2.toText()) ?? "";
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
      "#9333ea"
    ];
    Promise.allSettled([
      actor.getStudyTasks(studentId).then(setTasks),
      actor.getSubjectProgress(studentId).then((raw) => {
        const mapped = raw.map((p, i) => ({
          subject: p.subject,
          progress: Number(p.currentPercentage),
          color: COLORS[i % COLORS.length],
          score: Number(p.currentPercentage),
          totalTopics: p.weeklyScores.length || 0,
          completedTopics: 0,
          trend: "stable"
        }));
        setProgress(mapped);
      }),
      actor.getAttendance(studentId).then(setAttendance),
      actor.getStreak(studentId).then((raw) => {
        if (raw) {
          const today = /* @__PURE__ */ new Date();
          const dayOfWeek = today.getDay();
          const currentStreak = Number(raw.currentStreak);
          const thisWeek = [
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ];
          const todayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
          for (let i = todayIndex; i >= 0 && i > todayIndex - currentStreak; i--) {
            thisWeek[i] = true;
          }
          setStreak({
            current: currentStreak,
            longest: Number(raw.longestStreak),
            thisWeek
          });
        } else {
          setStreak(EMPTY_STREAK);
        }
      })
    ]).finally(() => setIsLoading(false));
  }, [actor, isFetching, studentProfile]);
  return {
    student,
    tasks,
    progress,
    attendance,
    streak,
    achievements: DEFAULT_ACHIEVEMENTS,
    isLoading
  };
}
export {
  useStudentData as u
};
