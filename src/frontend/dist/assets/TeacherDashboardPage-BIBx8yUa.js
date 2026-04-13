import { e as useAuth, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, a3 as GraduationCap, q as BookOpen, C as Calendar, a4 as Users, B as Bell, L as Link, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { C as ChevronRight } from "./chevron-right-KPK3W_5h.js";
const TEACHER_SUBJECTS = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"]
};
const SUBJECT_COLORS = {
  English: "bg-blue-100 text-blue-700 border-blue-200",
  Science: "bg-green-100 text-green-700 border-green-200",
  "Social Studies": "bg-orange-100 text-orange-700 border-orange-200",
  Maths: "bg-purple-100 text-purple-700 border-purple-200",
  Geography: "bg-teal-100 text-teal-700 border-teal-200",
  Commerce: "bg-yellow-100 text-yellow-700 border-yellow-200",
  IT: "bg-rose-100 text-rose-700 border-rose-200",
  "Computer Science": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Hindi: "bg-pink-100 text-pink-700 border-pink-200"
};
const ACTION_CARDS = [
  {
    id: "homework",
    icon: BookOpen,
    label: "Create Homework",
    description: "Assign new tasks and view submissions from students",
    to: "/teacher/homework",
    emoji: "📝",
    gradient: "from-violet-500 to-purple-600",
    stat: "Manage Assignments"
  },
  {
    id: "timetable",
    icon: Calendar,
    label: "Manage Timetable",
    description: "Update your weekly class schedule for all classes",
    to: "/teacher/timetable",
    emoji: "🗓️",
    gradient: "from-purple-500 to-indigo-600",
    stat: "Mon – Sat"
  },
  {
    id: "students",
    icon: Users,
    label: "View Students",
    description: "Browse all registered students, filter by class",
    to: "/teacher/students",
    emoji: "🎓",
    gradient: "from-fuchsia-500 to-purple-600",
    stat: "Full Registry"
  },
  {
    id: "announcements",
    icon: Bell,
    label: "Post Announcement",
    description: "Send important notices to one or more classes",
    to: "/teacher/announcements",
    emoji: "📢",
    gradient: "from-pink-500 to-purple-600",
    stat: "Broadcast Now"
  }
];
function TeacherDashboardPage() {
  const { teacherProfile, isLoading } = useAuth();
  const { actor } = useActor(createActor);
  const [studentCount, setStudentCount] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!actor) return;
    actor.getStudentList().then((res) => {
      if (res.__kind__ === "ok") setStudentCount(res.ok.length);
    });
  }, [actor]);
  const name = (teacherProfile == null ? void 0 : teacherProfile.name) ?? "Teacher";
  const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const subjects = (teacherProfile == null ? void 0 : teacherProfile.subjects) ?? TEACHER_SUBJECTS[name] ?? [];
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 glass rounded-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 glass rounded-2xl animate-pulse" }, i)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { type: "spring", stiffness: 70, damping: 18 },
        className: "relative overflow-hidden rounded-3xl grad-purple-deep text-white px-6 py-8 sm:px-10",
        "data-ocid": "teacher-dashboard-header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row sm:items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0.7, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.2, type: "spring", stiffness: 120 },
                className: "w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg shrink-0",
                children: initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 16, className: "text-white/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm font-body", children: "Teacher Dashboard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl sm:text-3xl font-bold text-white leading-tight", children: [
                "Welcome back, ",
                name,
                "! 👋"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 font-body text-sm mt-1", children: (teacherProfile == null ? void 0 : teacherProfile.bio) ?? "Ready to inspire young minds today?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: subjects.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 0.35 + subjects.indexOf(sub) * 0.07 },
                  className: "px-3 py-1 rounded-full text-xs font-semibold bg-white/20 border border-white/30 text-white backdrop-blur-sm",
                  children: sub
                },
                sub
              )) })
            ] }),
            studentCount !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.4 },
                className: "shrink-0 glass-dark rounded-2xl px-5 py-4 text-center border border-white/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold text-white", children: studentCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs font-body mt-0.5", children: "Total Students" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
      { label: "Subjects", value: subjects.length, icon: "📚" },
      { label: "Classes", value: "6–10", icon: "🏫" },
      { label: "Today's Sessions", value: "3", icon: "⏰" },
      { label: "Pending Reviews", value: "5", icon: "✏️" }
    ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 + i * 0.07, type: "spring" },
        className: "glass rounded-2xl p-4 text-center border border-purple-100/60",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡" }),
            " Quick Actions"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: ACTION_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: 0.35 + i * 0.09,
            type: "spring",
            stiffness: 70
          },
          whileHover: {
            scale: 1.03,
            rotateX: 1.5,
            rotateY: 1,
            boxShadow: "0 20px 60px rgba(124,58,237,0.25)"
          },
          style: { transformStyle: "preserve-3d" },
          "data-ocid": `teacher-action-${card.id}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: card.to, className: "block h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl border border-purple-100/60 overflow-hidden h-full flex flex-col group transition-smooth cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-1.5 w-full bg-gradient-to-r ${card.gradient}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { size: 22, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-base leading-tight", children: card.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-1 leading-snug", children: card.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-2 border-t border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-50 text-primary border-purple-200 text-xs", children: card.stat }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronRight,
                  {
                    size: 16,
                    className: "text-primary transition-transform group-hover:translate-x-1"
                  }
                )
              ] })
            ] })
          ] }) })
        },
        card.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.7 },
        className: "glass rounded-2xl p-6 border border-purple-100/60",
        "data-ocid": "teacher-subjects-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 20, className: "text-primary" }),
            "Your Subjects"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: subjects.map((sub, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.75 + i * 0.07, type: "spring" },
              whileHover: { scale: 1.06 },
              className: `flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-smooth cursor-default ${SUBJECT_COLORS[sub] ?? "bg-muted text-foreground border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-current opacity-60" }),
                sub
              ]
            },
            sub
          )) }),
          (teacherProfile == null ? void 0 : teacherProfile.contactPhone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground font-body flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📞" }),
            "Contact:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: teacherProfile.contactPhone })
          ] })
        ]
      }
    )
  ] });
}
export {
  TeacherDashboardPage as default
};
