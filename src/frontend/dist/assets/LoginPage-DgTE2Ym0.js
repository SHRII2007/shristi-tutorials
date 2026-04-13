import { c as createLucideIcon, e as useAuth, f as useNavigate, a as reactExports, a2 as UserRole, j as jsxRuntimeExports, m as motion, q as BookOpen, a3 as GraduationCap, a4 as Users, b as Logo, A as AnimatePresence } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { S as Star } from "./star-CLh9meEu.js";
import { L as LoaderCircle } from "./loader-circle-COfQ0ihF.js";
import { S as Sparkles } from "./sparkles-DTxUO03Y.js";
import { C as ChevronRight } from "./chevron-right-KPK3W_5h.js";
import { C as CircleCheck } from "./circle-check-BcRzBvzu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$2);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const FLOATING_ELEMENTS = [
  {
    Icon: BookOpen,
    delay: 0,
    x: "6%",
    y: "12%",
    size: 28,
    color: "text-purple-400/30"
  },
  {
    Icon: Calculator,
    delay: 0.5,
    x: "87%",
    y: "8%",
    size: 24,
    color: "text-violet-400/25"
  },
  {
    Icon: GraduationCap,
    delay: 1,
    x: "4%",
    y: "68%",
    size: 34,
    color: "text-purple-500/30"
  },
  {
    Icon: Pencil,
    delay: 1.5,
    x: "89%",
    y: "62%",
    size: 22,
    color: "text-indigo-400/25"
  },
  {
    Icon: Users,
    delay: 1.2,
    x: "83%",
    y: "38%",
    size: 24,
    color: "text-purple-400/25"
  },
  {
    Icon: Star,
    delay: 0.3,
    x: "48%",
    y: "4%",
    size: 20,
    color: "text-yellow-400/40"
  },
  {
    Icon: BookOpen,
    delay: 2.1,
    x: "22%",
    y: "86%",
    size: 20,
    color: "text-violet-400/20"
  },
  {
    Icon: Star,
    delay: 0.9,
    x: "76%",
    y: "22%",
    size: 18,
    color: "text-yellow-300/35"
  }
];
const ALL_SUBJECTS = [
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
const CLASSES = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th"
];
const BOARDS = ["SSC", "CBSE", "IGSE", "IGCSE"];
const MEDIUMS = [
  "English",
  "Semi-English",
  "Hindi",
  "Semi-Hindi",
  "Marathi",
  "Semi-Marathi"
];
const GENDERS = ["Male", "Female", "Other"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const STEP_LABELS = ["Personal", "Academic", "Address", "Parents"];
const EMPTY_STUDENT = {
  name: "",
  dateOfBirth: "",
  gender: "",
  bloodGroup: "",
  className: "",
  board: "",
  academicMedium: "",
  rollNumber: "",
  email: "",
  livingAddress: "",
  schoolName: "",
  schoolAddress: "",
  schoolTiming: "",
  parent1Name: "",
  parent1Contact: "",
  parent2Name: "",
  parent2Contact: ""
};
function validateEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function validateStep(step, data) {
  const errs = {};
  if (step === 0) {
    if (!data.name.trim()) errs.name = "Full name is required";
    if (!data.gender) errs.gender = "Please select gender";
  }
  if (step === 1) {
    if (!data.className) errs.className = "Please select your class";
    if (!data.board) errs.board = "Please select a board";
    if (!data.academicMedium)
      errs.academicMedium = "Please select academic medium";
    if (!data.rollNumber.trim()) errs.rollNumber = "Roll number is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!validateEmail(data.email))
      errs.email = "Enter a valid email address";
  }
  if (step === 2) {
    if (!data.livingAddress.trim())
      errs.livingAddress = "Living address is required";
    if (!data.schoolName.trim()) errs.schoolName = "School name is required";
  }
  if (step === 3) {
    if (!data.parent1Name.trim())
      errs.parent1Name = "Parent 1 name is required";
    if (!data.parent1Contact.trim())
      errs.parent1Contact = "Parent 1 contact is required";
    else if (!/^\d{10}$/.test(data.parent1Contact.trim()))
      errs.parent1Contact = "Enter a valid 10-digit number";
    if (data.parent2Contact.trim() && !/^\d{10}$/.test(data.parent2Contact.trim()))
      errs.parent2Contact = "Enter a valid 10-digit number";
  }
  return errs;
}
function LoginPage() {
  const {
    login,
    isAuthenticated,
    isLoading,
    isInitializing,
    iiLoginError,
    userRole,
    studentProfile,
    teacherProfile,
    registerStudent,
    registerTeacher
  } = useAuth();
  const navigate = useNavigate();
  const [flow, setFlow] = reactExports.useState("none");
  const [studentStep, setStudentStep] = reactExports.useState(0);
  const [isRegistering, setIsRegistering] = reactExports.useState(false);
  const [isConnecting, setIsConnecting] = reactExports.useState(false);
  const [formError, setFormError] = reactExports.useState("");
  const [loginError, setLoginError] = reactExports.useState("");
  const [registered, setRegistered] = reactExports.useState(false);
  const [fieldErrors, setFieldErrors] = reactExports.useState({});
  const [slideDir, setSlideDir] = reactExports.useState(1);
  const [formData, setFormData] = reactExports.useState(EMPTY_STUDENT);
  const [teacherName, setTeacherName] = reactExports.useState("");
  const [teacherPhone, setTeacherPhone] = reactExports.useState("");
  const [teacherBio, setTeacherBio] = reactExports.useState("");
  const [selectedSubjects, setSelectedSubjects] = reactExports.useState([]);
  const loginAttempted = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!isAuthenticated || isLoading || userRole === null || userRole === UserRole.unregistered)
      return;
    if (!registered) {
      const dest = userRole === UserRole.teacher ? "/teacher" : "/dashboard";
      const timer = setTimeout(() => navigate({ to: dest }), 1200);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, userRole, registered, navigate]);
  reactExports.useEffect(() => {
    if (!registered || flow !== "success" || isLoading) return;
    if (userRole === null || userRole === UserRole.unregistered) return;
    const dest = userRole === UserRole.teacher ? "/teacher" : "/dashboard";
    const timer = setTimeout(() => navigate({ to: dest }), 1800);
    return () => clearTimeout(timer);
  }, [registered, flow, userRole, isLoading, navigate]);
  const isWelcomeBack = isAuthenticated && !isLoading && userRole !== null && userRole !== UserRole.unregistered && !registered;
  const needsRoleSelect = isAuthenticated && !isLoading && userRole === UserRole.unregistered && flow === "none";
  const showLanding = !isAuthenticated && !isLoading;
  const showConnecting = isLoading && !isAuthenticated;
  const showFetchingRole = isAuthenticated && isLoading && !registered;
  reactExports.useEffect(() => {
    if (iiLoginError) {
      const lower = iiLoginError.toLowerCase();
      const isAlreadyAuth = lower.includes("already authenticated") || lower.includes("already logged in") || lower.includes("already connected");
      if (!isAlreadyAuth) {
        setLoginError(iiLoginError);
        setIsConnecting(false);
      }
    }
  }, [iiLoginError]);
  reactExports.useEffect(() => {
    if (isAuthenticated || isLoading) {
      setIsConnecting(false);
    }
  }, [isAuthenticated, isLoading]);
  reactExports.useEffect(() => {
  }, [isInitializing, isConnecting, isLoading]);
  const displayName = isWelcomeBack || flow === "success" ? (studentProfile == null ? void 0 : studentProfile.name) ?? (teacherProfile == null ? void 0 : teacherProfile.name) ?? "" : "";
  const handleLogin = () => {
    console.log(
      "[LoginPage] Connect button clicked, isInitializing:",
      isInitializing
    );
    setLoginError("");
    loginAttempted.current = true;
    setIsConnecting(true);
    login();
    setTimeout(() => setIsConnecting(false), 2e4);
  };
  const handleRoleSelect = (role) => {
    setFormError("");
    setFieldErrors({});
    setFormData(EMPTY_STUDENT);
    setStudentStep(0);
    setFlow(role === "student" ? "register-student" : "register-teacher");
  };
  const handleStudentNext = () => {
    const errs = validateStep(studentStep, formData);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setSlideDir(1);
    setStudentStep((s) => s + 1);
  };
  const handleStudentBack = () => {
    if (studentStep === 0) {
      setFlow("none");
      return;
    }
    setFieldErrors({});
    setSlideDir(-1);
    setStudentStep((s) => s - 1);
  };
  const updateField = (field, value) => {
    setFormData((f) => ({ ...f, [field]: value }));
    setFieldErrors((fe) => ({ ...fe, [field]: "" }));
  };
  const handleStudentSubmit = async () => {
    const errs = validateStep(3, formData);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setIsRegistering(true);
    setFormError("");
    const res = await registerStudent(
      formData.name.trim(),
      formData.className,
      formData.email.trim(),
      formData.rollNumber.trim(),
      formData.board || void 0,
      formData.academicMedium || void 0,
      formData.livingAddress.trim() || void 0,
      formData.schoolName.trim() || void 0,
      formData.schoolAddress.trim() || void 0,
      formData.parent1Name.trim() || void 0,
      formData.parent1Contact.trim() || void 0,
      formData.parent2Name.trim() || void 0,
      formData.parent2Contact.trim() || void 0,
      formData.schoolTiming.trim() || void 0,
      formData.dateOfBirth || void 0,
      formData.gender || void 0,
      formData.bloodGroup || void 0
    );
    setIsRegistering(false);
    if (res.success) {
      setRegistered(true);
      setFlow("success");
    } else setFormError(res.error ?? "Registration failed. Please try again.");
  };
  const validateTeacherForm = () => {
    const errs = {};
    if (!teacherName.trim()) errs.name = "Full name is required";
    if (!teacherPhone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(teacherPhone.trim()))
      errs.phone = "Enter a valid 10-digit number";
    if (selectedSubjects.length === 0)
      errs.subjects = "Select at least one subject";
    return errs;
  };
  const handleTeacherRegister = async (e) => {
    e.preventDefault();
    const errs = validateTeacherForm();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setIsRegistering(true);
    setFormError("");
    const res = await registerTeacher(
      teacherName.trim(),
      selectedSubjects,
      teacherPhone.trim(),
      teacherBio.trim()
    );
    setIsRegistering(false);
    if (res.success) {
      setRegistered(true);
      setFlow("success");
    } else setFormError(res.error ?? "Registration failed. Please try again.");
  };
  const toggleSubject = (sub) => {
    setSelectedSubjects(
      (prev) => prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
    if (fieldErrors.subjects) setFieldErrors((e) => ({ ...e, subjects: "" }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative flex items-center justify-center overflow-hidden py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(135deg, oklch(0.14 0.04 305) 0%, oklch(0.16 0.06 280) 40%, oklch(0.13 0.05 320) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] rounded-full",
          style: {
            background: "radial-gradient(circle, oklch(0.45 0.28 305 / 0.25), transparent 70%)",
            filter: "blur(60px)"
          },
          animate: { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] },
          transition: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute bottom-[-5%] right-[-5%] w-[60vw] h-[60vh] rounded-full",
          style: {
            background: "radial-gradient(circle, oklch(0.55 0.22 280 / 0.2), transparent 70%)",
            filter: "blur(60px)"
          },
          animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] },
          transition: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2
          }
        }
      )
    ] }),
    FLOATING_ELEMENTS.map(({ Icon, delay, x, y, size, color }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: `absolute pointer-events-none ${color}`,
        style: { left: x, top: y },
        animate: {
          y: [0, -20, 0],
          rotate: [0, 6, -6, 0],
          scale: [1, 1.1, 1]
        },
        transition: {
          duration: 4.5 + i * 0.4,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size })
      },
      `float-${x}-${y}`
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40, scale: 0.93 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        className: "relative z-10 w-full max-w-md mx-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl",
              style: {
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 48px rgba(124,58,237,0.3), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 rounded-3xl pointer-events-none",
                    style: {
                      background: "linear-gradient(135deg, rgba(167,139,250,0.1) 0%, transparent 50%, rgba(139,92,246,0.08) 100%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2, duration: 0.5 },
                      className: "flex flex-col items-center mb-6",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: "lg", showTagline: true, variant: "white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                    showConnecting && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "flex flex-col items-center gap-4 py-8",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 32, className: "animate-spin text-purple-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 font-body text-sm", children: isInitializing ? "Checking your session…" : "Opening Internet Identity…" })
                        ]
                      },
                      "connecting"
                    ),
                    showFetchingRole && !showConnecting && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "flex flex-col items-center gap-4 py-10",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: "w-16 h-16 rounded-full border-2 border-purple-500/20",
                                style: { borderTopColor: "oklch(0.72 0.22 305)" },
                                animate: { rotate: 360 },
                                transition: {
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear"
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 22, className: "text-purple-400" }) })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 font-display font-semibold text-sm", children: "Setting up your account…" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 font-body text-xs mt-1", children: "This only takes a moment" })
                          ] })
                        ]
                      },
                      "fetching-role"
                    ),
                    showLanding && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.35 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.button,
                            {
                              type: "button",
                              onClick: handleLogin,
                              whileHover: {
                                scale: 1.02,
                                boxShadow: "0 0 30px rgba(139,92,246,0.6)"
                              },
                              whileTap: { scale: 0.98 },
                              "data-ocid": "btn-login-ii",
                              className: "w-full relative overflow-hidden flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-display font-bold text-base cursor-pointer transition-all duration-200",
                              style: {
                                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #a21caf 100%)",
                                boxShadow: "0 4px 20px rgba(124,58,237,0.5), 0 1px 0 rgba(255,255,255,0.15) inset"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.span,
                                  {
                                    className: "absolute inset-0",
                                    style: {
                                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)"
                                    },
                                    animate: { x: ["-100%", "200%"] },
                                    transition: {
                                      duration: 2.5,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                      repeatDelay: 1.5
                                    }
                                  }
                                ),
                                isConnecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 18, className: "animate-spin" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isInitializing ? "Preparing…" : "Connecting…" })
                                ] }) : isInitializing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    LoaderCircle,
                                    {
                                      size: 18,
                                      className: "animate-spin opacity-70"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connect with Internet Identity" })
                                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 18 }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connect with Internet Identity" })
                                ] })
                              ]
                            }
                          ),
                          loginError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, y: -8 },
                              animate: { opacity: 1, y: 0 },
                              className: "mt-3 flex items-center gap-2 rounded-xl px-4 py-2.5",
                              style: {
                                background: "rgba(239,68,68,0.15)",
                                border: "1px solid rgba(239,68,68,0.3)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  CircleAlert,
                                  {
                                    size: 14,
                                    className: "text-red-400 flex-shrink-0"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-300 text-xs font-body", children: loginError })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
                            {
                              icon: "🎓",
                              label: "For Students",
                              desc: "Classes 1–10, track progress & tasks"
                            },
                            {
                              icon: "👩‍🏫",
                              label: "For Teachers",
                              desc: "Manage homework & timetables"
                            }
                          ].map(({ icon, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              whileHover: { y: -2, scale: 1.02 },
                              className: "rounded-2xl p-3.5 text-center border border-white/10 cursor-default",
                              style: { background: "rgba(255,255,255,0.04)" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1.5", children: icon }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display font-semibold text-white/80", children: label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/45 font-body mt-0.5", children: desc })
                              ]
                            },
                            label
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-white/30 font-body", children: "No passwords needed · Tap the button above to sign in" })
                        ]
                      },
                      "landing"
                    ),
                    needsRoleSelect && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.95 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.95 },
                        transition: { duration: 0.4 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                initial: { scale: 0 },
                                animate: { scale: 1 },
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                  delay: 0.1
                                },
                                className: "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3",
                                style: { background: "rgba(139,92,246,0.2)" },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 26, className: "text-purple-300" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white/90 font-display font-bold text-lg", children: "Welcome! 🎉" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 font-body text-sm mt-1", children: "Connected! Choose your role to complete setup." })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                            {
                              role: "student",
                              icon: "🎓",
                              label: "I'm a Student",
                              desc: "Track attendance, progress & homework",
                              color: "rgba(139,92,246,0.15)",
                              border: "rgba(139,92,246,0.4)"
                            },
                            {
                              role: "teacher",
                              icon: "👩‍🏫",
                              label: "I'm a Teacher",
                              desc: "Manage class, homework & timetable",
                              color: "rgba(99,102,241,0.15)",
                              border: "rgba(99,102,241,0.4)"
                            }
                          ].map(({ role, icon, label, desc, color, border }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.button,
                            {
                              type: "button",
                              onClick: () => handleRoleSelect(role),
                              whileHover: { scale: 1.04, y: -4 },
                              whileTap: { scale: 0.97 },
                              "data-ocid": `btn-role-${role}`,
                              className: "flex flex-col items-center gap-2.5 p-5 rounded-2xl transition-all duration-200 cursor-pointer text-center group",
                              style: {
                                background: color,
                                border: `1.5px solid ${border}`,
                                boxShadow: `0 4px 20px ${color}`
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl group-hover:scale-110 transition-transform duration-200", children: icon }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-white/90", children: label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50 font-body leading-relaxed", children: desc })
                              ]
                            },
                            role
                          )) })
                        ]
                      },
                      "role-select"
                    ),
                    flow === "register-student" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: 40 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: -40 },
                        transition: { duration: 0.35, ease: "easeOut" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: handleStudentBack,
                                className: "text-white/40 hover:text-white/80 transition-colors duration-200 text-sm font-body cursor-pointer",
                                children: "← Back"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white/90 font-display font-bold text-base", children: "Student Registration" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/40 font-body text-xs", children: [
                                "Step ",
                                studentStep + 1,
                                " of 4 — ",
                                STEP_LABELS[studentStep]
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            StepIndicator,
                            {
                              current: studentStep,
                              total: 4,
                              labels: STEP_LABELS
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: slideDir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              custom: slideDir,
                              variants: {
                                enter: (dir) => ({ opacity: 0, x: dir * 40 }),
                                center: { opacity: 1, x: 0 },
                                exit: (dir) => ({ opacity: 0, x: dir * -40 })
                              },
                              initial: "enter",
                              animate: "center",
                              exit: "exit",
                              transition: { duration: 0.28, ease: "easeOut" },
                              className: "mt-4 flex flex-col gap-3.5",
                              children: [
                                studentStep === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Step1Personal,
                                  {
                                    data: formData,
                                    errors: fieldErrors,
                                    update: updateField
                                  }
                                ),
                                studentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Step2Academic,
                                  {
                                    data: formData,
                                    errors: fieldErrors,
                                    update: updateField
                                  }
                                ),
                                studentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Step3Address,
                                  {
                                    data: formData,
                                    errors: fieldErrors,
                                    update: updateField
                                  }
                                ),
                                studentStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Step4Parents,
                                  {
                                    data: formData,
                                    errors: fieldErrors,
                                    update: updateField
                                  }
                                )
                              ]
                            },
                            `student-step-${studentStep}`
                          ) }),
                          formError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormError, { message: formError }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: studentStep < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.button,
                            {
                              type: "button",
                              onClick: handleStudentNext,
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              "data-ocid": "btn-student-next",
                              className: "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-display font-bold text-sm cursor-pointer transition-all duration-200",
                              style: {
                                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #a21caf 100%)",
                                boxShadow: "0 4px 16px rgba(124,58,237,0.4)"
                              },
                              children: [
                                "Next: ",
                                STEP_LABELS[studentStep + 1],
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                              ]
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.button,
                            {
                              type: "button",
                              onClick: handleStudentSubmit,
                              disabled: isRegistering,
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              "data-ocid": "btn-register-student",
                              className: "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-display font-bold text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
                              style: {
                                background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #a21caf 100%)",
                                boxShadow: "0 4px 16px rgba(124,58,237,0.4)"
                              },
                              children: isRegistering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }),
                                " ",
                                "Creating Account…"
                              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
                                " Complete Registration"
                              ] })
                            }
                          ) })
                        ]
                      },
                      "register-student"
                    ),
                    flow === "register-teacher" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: 40 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: -40 },
                        transition: { duration: 0.35, ease: "easeOut" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => setFlow("none"),
                                className: "text-white/40 hover:text-white/80 transition-colors duration-200 text-sm font-body cursor-pointer",
                                children: "← Back"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white/90 font-display font-bold text-base", children: "Teacher Registration" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 font-body text-xs", children: "Enter your details to manage your class" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "form",
                            {
                              onSubmit: handleTeacherRegister,
                              className: "flex flex-col gap-4",
                              noValidate: true,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full Name *", error: fieldErrors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    id: "t-name",
                                    placeholder: "e.g. Sangya Devi",
                                    value: teacherName,
                                    onChange: (e) => {
                                      setTeacherName(e.target.value);
                                      setFieldErrors((fe) => ({ ...fe, name: "" }));
                                    },
                                    "data-ocid": "input-teacher-name",
                                    className: "login-input"
                                  }
                                ) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Phone Number *", error: fieldErrors.phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    id: "t-phone",
                                    type: "tel",
                                    placeholder: "10-digit mobile number",
                                    value: teacherPhone,
                                    onChange: (e) => {
                                      setTeacherPhone(e.target.value);
                                      setFieldErrors((fe) => ({ ...fe, phone: "" }));
                                    },
                                    "data-ocid": "input-teacher-phone",
                                    className: "login-input"
                                  }
                                ) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  FormField,
                                  {
                                    label: "Subjects You Teach *",
                                    error: fieldErrors.subjects,
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: ALL_SUBJECTS.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      motion.button,
                                      {
                                        type: "button",
                                        onClick: () => toggleSubject(sub),
                                        whileTap: { scale: 0.95 },
                                        "data-ocid": `toggle-subject-${sub.toLowerCase().replace(/ /g, "-")}`,
                                        className: `px-3 py-1.5 rounded-full text-xs font-body border transition-all duration-200 cursor-pointer ${selectedSubjects.includes(sub) ? "text-white border-purple-400/60" : "text-white/50 border-white/15 hover:border-white/30 hover:text-white/70"}`,
                                        style: selectedSubjects.includes(sub) ? { background: "rgba(139,92,246,0.35)" } : { background: "rgba(255,255,255,0.04)" },
                                        children: sub
                                      },
                                      sub
                                    )) })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Short Bio (optional)", error: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    id: "t-bio",
                                    placeholder: "Years of experience, specialisation…",
                                    value: teacherBio,
                                    onChange: (e) => setTeacherBio(e.target.value),
                                    "data-ocid": "input-teacher-bio",
                                    className: "login-input"
                                  }
                                ) }),
                                formError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormError, { message: formError }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Button,
                                  {
                                    type: "submit",
                                    disabled: isRegistering,
                                    "data-ocid": "btn-register-teacher",
                                    className: "w-full font-display font-bold py-5 rounded-2xl text-white transition-all duration-200 mt-1",
                                    style: {
                                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
                                      boxShadow: "0 4px 16px rgba(99,102,241,0.4)"
                                    },
                                    children: isRegistering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin mr-2" }),
                                      " ",
                                      "Creating Account…"
                                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "mr-2" }),
                                      " Create Teacher Account"
                                    ] })
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      },
                      "register-teacher"
                    ),
                    flow === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.85 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                        className: "flex flex-col items-center gap-4 py-8 text-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { scale: 0, rotate: -180 },
                              animate: { scale: 1, rotate: 0 },
                              transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 18,
                                delay: 0.15
                              },
                              className: "w-20 h-20 rounded-full flex items-center justify-center",
                              style: {
                                background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(99,102,241,0.3))",
                                boxShadow: "0 0 32px rgba(139,92,246,0.4)"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 40, className: "text-purple-300" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white/90 font-display font-bold text-xl", children: "You're all set! 🎉" }),
                            displayName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-purple-300 font-display font-semibold text-base mt-1", children: [
                              "Welcome, ",
                              displayName,
                              "!"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 font-body text-sm", children: "Your account is ready. Taking you to your dashboard…" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            LoaderCircle,
                            {
                              size: 20,
                              className: "animate-spin text-purple-400 mt-2"
                            }
                          )
                        ]
                      },
                      "success"
                    ),
                    isWelcomeBack && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                        className: "flex flex-col items-center gap-4 py-8 text-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              animate: { scale: [1, 1.12, 1] },
                              transition: { duration: 0.7, ease: "easeInOut" },
                              className: "w-20 h-20 rounded-full flex items-center justify-center",
                              style: {
                                background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(167,139,250,0.2))",
                                boxShadow: "0 0 32px rgba(139,92,246,0.4)"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "👋" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white/90 font-display font-bold text-xl", children: "Welcome back!" }),
                            displayName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-purple-300 font-display font-semibold text-base mt-1", children: [
                              displayName,
                              " ✨"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Badge,
                            {
                              variant: "outline",
                              className: "border-purple-400/40 text-purple-300 font-body",
                              style: { background: "rgba(139,92,246,0.15)" },
                              children: [
                                userRole === UserRole.teacher ? "👩‍🏫 Teacher" : "🎓 Student",
                                " ",
                                "Account"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 font-body text-sm", children: "Redirecting to your dashboard…" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 20, className: "animate-spin text-purple-400" })
                        ]
                      },
                      "welcome-back"
                    )
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "flex items-center justify-center gap-2 mt-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 12, className: "text-white/25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-white/30 font-body", children: "Secured by Internet Identity · No passwords needed · Privacy first" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function StepIndicator({
  current,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-1", children: [0, 1, 2, 3].slice(0, total).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex-1 h-1 rounded-full transition-all duration-500",
      style: {
        background: i <= current ? "linear-gradient(90deg, #7c3aed, #a855f7)" : "rgba(255,255,255,0.1)",
        opacity: i === current ? 1 : i < current ? 0.8 : 0.3
      }
    }
  ) }, `seg-${i}`)) });
}
function FormField({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-white/60 font-body text-xs font-medium", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        className: "text-red-400 text-xs font-body",
        children: error
      }
    )
  ] });
}
function FormError({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      className: "flex items-center gap-2 rounded-xl px-4 py-2.5 mt-2",
      style: {
        background: "rgba(239,68,68,0.15)",
        border: "1px solid rgba(239,68,68,0.3)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 14, className: "text-red-400 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-300 text-xs font-body", children: message })
      ]
    }
  );
}
function GlassSelect({
  value,
  onChange,
  options,
  rawOptions,
  placeholder,
  error,
  dataOcid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "select",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      "data-ocid": dataOcid,
      className: "w-full rounded-xl px-3 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200",
      style: {
        background: "rgba(255,255,255,0.06)",
        border: error ? "1.5px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
        color: value ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
        colorScheme: "dark"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, style: { background: "#1e1b4b" }, children: placeholder }),
        options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "option",
          {
            value: rawOptions ? rawOptions[i] : opt,
            style: { background: "#1e1b4b" },
            children: opt
          },
          opt
        ))
      ]
    }
  );
}
function GlassTextarea({
  value,
  onChange,
  placeholder,
  rows,
  dataOcid,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      rows,
      "data-ocid": dataOcid,
      className: "w-full rounded-xl px-3 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 resize-none",
      style: {
        background: "rgba(255,255,255,0.06)",
        border: error ? "1.5px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.85)",
        colorScheme: "dark"
      }
    }
  );
}
function Step1Personal({
  data,
  errors,
  update
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full Name *", error: errors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "s-name",
        placeholder: "e.g. Your full name",
        value: data.name,
        onChange: (e) => update("name", e.target.value),
        "data-ocid": "input-student-name",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Date of Birth", error: errors.dateOfBirth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "date",
        value: data.dateOfBirth,
        onChange: (e) => update("dateOfBirth", e.target.value),
        "data-ocid": "input-student-dob",
        max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        className: "w-full rounded-xl px-3 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200",
        style: {
          background: "rgba(255,255,255,0.06)",
          border: errors.dateOfBirth ? "1.5px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
          color: data.dateOfBirth ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
          colorScheme: "dark"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Gender *", error: errors.gender, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlassSelect,
        {
          value: data.gender,
          onChange: (v) => update("gender", v),
          options: GENDERS,
          placeholder: "Select gender",
          error: !!errors.gender,
          dataOcid: "select-student-gender"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Blood Group", error: errors.bloodGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlassSelect,
        {
          value: data.bloodGroup,
          onChange: (v) => update("bloodGroup", v),
          options: BLOOD_GROUPS,
          placeholder: "Select",
          error: !!errors.bloodGroup,
          dataOcid: "select-student-blood"
        }
      ) })
    ] })
  ] });
}
function Step2Academic({
  data,
  errors,
  update
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Class *", error: errors.className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlassSelect,
        {
          value: data.className,
          onChange: (v) => update("className", v),
          options: CLASSES.map((c) => `${c} Grade`),
          rawOptions: CLASSES,
          placeholder: "Select class",
          error: !!errors.className,
          dataOcid: "select-student-class"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Board *", error: errors.board, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlassSelect,
        {
          value: data.board,
          onChange: (v) => update("board", v),
          options: BOARDS,
          placeholder: "Select board",
          error: !!errors.board,
          dataOcid: "select-student-board"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Academic Medium *", error: errors.academicMedium, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassSelect,
      {
        value: data.academicMedium,
        onChange: (v) => update("academicMedium", v),
        options: MEDIUMS,
        placeholder: "Select medium",
        error: !!errors.academicMedium,
        dataOcid: "select-student-medium"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Roll Number *", error: errors.rollNumber, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "s-roll",
        placeholder: "e.g. STU-2024-042",
        value: data.rollNumber,
        onChange: (e) => update("rollNumber", e.target.value),
        "data-ocid": "input-student-roll",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email Address *", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "s-email",
        type: "email",
        placeholder: "student@email.com",
        value: data.email,
        onChange: (e) => update("email", e.target.value),
        "data-ocid": "input-student-email",
        className: "login-input"
      }
    ) })
  ] });
}
function Step3Address({
  data,
  errors,
  update
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Living Address *", error: errors.livingAddress, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassTextarea,
      {
        value: data.livingAddress,
        onChange: (v) => update("livingAddress", v),
        placeholder: "House no., Street, City, State, PIN",
        rows: 3,
        dataOcid: "input-student-living-addr",
        error: !!errors.livingAddress
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "School Name *", error: errors.schoolName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "s-school-name",
        placeholder: "e.g. Delhi Public School",
        value: data.schoolName,
        onChange: (e) => update("schoolName", e.target.value),
        "data-ocid": "input-student-school-name",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "School Address", error: errors.schoolAddress, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassTextarea,
      {
        value: data.schoolAddress,
        onChange: (v) => update("schoolAddress", v),
        placeholder: "School full address",
        rows: 2,
        dataOcid: "input-student-school-addr",
        error: !!errors.schoolAddress
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "School Timing", error: errors.schoolTiming, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "s-timing",
        placeholder: "e.g. 8:00 AM – 2:00 PM",
        value: data.schoolTiming,
        onChange: (e) => update("schoolTiming", e.target.value),
        "data-ocid": "input-student-timing",
        className: "login-input"
      }
    ) })
  ] });
}
function Step4Parents({
  data,
  errors,
  update
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl p-3 border border-purple-500/20 mb-1",
        style: { background: "rgba(139,92,246,0.07)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 font-body text-xs", children: "Parent 1 is required. Parent 2 is optional." })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Parent 1 Name *", error: errors.parent1Name, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "p1-name",
        placeholder: "e.g. Parent/Guardian name",
        value: data.parent1Name,
        onChange: (e) => update("parent1Name", e.target.value),
        "data-ocid": "input-parent1-name",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Parent 1 Contact *", error: errors.parent1Contact, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "p1-phone",
        type: "tel",
        placeholder: "10-digit mobile number",
        value: data.parent1Contact,
        onChange: (e) => update("parent1Contact", e.target.value),
        "data-ocid": "input-parent1-contact",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Parent 2 Name", error: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "p2-name",
        placeholder: "Optional",
        value: data.parent2Name,
        onChange: (e) => update("parent2Name", e.target.value),
        "data-ocid": "input-parent2-name",
        className: "login-input"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Parent 2 Contact", error: errors.parent2Contact, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "p2-phone",
        type: "tel",
        placeholder: "Optional — 10-digit number",
        value: data.parent2Contact,
        onChange: (e) => update("parent2Contact", e.target.value),
        "data-ocid": "input-parent2-contact",
        className: "login-input"
      }
    ) })
  ] });
}
export {
  LoginPage as default
};
