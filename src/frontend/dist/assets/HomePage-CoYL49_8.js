import { r as resolveElements, a as reactExports, c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link, Q as QrCode, M as MessageCircle, b as Logo } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { C as ChartColumn, u as useSpring } from "./chart-column-CPcA7MLv.js";
import { u as useMotionValue, a as animate } from "./index-BRbfybbd.js";
import { P as Phone } from "./phone-D0RE3Rf7.js";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
const FEATURES = [
  {
    icon: ChartColumn,
    emoji: "📊",
    title: "Progress Tracking",
    desc: "Monitor your learning journey with animated graphs.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Bot,
    emoji: "🗓️",
    title: "Smart Planner",
    desc: "AI-powered study schedule tailored to your goals.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: QrCode,
    emoji: "✅",
    title: "QR Attendance",
    desc: "Mark attendance in a snap — scan and you're done.",
    color: "from-fuchsia-500 to-violet-500"
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Doubt Chat",
    desc: "Ask teachers anytime via live interactive chat.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Gamification",
    desc: "Earn streaks, badges, and climb the leaderboard.",
    color: "from-purple-600 to-fuchsia-500"
  },
  {
    icon: ChartColumn,
    emoji: "📈",
    title: "Analytics",
    desc: "Visual insights on your growth across all subjects.",
    color: "from-violet-600 to-purple-400"
  }
];
const STATS = [
  { label: "Students", end: 500, suffix: "+", prefix: "" },
  { label: "Pass Rate", end: 95, suffix: "%", prefix: "" },
  { label: "Subjects", end: 10, suffix: "+", prefix: "" },
  { label: "Expert Teachers", end: 3, suffix: "", prefix: "" }
];
const TEACHERS = [
  {
    name: "Sangya Ma'am",
    subject: "English, Science & Social Studies",
    phone: "7355367393",
    initials: "SM",
    color: "from-violet-500 to-purple-600",
    emoji: "📖"
  },
  {
    name: "Shruti Ma'am",
    subject: "Maths, Geography & Commerce",
    phone: "8879102547",
    initials: "SH",
    color: "from-fuchsia-500 to-pink-500",
    emoji: "📐"
  },
  {
    name: "Shristi Ma'am",
    subject: "IT, Computer Science & Hindi",
    phone: "7039375142",
    initials: "SR",
    color: "from-purple-600 to-indigo-500",
    emoji: "💻"
  }
];
const FLOATING_ICONS = [
  { icon: "✏️", x: "8%", y: "20%", delay: 0, duration: 4 },
  { icon: "📚", x: "88%", y: "15%", delay: 0.5, duration: 5 },
  { icon: "🧠", x: "5%", y: "70%", delay: 1, duration: 4.5 },
  { icon: "🎓", x: "92%", y: "65%", delay: 1.5, duration: 3.5 },
  { icon: "⭐", x: "18%", y: "85%", delay: 0.8, duration: 4.2 },
  { icon: "🔢", x: "78%", y: "80%", delay: 0.3, duration: 5.2 },
  { icon: "💡", x: "50%", y: "8%", delay: 1.2, duration: 4.8 },
  { icon: "🏆", x: "35%", y: "90%", delay: 0.6, duration: 3.8 }
];
function AnimatedCounter({
  end,
  suffix,
  prefix
}) {
  const ref = reactExports.useRef(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 12 });
  const isInView = useInView(ref, { once: true });
  reactExports.useEffect(() => {
    if (isInView) {
      animate(motionVal, end, { duration: 1.8 });
    }
  }, [isInView, end, motionVal]);
  reactExports.useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix, prefix]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "font-display text-4xl sm:text-5xl font-bold text-white",
      children: [
        prefix,
        "0",
        suffix
      ]
    }
  );
}
function FeatureCard({
  icon: Icon,
  emoji,
  title,
  desc,
  color,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
      whileHover: {
        rotateX: 3,
        rotateY: 3,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      },
      style: { transformStyle: "preserve-3d" },
      className: "glass rounded-2xl p-6 group cursor-pointer hover-glow",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-smooth`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-body leading-relaxed", children: desc })
      ]
    }
  );
}
function TeacherCard({
  teacher,
  index
}) {
  const wa = `https://wa.me/91${teacher.phone}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.15, duration: 0.5 },
      whileHover: { y: -6, transition: { type: "spring", stiffness: 300 } },
      className: "glass rounded-2xl p-6 text-center hover-glow",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: [0, 360] },
              transition: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              },
              className: `absolute inset-0 rounded-full bg-gradient-to-br ${teacher.color} blur-sm opacity-60`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `relative w-20 h-20 rounded-full bg-gradient-to-br ${teacher.color} flex items-center justify-center text-white font-display font-bold text-xl shadow-glow`,
              children: teacher.initials
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 -right-1 text-xl", children: teacher.emoji })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-1", children: teacher.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-body mb-4", children: teacher.subject }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: teacher.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: wa, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold gap-2",
            "data-ocid": `teacher-wa-${index}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  className: "w-4 h-4 fill-white",
                  "aria-label": "WhatsApp",
                  role: "img",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "WhatsApp" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.139.565 4.147 1.549 5.881L0 24l6.29-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.005-1.374l-.359-.212-3.731.897.931-3.618-.234-.372A9.818 9.818 0 012.182 12C2.182 6.557 6.557 2.182 12 2.182S21.818 6.557 21.818 12 17.443 21.818 12 21.818z" })
                  ]
                }
              ),
              "Chat on WhatsApp"
            ]
          }
        ) })
      ]
    }
  );
}
function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[100svh] flex items-center",
        style: {
          background: "linear-gradient(135deg, #2e1065 0%, #4c1d95 25%, #7c3aed 55%, #a855f7 80%, #c084fc 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 opacity-30",
              animate: {
                background: [
                  "radial-gradient(ellipse at 20% 50%, #7c3aed 0%, transparent 60%)",
                  "radial-gradient(ellipse at 80% 50%, #a855f7 0%, transparent 60%)",
                  "radial-gradient(ellipse at 50% 80%, #c084fc 0%, transparent 60%)",
                  "radial-gradient(ellipse at 20% 50%, #7c3aed 0%, transparent 60%)"
                ]
              },
              transition: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-80px] right-[-80px] w-96 h-96 bg-white/10 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-60px] left-[-60px] w-72 h-72 bg-purple-300/20 rounded-full blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" }),
          FLOATING_ICONS.map(({ icon, x, y, delay, duration }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute hidden sm:flex items-center justify-center text-3xl select-none pointer-events-none",
              style: { left: x, top: y },
              animate: { y: [0, -16, 0], rotate: [0, 8, 0] },
              transition: {
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              children: icon
            },
            `${icon}-${x}`
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: containerVariants,
                  initial: "hidden",
                  animate: "visible",
                  className: "flex-1 text-center lg:text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-white/20 text-white border-white/30 text-xs font-medium px-4 py-1.5 backdrop-blur-sm", children: "✨ Where learning is fun" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.h1,
                      {
                        variants: itemVariants,
                        className: "font-display text-4xl sm:text-5xl xl:text-7xl font-bold text-white leading-tight mb-4",
                        children: [
                          "Welcome to",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                background: "linear-gradient(90deg, #e9d5ff, #f3e8ff, #fff, #c4b5fd)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                              },
                              children: "Shristi Tutorials"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        variants: itemVariants,
                        className: "font-display text-xl sm:text-2xl xl:text-3xl font-semibold text-purple-200 mb-6",
                        children: [
                          "Where Learning is",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.span,
                            {
                              animate: { scale: [1, 1.05, 1] },
                              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                              className: "inline-block text-white",
                              children: "Fun"
                            }
                          ),
                          " ",
                          "🎉"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        variants: itemVariants,
                        className: "text-purple-100 text-base sm:text-lg font-body max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed",
                        children: "A premium EdTech platform for Class 1–10 students. Track progress, plan smarter with AI, and make every study session count."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        variants: itemVariants,
                        className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              whileHover: { scale: 1.06 },
                              whileTap: { scale: 0.96 },
                              transition: { type: "spring", stiffness: 400, damping: 15 },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Button,
                                {
                                  size: "lg",
                                  "data-ocid": "hero-start-learning",
                                  className: "bg-white text-primary hover:bg-purple-50 font-bold px-8 shadow-glow text-base w-full sm:w-auto",
                                  children: [
                                    "Start Learning ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2", size: 18 })
                                  ]
                                }
                              )
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              whileHover: { scale: 1.04 },
                              whileTap: { scale: 0.96 },
                              transition: { type: "spring", stiffness: 400, damping: 15 },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  size: "lg",
                                  variant: "outline",
                                  "data-ocid": "hero-student-login",
                                  className: "border-white/40 text-white hover:bg-white/15 font-semibold px-8 text-base backdrop-blur-sm w-full sm:w-auto",
                                  children: "Student Login"
                                }
                              )
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              whileHover: { scale: 1.04 },
                              whileTap: { scale: 0.96 },
                              transition: { type: "spring", stiffness: 400, damping: 15 },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  size: "lg",
                                  "data-ocid": "hero-teacher-login",
                                  className: "bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 text-base backdrop-blur-sm w-full sm:w-auto",
                                  children: "Teacher Login"
                                }
                              )
                            }
                          ) })
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.7, rotate: -8 },
                  animate: { opacity: 1, scale: 1, rotate: 0 },
                  transition: {
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100
                  },
                  className: "flex-shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { y: [0, -14, 0] },
                        transition: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        className: "w-full h-full",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-glass-lg w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(OWLMascot, {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-primary text-center relative z-10", children: "Ready to learn?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-body text-center relative z-10", children: "Your daily goal awaits!" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-1 relative z-10", children: ["🔥", "⭐", "🏆"].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.span,
                            {
                              className: "text-2xl",
                              animate: { scale: [1, 1.25, 1], rotate: [0, 10, 0] },
                              transition: {
                                duration: 1.5,
                                delay: i * 0.3,
                                repeat: Number.POSITIVE_INFINITY
                              },
                              children: e
                            },
                            e
                          )) })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { y: [0, -8, 0] },
                        transition: {
                          duration: 3,
                          delay: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        className: "absolute -top-4 -right-4 glass-purple rounded-2xl px-3 py-2 shadow-glass border border-purple-300/30",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-white text-sm font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-300 text-base", children: "🔥" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7-day streak!" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { y: [0, -10, 0] },
                        transition: {
                          duration: 3.5,
                          delay: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        className: "absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-glass",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-primary text-sm font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-500 text-base", children: "⭐" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rank #3" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { y: [0, -6, 0] },
                        transition: {
                          duration: 4,
                          delay: 1.8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        className: "absolute top-1/2 -left-8 glass rounded-xl px-2.5 py-1.5 shadow-glass",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-primary text-xs font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏆" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1840 pts" })
                        ] })
                      }
                    )
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.5 },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body", children: "Scroll to explore" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { y: [0, 6, 0] },
                      transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                      className: "w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 bg-white/60 rounded-full" })
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1", children: "Platform Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4", children: [
              "Everything You Need to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Succeed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-xl mx-auto text-base sm:text-lg", children: "From AI study planners to live doubt resolution — Shristi Tutorials has it all in one place." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { ...f, index: i }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 opacity-20",
              animate: {
                background: [
                  "radial-gradient(ellipse at 0% 50%, #c4b5fd 0%, transparent 60%)",
                  "radial-gradient(ellipse at 100% 50%, #e9d5ff 0%, transparent 60%)",
                  "radial-gradient(ellipse at 0% 50%, #c4b5fd 0%, transparent 60%)"
                ]
              },
              transition: { duration: 6, repeat: Number.POSITIVE_INFINITY }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-14",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-white mb-3", children: "Why Students Love Shristi Tutorials" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-200 font-body text-base", children: "Numbers that speak for themselves" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
                className: "text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AnimatedCounter,
                    {
                      end: stat.end,
                      suffix: stat.suffix,
                      prefix: stat.prefix,
                      label: stat.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-purple-200 text-sm font-body mt-1", children: stat.label })
                ]
              },
              stat.label
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1", children: "Our Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-4", children: [
              "Meet Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Expert Teachers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-lg mx-auto", children: "Experienced educators dedicated to making every concept crystal clear for every student." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto", children: TEACHERS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherCard, { teacher: t, index: i }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.92 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              boxShadow: [
                "0 0 30px rgba(124,58,237,0.2)",
                "0 0 60px rgba(124,58,237,0.35)",
                "0 0 30px rgba(124,58,237,0.2)"
              ]
            },
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
            className: "rounded-3xl overflow-hidden",
            style: {
              background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
              padding: "2px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-10 sm:p-14 glass-dark text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: "lg", variant: "white", showTagline: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { delay: 0.3 },
                  className: "text-white/80 font-body mt-5 mb-8 text-base sm:text-lg max-w-md mx-auto leading-relaxed",
                  children: "Join 500+ students already learning smarter. Every session brings you one step closer to your dreams."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.07 },
                  whileTap: { scale: 0.95 },
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                  className: "inline-block",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "bg-white text-primary hover:bg-purple-50 font-bold px-12 py-6 text-lg shadow-glow",
                      "data-ocid": "cta-get-started",
                      children: "Get Started Now 🚀"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-xs font-body mt-4", children: "No fees. No setup. Just learning." })
            ] })
          }
        )
      }
    ) }) })
  ] });
}
function OWLMascot() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "relative w-24 h-24",
      animate: { y: [0, -4, 0] },
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          viewBox: "0 0 120 120",
          className: "w-full h-full drop-shadow-lg",
          "aria-label": "Shristi Tutorials Owl Mascot",
          role: "img",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Shristi Tutorials Owl Mascot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "60", cy: "75", rx: "32", ry: "38", fill: "#7c3aed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "42", r: "28", fill: "#6d28d9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "38,20 32,6 46,16", fill: "#5b21b6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "82,20 88,6 74,16", fill: "#5b21b6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "49", cy: "40", r: "12", fill: "white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "71", cy: "40", r: "12", fill: "white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.g,
              {
                animate: { scaleY: [1, 0.1, 1] },
                transition: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  times: [0, 0.5, 1]
                },
                style: { transformOrigin: "60px 40px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "49", cy: "40", r: "7", fill: "#4c1d95" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "71", cy: "40", r: "7", fill: "#4c1d95" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "51", cy: "38", r: "2.5", fill: "white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "73", cy: "38", r: "2.5", fill: "white" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "55,50 65,50 60,58", fill: "#fbbf24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ellipse",
              {
                cx: "24",
                cy: "80",
                rx: "12",
                ry: "20",
                fill: "#5b21b6",
                transform: "rotate(-15 24 80)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ellipse",
              {
                cx: "96",
                cy: "80",
                rx: "12",
                ry: "20",
                fill: "#5b21b6",
                transform: "rotate(15 96 80)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "60", cy: "82", rx: "18", ry: "22", fill: "#a78bfa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "112", rx: "8", ry: "4", fill: "#fbbf24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "70", cy: "112", rx: "8", ry: "4", fill: "#fbbf24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "38", y: "16", width: "44", height: "6", rx: "2", fill: "#1e1b4b" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "60,8 80,16 60,16 40,16", fill: "#1e1b4b" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: "80",
                y1: "16",
                x2: "86",
                y2: "26",
                stroke: "#fbbf24",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "86", cy: "27", r: "3", fill: "#fbbf24" })
          ]
        }
      )
    }
  );
}
export {
  HomePage as default
};
