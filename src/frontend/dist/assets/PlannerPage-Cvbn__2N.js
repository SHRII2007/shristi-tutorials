import { c as createLucideIcon, u as useActor, e as useAuth, a as reactExports, g as ue, j as jsxRuntimeExports, A as AnimatePresence, m as motion, C as Calendar, S as Skeleton, X, q as BookOpen, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-Cl9XV48G.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { u as useStudentData } from "./useStudentData-r1rfZghm.js";
import { S as Sparkles } from "./sparkles-DTxUO03Y.js";
import { C as CircleCheck } from "./circle-check-BcRzBvzu.js";
import { P as Plus } from "./plus-BdApgZ7F.js";
import { u as useMotionValue, b as useTransform, a as animate } from "./index-BRbfybbd.js";
import { C as ChevronRight } from "./chevron-right-KPK3W_5h.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
];
const BrainCircuit = createLucideIcon("brain-circuit", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const LS_KEY = "shristi_planner_tasks_v1";
function loadTasks() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [];
}
function saveTasks(tasks) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
  } catch {
  }
}
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TODAY_IDX = (/* @__PURE__ */ new Date()).getDay() === 0 ? 6 : (/* @__PURE__ */ new Date()).getDay() - 1;
const WEEK_TASKS = {
  0: ["Maths worksheet", "English grammar practice"],
  1: ["Science chapter", "Social Studies notes"],
  2: ["Geography map work", "Maths formulas"],
  3: ["Computer Science practical", "Hindi reading"],
  4: ["Past year paper", "Commerce revision"],
  5: ["Maths mock test", "IT lab assignment"],
  6: ["Weekly revision", "Doubt clearing"]
};
const AI_SUGGESTIONS = [
  {
    id: "s1",
    icon: "📐",
    title: "Focus on Maths Chapter 5",
    desc: "You're 3 days behind schedule. A 45-min session with Shruti Ma'am's notes will close the gap!",
    color: "from-purple-500/10 to-violet-500/5 border-purple-300/40"
  },
  {
    id: "s2",
    icon: "💻",
    title: "Complete Computer Science practical",
    desc: "Shristi Ma'am's Python assignment is due Friday. Review loops and functions first.",
    color: "from-indigo-500/10 to-blue-500/5 border-indigo-300/40"
  },
  {
    id: "s3",
    icon: "📖",
    title: "Revise English comprehension",
    desc: "Daily 15-min reading with Sangya Ma'am's techniques will boost your score by ~8 points.",
    color: "from-green-500/10 to-emerald-500/5 border-green-300/40"
  }
];
const SUBJECTS = [
  "English",
  "Science",
  "Social Studies",
  "Maths",
  "Geography",
  "Commerce",
  "IT",
  "Computer Science",
  "Hindi"
];
const CONFETTI_COLORS = [
  "#7c3aed",
  "#c4b5fd",
  "#f9a8d4",
  "#fde68a",
  "#a5f3fc",
  "#6ee7b7",
  "#f87171"
];
const subjectStyle = {
  Maths: "bg-purple-100 text-purple-700",
  Science: "bg-blue-100 text-blue-700",
  English: "bg-green-100 text-green-700",
  "Social Studies": "bg-orange-100 text-orange-700",
  Geography: "bg-teal-100 text-teal-700",
  Commerce: "bg-yellow-100 text-yellow-700",
  IT: "bg-cyan-100 text-cyan-700",
  "Computer Science": "bg-indigo-100 text-indigo-700",
  Hindi: "bg-pink-100 text-pink-700"
};
const priorityStyle = {
  high: "bg-red-100 text-red-600 border-red-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  low: "bg-emerald-100 text-emerald-700 border-emerald-200"
};
function ConfettiCelebration({ onDone }) {
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: Math.random() * 0.8,
    duration: 1.5 + Math.random() * 1.5,
    size: 6 + Math.random() * 8,
    rotate: Math.random() * 720 - 360
  }));
  reactExports.useEffect(() => {
    const t = setTimeout(onDone, 4e3);
    return () => clearTimeout(t);
  }, [onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none z-50 overflow-hidden",
      "aria-hidden": "true",
      children: [
        pieces.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: {
              position: "absolute",
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px"
            },
            initial: { y: -20, opacity: 1, rotate: 0 },
            animate: {
              y: typeof window !== "undefined" ? window.innerHeight + 40 : 800,
              opacity: [1, 1, 0],
              rotate: p.rotate
            },
            transition: { delay: p.delay, duration: p.duration, ease: "easeIn" }
          },
          p.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.5, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { type: "spring", stiffness: 300, damping: 20 },
            className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[51]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl px-8 py-6 shadow-glass border border-purple-300/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-2", children: "🎉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-foreground", children: "Amazing!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm mt-1", children: "You completed today's plan!" })
            ] })
          }
        )
      ]
    }
  );
}
function AnimatedCheckbox({
  checked,
  onToggle,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      type: "button",
      onClick: onToggle,
      disabled,
      whileTap: { scale: 0.85 },
      whileHover: { scale: disabled ? 1 : 1.1 },
      className: `w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${checked ? "bg-primary border-primary text-primary-foreground shadow-glow-sm" : "border-muted-foreground/30 bg-background hover:border-primary"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
      "aria-label": checked ? "Mark incomplete" : "Mark complete",
      "data-ocid": `task-checkbox-${checked ? "checked" : "unchecked"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: checked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.svg,
        {
          viewBox: "0 0 12 10",
          width: 14,
          height: 14,
          role: "img",
          "aria-label": "Task completed",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          exit: { pathLength: 0 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Task completed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.path,
              {
                d: "M1 5 L4.5 8.5 L11 1",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none",
                initial: { pathLength: 0 },
                animate: { pathLength: 1 },
                transition: { duration: 0.3, ease: "easeOut" }
              }
            )
          ]
        },
        "check"
      ) })
    }
  );
}
function TaskCard({
  task,
  index,
  onToggle,
  isCompleting
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20, scale: 0.95 },
      transition: {
        delay: index * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 22
      },
      className: `flex items-center gap-3 p-4 rounded-2xl glass card-hover transition-smooth ${task.completed ? "border border-emerald-300/50 bg-emerald-50/30" : "border border-border/40 shadow-glass"}`,
      "data-ocid": `task-item-${task.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedCheckbox,
          {
            checked: task.completed,
            onToggle: () => onToggle(task.id),
            disabled: isCompleting
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              animate: { opacity: task.completed ? 0.5 : 1 },
              className: `font-body font-semibold text-sm truncate ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`,
              children: task.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-2 py-0.5 rounded-full font-medium ${subjectStyle[task.subject] ?? "bg-muted text-muted-foreground"}`,
                children: task.subject
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 10 }),
              task.estimatedMinutes,
              " min"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs px-2 py-0.5 rounded-full border font-medium capitalize ${priorityStyle[task.priority] ?? priorityStyle.medium}`,
              children: task.priority
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground hidden sm:inline-flex items-center gap-1 bg-muted/60 rounded-lg px-2 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
            task.dueDate
          ] })
        ] })
      ]
    }
  );
}
function AnimatedProgressBar({
  value,
  allDone
}) {
  const width = useMotionValue(0);
  const progressWidth = useTransform(width, (v) => `${v}%`);
  reactExports.useEffect(() => {
    const controls = animate(width, value, {
      duration: 1.4,
      ease: [0.34, 1.56, 0.64, 1]
    });
    return controls.stop;
  }, [value, width]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-4 bg-muted/60 rounded-full overflow-hidden shadow-neumorphic-inset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { width: progressWidth },
      className: `h-full rounded-full relative overflow-hidden transition-colors duration-500 ${allDone ? "bg-gradient-to-r from-emerald-400 to-green-500" : "grad-purple"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent",
          animate: { x: ["-100%", "200%"] },
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "linear"
          }
        }
      )
    }
  ) });
}
function WeeklyPlan() {
  const [selectedDay, setSelectedDay] = reactExports.useState(TODAY_IDX);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.35 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-primary" }),
          "This Week"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1.5", children: DAYS.map((day, idx) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                type: "button",
                whileTap: { scale: 0.9 },
                onClick: () => setSelectedDay(idx),
                "data-ocid": `week-day-${day.toLowerCase()}`,
                className: `flex flex-col items-center py-2.5 rounded-xl text-xs font-medium font-body transition-smooth ${selectedDay === idx ? "grad-purple text-white shadow-glow-sm" : idx === TODAY_IDX ? "bg-primary/10 text-primary border border-primary/30" : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `mt-1 text-[10px] font-bold ${selectedDay === idx ? "text-white/80" : "text-muted-foreground"}`,
                      children: ((_a = WEEK_TASKS[idx]) == null ? void 0 : _a.length) ?? 0
                    }
                  )
                ]
              },
              day
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.2 },
              className: "space-y-2",
              children: [
                (WEEK_TASKS[selectedDay] ?? []).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary/70 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-foreground", children: t }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChevronRight,
                        {
                          size: 14,
                          className: "ml-auto text-muted-foreground"
                        }
                      )
                    ]
                  },
                  t
                )),
                selectedDay === TODAY_IDX && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium text-center mt-1", children: "← Today" })
              ]
            },
            selectedDay
          ) })
        ] })
      ] })
    }
  );
}
function AISuggestions({
  onAddSuggestion
}) {
  const [added, setAdded] = reactExports.useState(/* @__PURE__ */ new Set());
  const handleAdd = (id, title, subject) => {
    setAdded((prev) => new Set(prev).add(id));
    onAddSuggestion(title, subject);
    ue.success(`✅ "${title}" added to your plan!`, { duration: 3e3 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.45, type: "spring", stiffness: 220, damping: 24 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-purple shadow-glass border-border/50 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 grad-purple rounded-xl flex items-center justify-center shadow-glow-sm flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 16, className: "text-primary" }),
              "AI Suggestions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5", children: "Personalised recommendations for you" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: AI_SUGGESTIONS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            transition: {
              delay: 0.55 + i * 0.1,
              type: "spring",
              stiffness: 240,
              damping: 22
            },
            className: `p-4 rounded-2xl border bg-gradient-to-br ${s.color} hover-glow transition-smooth`,
            "data-ocid": `ai-suggestion-${s.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0 mt-0.5", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: s.desc })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.08 },
                  whileTap: { scale: 0.93 },
                  className: "flex-shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => handleAdd(
                        s.id,
                        s.title,
                        s.icon === "📐" ? "Maths" : s.icon === "💻" ? "Computer Science" : "English"
                      ),
                      disabled: added.has(s.id),
                      className: `text-xs px-3 py-1.5 h-auto rounded-xl transition-smooth ${added.has(s.id) ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "border-primary/40 text-primary hover:bg-primary hover:text-white"}`,
                      "data-ocid": `suggestion-add-${s.id}`,
                      children: added.has(s.id) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
                        "Added"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                        "Add to Plan"
                      ] })
                    }
                  )
                }
              )
            ] })
          },
          s.id
        )) })
      ] })
    }
  );
}
function AddTaskForm({
  onAdd,
  onClose
}) {
  const [title, setTitle] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState(SUBJECTS[0]);
  const [dueDate, setDueDate] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [priority, setPriority] = reactExports.useState("medium");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      subject,
      dueDate,
      priority,
      estimatedMinutes: 30
    });
    setTitle("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.form,
    {
      onSubmit: handleSubmit,
      initial: { opacity: 0, y: -12, scale: 0.97 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -12, scale: 0.97 },
      transition: { duration: 0.25 },
      className: "glass border border-primary/30 rounded-2xl p-4 space-y-3 shadow-glass",
      "data-ocid": "add-task-form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground", children: "Add New Task" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "text-muted-foreground hover:text-foreground transition-smooth",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "task-title",
              className: "font-body text-xs text-muted-foreground",
              children: "Task Title *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "task-title",
              placeholder: "e.g. Complete Chapter 5 exercises",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              className: "font-body h-9 text-sm",
              "data-ocid": "task-title-input",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2 sm:col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "task-subject",
                className: "font-body text-xs text-muted-foreground",
                children: "Subject"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "task-subject",
                value: subject,
                onChange: (e) => setSubject(e.target.value),
                className: "w-full h-9 rounded-md border border-input bg-background px-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40",
                "data-ocid": "task-subject-select",
                children: SUBJECTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "task-due",
                className: "font-body text-xs text-muted-foreground",
                children: "Due Date"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "task-due",
                type: "date",
                value: dueDate,
                onChange: (e) => setDueDate(e.target.value),
                className: "font-body h-9 text-sm",
                "data-ocid": "task-due-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "task-priority",
                className: "font-body text-xs text-muted-foreground",
                children: "Priority"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "task-priority",
                value: priority,
                onChange: (e) => setPriority(e.target.value),
                className: "w-full h-9 rounded-md border border-input bg-background px-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40",
                "data-ocid": "task-priority-select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "🔴 High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "🟡 Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "🟢 Low" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "submit",
              size: "sm",
              className: "grad-purple text-white border-0 shadow-glow-sm flex-1 sm:flex-none",
              "data-ocid": "add-task-submit",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "mr-1" }),
                "Add Task"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "outline",
              onClick: onClose,
              className: "border-border/60",
              children: "Cancel"
            }
          )
        ] })
      ]
    }
  );
}
function FilterBar({
  filter,
  setFilter,
  subjectFilter,
  setSubjectFilter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
    ["all", "pending", "done"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFilter(f),
        className: `px-3 py-1 rounded-full text-xs font-body font-medium capitalize transition-smooth ${filter === f ? "bg-primary text-white shadow-glow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
        "data-ocid": `filter-${f}`,
        children: f
      },
      f
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: subjectFilter,
        onChange: (e) => setSubjectFilter(e.target.value),
        className: "h-7 rounded-full border border-input bg-muted px-3 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary/40",
        "data-ocid": "subject-filter",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Subjects" }),
          SUBJECTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
        ]
      }
    )
  ] });
}
function PlannerPage() {
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile, principal } = useAuth();
  const { streak } = useStudentData();
  const studentId = (studentProfile == null ? void 0 : studentProfile.rollNumber) ?? principal ?? "";
  const [tasks, setTasks] = reactExports.useState(loadTasks);
  const [isLoadingTasks, setIsLoadingTasks] = reactExports.useState(false);
  const [completingIds, setCompletingIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showConfetti, setShowConfetti] = reactExports.useState(false);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [filter, setFilter] = reactExports.useState("all");
  const [subjectFilter, setSubjectFilter] = reactExports.useState("");
  const wasAllDoneRef = reactExports.useRef(false);
  const backendLoaded = reactExports.useRef(false);
  reactExports.useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  reactExports.useEffect(() => {
    if (!actor || isFetching || !studentId || backendLoaded.current) return;
    backendLoaded.current = true;
    setIsLoadingTasks(true);
    actor.getStudyTasks(studentId).then((backendTasks) => {
      if (backendTasks.length > 0) {
        const mapped = backendTasks.map((t) => ({
          id: t.id,
          title: t.title,
          subject: t.subject,
          dueDate: t.dueDate,
          completed: t.completed,
          priority: ["high", "medium", "low"].includes(t.priority) ? t.priority : "medium",
          estimatedMinutes: 30
        }));
        setTasks((prev) => {
          const backendIds = new Set(mapped.map((t) => t.id));
          const localOnly = prev.filter(
            (t) => !backendIds.has(t.id) && t.id.startsWith("local-")
          );
          return [...mapped, ...localOnly];
        });
      }
    }).catch(() => {
    }).finally(() => setIsLoadingTasks(false));
  }, [actor, isFetching, studentId]);
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const pct = totalCount > 0 ? Math.round(completedCount / totalCount * 100) : 0;
  const allDone = completedCount === totalCount && totalCount > 0;
  reactExports.useEffect(() => {
    if (allDone && !wasAllDoneRef.current) {
      wasAllDoneRef.current = true;
      setShowConfetti(true);
    } else if (!allDone) {
      wasAllDoneRef.current = false;
    }
  }, [allDone]);
  const toggleTask = reactExports.useCallback(
    async (id) => {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      const newCompleted = !task.completed;
      setTasks(
        (prev) => prev.map((t) => t.id === id ? { ...t, completed: newCompleted } : t)
      );
      if (newCompleted) {
        ue.success(`✅ "${task.title}" completed!`, { duration: 2500 });
      }
      if (actor && !isFetching && newCompleted) {
        setCompletingIds((prev) => new Set(prev).add(id));
        try {
          await actor.completeTask(id);
        } catch {
        } finally {
          setCompletingIds((prev) => {
            const s = new Set(prev);
            s.delete(id);
            return s;
          });
        }
      }
    },
    [tasks, actor, isFetching]
  );
  const handleAddTask = reactExports.useCallback(
    (newTask) => {
      const id = `local-${Date.now()}`;
      const task = { ...newTask, id, completed: false };
      setTasks((prev) => [task, ...prev]);
      setShowAddForm(false);
      ue.success(`📝 "${newTask.title}" added to your plan!`, {
        duration: 2500
      });
    },
    []
  );
  const handleAddFromSuggestion = reactExports.useCallback(
    (title, subject) => {
      const id = `suggest-${Date.now()}`;
      const task = {
        id,
        title,
        subject,
        dueDate: "This Week",
        completed: false,
        priority: "medium",
        estimatedMinutes: 45
      };
      setTasks((prev) => [task, ...prev]);
    },
    []
  );
  const filteredTasks = tasks.filter((t) => {
    const matchFilter = filter === "all" || filter === "pending" && !t.completed || filter === "done" && t.completed;
    const matchSubject = !subjectFilter || t.subject === subjectFilter;
    return matchFilter && matchSubject;
  });
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiCelebration, { onDone: () => setShowConfetti(false) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { type: "spring", stiffness: 280, damping: 24 },
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent leading-tight", children: "📚 AI Study Planner" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body mt-1 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-primary" }),
                "Smart study schedule — ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Where learning is fun" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl px-4 py-2.5 border border-border/40 shadow-glass", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 18, className: "text-orange-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body leading-none", children: "Streak" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-sm leading-tight", children: [
                    streak.current,
                    " days 🔥"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-4 py-2.5 border border-border/40 shadow-glass hidden sm:block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body leading-none", children: "Today" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-xs leading-tight max-w-[140px] truncate", children: today })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass shadow-glass border-border/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-xl", children: "Today's Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm font-body mt-0.5", children: [
                  completedCount,
                  "/",
                  totalCount,
                  " Tasks Complete"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: allDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { scale: 0, rotate: -20 },
                  animate: { scale: 1, rotate: 0 },
                  exit: { scale: 0 },
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 18
                  },
                  className: "flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl border border-emerald-200 font-medium text-sm font-body",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
                    "All done!"
                  ]
                },
                "done"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "text-3xl font-display font-bold text-primary",
                  children: [
                    pct,
                    "%"
                  ]
                },
                "progress"
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedProgressBar, { value: pct, allDone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: allDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: "text-center text-emerald-600 font-body font-semibold text-sm mt-3",
                children: "🎉 Amazing! You completed today's plan!"
              }
            ) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-primary" }),
                  "My Tasks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "bg-primary/10 text-primary border-primary/20 font-body",
                    children: [
                      completedCount,
                      "/",
                      totalCount,
                      " done"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FilterBar,
                {
                  filter,
                  setFilter,
                  subjectFilter,
                  setSubjectFilter
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              isLoadingTasks ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-2xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filteredTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "py-8 text-center",
                  "data-ocid": "planner-empty-state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-2", children: "📋" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: filter === "all" && !subjectFilter ? "No tasks yet!" : "No tasks here" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: filter === "all" && !subjectFilter ? "Add your first task using the button below" : "Change your filter or add a new task" })
                  ]
                },
                "empty"
              ) : filteredTasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TaskCard,
                {
                  task,
                  index: i,
                  onToggle: toggleTask,
                  isCompleting: completingIds.has(task.id)
                },
                task.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
                AddTaskForm,
                {
                  onAdd: handleAddTask,
                  onClose: () => setShowAddForm(false)
                },
                "add-form"
              ) }),
              !showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.01 },
                  whileTap: { scale: 0.98 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "w-full mt-2 border-dashed border-primary/40 text-primary hover:bg-primary/5 rounded-2xl py-5 font-body font-medium",
                      "data-ocid": "add-task-btn",
                      onClick: () => setShowAddForm(true),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "mr-2" }),
                        "Add new task"
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyPlan, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AISuggestions, { onAddSuggestion: handleAddFromSuggestion })
    ] })
  ] });
}
export {
  PlannerPage as default
};
