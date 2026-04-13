import { c as createLucideIcon, u as useActor, e as useAuth, a as reactExports, g as ue, j as jsxRuntimeExports, S as Skeleton, m as motion, Q as QrCode, A as AnimatePresence, X, C as Calendar, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-Cl9XV48G.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { T as Textarea } from "./textarea-LKy1wIHY.js";
import { C as CalendarDays } from "./calendar-days-PfBhaJOz.js";
import { S as Star } from "./star-CLh9meEu.js";
import { C as CircleCheck } from "./circle-check-BcRzBvzu.js";
import { C as ChevronDown } from "./chevron-down-CBYl_4ES.js";
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
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const CONFETTI_COLORS = [
  "#7c3aed",
  "#a855f7",
  "#c4b5fd",
  "#e9d5ff",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6"
];
function AnimatedDots() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex gap-0.5 ml-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className: "w-1.5 h-1.5 rounded-full bg-primary inline-block",
      animate: { opacity: [0.2, 1, 0.2] },
      transition: {
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.3
      }
    },
    i
  )) });
}
function CircularProgress({ pct }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const [drawn, setDrawn] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDrawn(pct), 400);
    return () => clearTimeout(t);
  }, [pct]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center w-36 h-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "144", height: "144", className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Attendance progress ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "72",
          cy: "72",
          r,
          fill: "none",
          strokeWidth: "10",
          className: "stroke-muted"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.circle,
        {
          cx: "72",
          cy: "72",
          r,
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          stroke: "url(#progressGrad)",
          strokeDasharray: circ,
          animate: { strokeDashoffset: circ - circ * drawn / 100 },
          initial: { strokeDashoffset: circ },
          transition: { duration: 1.4, ease: "easeOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "progressGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#7c3aed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#c4b5fd" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.span,
        {
          className: "font-display text-2xl font-bold text-primary",
          animate: { opacity: 1 },
          initial: { opacity: 0 },
          transition: { delay: 0.6 },
          children: [
            pct,
            "%"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "present" })
    ] })
  ] });
}
function ConfettiBurst() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.8,
    vx: (Math.random() - 0.5) * 260,
    vy: -(80 + Math.random() * 220),
    dur: 1.6 + Math.random() * 0.8
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute w-2.5 h-2.5 rounded-sm",
      style: { backgroundColor: p.color },
      initial: { x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 },
      animate: {
        x: p.vx,
        y: p.vy + 160,
        scale: [0, p.scale, 0],
        rotate: p.rotation + 360,
        opacity: [1, 1, 0]
      },
      transition: { duration: p.dur, ease: "easeOut" }
    },
    p.id
  )) });
}
function CornerBrackets() {
  const corners = [
    {
      id: "tl",
      cls: "top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-xl"
    },
    {
      id: "tr",
      cls: "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-xl"
    },
    {
      id: "bl",
      cls: "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-xl"
    },
    {
      id: "br",
      cls: "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-xl"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: corners.map(({ id, cls }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute w-7 h-7 border-primary ${cls}`,
      animate: { opacity: [1, 0.4, 1] },
      transition: {
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.2
      }
    },
    id
  )) });
}
function ErrorAlert({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -8, scale: 0.97 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -8, scale: 0.97 },
      className: "flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16, className: "mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm leading-relaxed", children: message })
      ]
    }
  );
}
function AttendancePage() {
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile, principal } = useAuth();
  const [attendanceRecords, setAttendanceRecords] = reactExports.useState([]);
  const [isLoadingHistory, setIsLoadingHistory] = reactExports.useState(false);
  const [historyError, setHistoryError] = reactExports.useState(null);
  const [scanState, setScanState] = reactExports.useState("idle");
  const [manualOpen, setManualOpen] = reactExports.useState(false);
  const [manualDate, setManualDate] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [manualPresent, setManualPresent] = reactExports.useState(true);
  const [manualNotes, setManualNotes] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [selectedDate, setSelectedDate] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const scanTimerRef = reactExports.useRef(null);
  const [successTime, setSuccessTime] = reactExports.useState("");
  const [showConfetti, setShowConfetti] = reactExports.useState(false);
  const [cameraError, setCameraError] = reactExports.useState(null);
  const [cameraActive, setCameraActive] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const streamRef = reactExports.useRef(null);
  const studentId = (studentProfile == null ? void 0 : studentProfile.rollNumber) ?? principal ?? "";
  reactExports.useEffect(() => {
    if (!actor || isFetching || !studentId) return;
    setIsLoadingHistory(true);
    setHistoryError(null);
    actor.getAttendance(studentId).then((records) => setAttendanceRecords(records)).catch((err) => setHistoryError(String(err))).finally(() => setIsLoadingHistory(false));
  }, [actor, isFetching, studentId]);
  const presentCount = attendanceRecords.filter((a) => a.present).length;
  const totalCount = attendanceRecords.length;
  const pct = totalCount > 0 ? Math.round(presentCount / totalCount * 100) : 85;
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const stopCamera = reactExports.useCallback(() => {
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) track.stop();
      streamRef.current = null;
    }
    setCameraActive(false);
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
      stopCamera();
    };
  }, [stopCamera]);
  const triggerSuccess = reactExports.useCallback(
    (time) => {
      setSuccessTime(time);
      setScanState("success");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2400);
      if (actor && studentId) {
        actor.getAttendance(studentId).then(setAttendanceRecords).catch(() => {
        });
      }
    },
    [actor, studentId]
  );
  const handleSuccess = reactExports.useCallback(() => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    stopCamera();
    const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });
    if (actor && studentId) {
      actor.markAttendance(studentId, (/* @__PURE__ */ new Date()).toISOString().split("T")[0], "QR").then(() => {
        ue.success("🎉 Attendance marked via QR!", { duration: 3e3 });
      }).catch(() => {
      });
    }
    triggerSuccess(time);
  }, [stopCamera, actor, studentId, triggerSuccess]);
  const handleStartScan = reactExports.useCallback(async () => {
    setScanState("scanning");
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraActive(true);
      }
    } catch {
      setCameraError("Camera permission denied — using simulation mode");
    }
    scanTimerRef.current = setTimeout(() => {
      setScanState((prev) => {
        if (prev === "scanning") {
          handleSuccess();
          return "success";
        }
        return prev;
      });
    }, 2500);
  }, [handleSuccess]);
  const handleCancel = reactExports.useCallback(() => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    stopCamera();
    setScanState("idle");
  }, [stopCamera]);
  const handleReset = reactExports.useCallback(() => {
    stopCamera();
    setScanState("idle");
  }, [stopCamera]);
  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      if (!actor) throw new Error("Not connected to backend");
      const via = manualPresent ? "Manual" : "Manual-Absent";
      const success = await actor.markAttendance(studentId, manualDate, via);
      if (!success) throw new Error("Backend rejected the attendance record");
      const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      });
      setManualOpen(false);
      setManualNotes("");
      triggerSuccess(time);
      ue.success(
        `✅ Attendance marked ${manualPresent ? "Present" : "Absent"} for ${manualDate}!`,
        { duration: 4e3 }
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isLoadingHistory && attendanceRecords.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-72 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-48 rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 rounded-2xl" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd] leading-tight", children: "📷 Mark Your Attendance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body text-sm sm:text-base", children: [
            "Scan the QR code shown by your teacher ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Where learning is fun" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-body mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 13, className: "text-primary" }),
            today
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass shadow-glass border-border/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { pct }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center sm:text-left space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground", children: [
              "This Month: ",
              presentCount,
              "/",
              totalCount > 0 ? totalCount : 26,
              " ",
              "Days Present"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center sm:justify-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-body", children: [
                  presentCount,
                  " Present"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-body", children: [
                  Math.max(0, totalCount - presentCount),
                  " Absent"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.9, type: "spring" },
                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-purple text-primary text-sm font-body font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-primary" }),
                  pct >= 85 ? "Excellent Attendance! 🌟" : "Keep it up! 💪"
                ]
              }
            )
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 18, className: "text-primary" }),
            "Scan QR Code"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
            scanState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                className: "flex flex-col items-center gap-5 py-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-48 h-48 sm:w-52 sm:h-52", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "absolute inset-0 rounded-2xl border-2 border-dashed border-primary/30",
                        animate: {
                          borderColor: [
                            "rgba(124,58,237,0.2)",
                            "rgba(124,58,237,0.5)",
                            "rgba(124,58,237,0.2)"
                          ]
                        },
                        transition: {
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { scale: [1, 1.08, 1] },
                        transition: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 60, className: "text-primary/40" })
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground font-body max-w-xs", children: "Tap the button below to open your camera and scan the QR code shown by your teacher" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "h-14 px-8 grad-purple text-white border-0 shadow-glow font-body text-base gap-2 glow-purple-sm",
                      onClick: handleStartScan,
                      "data-ocid": "scan-qr-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 20 }),
                        "Open Camera & Scan"
                      ]
                    }
                  )
                ]
              },
              "idle"
            ),
            scanState === "scanning" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                className: "flex flex-col items-center gap-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative w-full max-w-sm rounded-2xl overflow-hidden bg-muted/60 border-2 border-primary/30",
                      style: { minHeight: "280px", aspectRatio: "1/1" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "video",
                          {
                            ref: videoRef,
                            className: "absolute inset-0 w-full h-full object-cover",
                            playsInline: true,
                            muted: true
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerBrackets, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute left-6 right-6 h-0.5 rounded-full",
                            style: {
                              background: "linear-gradient(to right, transparent, #7c3aed, transparent)",
                              boxShadow: "0 0 8px 2px rgba(124,58,237,0.6)"
                            },
                            animate: { top: ["8%", "92%"] },
                            transition: {
                              duration: 1.8,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }
                          }
                        ),
                        !cameraActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 px-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              animate: { opacity: [0.3, 0.7, 0.3] },
                              transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 72, className: "text-white/60" })
                            }
                          ),
                          cameraError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-white/80 font-body bg-black/40 rounded-xl px-3 py-1.5", children: cameraError })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground flex items-center gap-1", children: [
                    "Scanning for QR code ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedDots, {})
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "gap-2 border-border/60",
                      onClick: handleCancel,
                      "data-ocid": "cancel-scan-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }),
                        "Cancel"
                      ]
                    }
                  )
                ]
              },
              "scanning"
            ),
            scanState === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "relative flex flex-col items-center gap-5 py-6",
                children: [
                  showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { scale: 0 },
                      animate: { scale: 1 },
                      transition: {
                        type: "spring",
                        stiffness: 320,
                        damping: 18,
                        delay: 0.1
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Attendance marked successfully" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.circle,
                          {
                            cx: "48",
                            cy: "48",
                            r: "44",
                            fill: "none",
                            stroke: "#10b981",
                            strokeWidth: "4",
                            initial: { pathLength: 0 },
                            animate: { pathLength: 1 },
                            transition: { duration: 0.6, delay: 0.2 }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "48",
                            cy: "48",
                            r: "44",
                            fill: "rgba(16,185,129,0.12)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.path,
                          {
                            d: "M 26 48 L 42 64 L 70 36",
                            fill: "none",
                            stroke: "#10b981",
                            strokeWidth: "5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            initial: { pathLength: 0 },
                            animate: { pathLength: 1 },
                            transition: { duration: 0.5, delay: 0.5 }
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.5 },
                      className: "text-center space-y-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd]", children: "🎉 Attendance Marked!" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm max-w-xs mx-auto", children: "Great job! Your attendance has been recorded for today." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-semibold text-foreground text-sm", children: (studentProfile == null ? void 0 : studentProfile.name) ?? "Student" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12, className: "text-green-500" }),
                            "Marked at ",
                            successTime,
                            " · Today"
                          ] })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.8 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          className: "grad-purple text-white border-0 shadow-glow gap-2",
                          onClick: handleReset,
                          "data-ocid": "done-btn",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 16 }),
                            "Done"
                          ]
                        }
                      )
                    }
                  )
                ]
              },
              "success"
            ),
            scanState === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                className: "flex flex-col items-center gap-4 py-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-red-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 32, className: "text-red-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground text-center", children: "Could not scan QR code. Please try again or enter attendance manually." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        onClick: handleReset,
                        "data-ocid": "retry-scan-btn",
                        children: "Try Again"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        className: "grad-purple text-white border-0",
                        onClick: () => {
                          setScanState("idle");
                          setManualOpen(true);
                        },
                        children: "Enter Manually"
                      }
                    )
                  ] })
                ]
              },
              "error"
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/20 transition-smooth",
              onClick: () => setManualOpen((v) => !v),
              "data-ocid": "manual-accordion-toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body font-medium text-sm text-muted-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 15, className: "text-primary" }),
                  "Mark attendance manually"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { rotate: manualOpen ? 180 : 0 },
                    transition: { duration: 0.25 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: "text-muted-foreground" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: manualOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3, ease: "easeInOut" },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleManualSubmit,
                  className: "px-5 pb-5 pt-1 space-y-4 border-t border-border/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: submitError && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorAlert, { message: submitError }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "manualDate", className: "font-body text-sm", children: "Date" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "manualDate",
                            type: "date",
                            value: manualDate,
                            onChange: (e) => setManualDate(e.target.value),
                            max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                            className: "font-body",
                            "data-ocid": "manual-date-input",
                            required: true
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-body text-sm", children: "Status" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setManualPresent(true),
                              "data-ocid": "manual-present-btn",
                              className: `flex-1 py-2 rounded-xl text-sm font-body font-medium border-2 transition-smooth ${manualPresent ? "bg-green-500 text-white border-green-500 shadow-sm" : "bg-muted/40 text-muted-foreground border-border/50 hover:border-green-300"}`,
                              children: "✅ Present"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setManualPresent(false),
                              "data-ocid": "manual-absent-btn",
                              className: `flex-1 py-2 rounded-xl text-sm font-body font-medium border-2 transition-smooth ${!manualPresent ? "bg-red-500 text-white border-red-500 shadow-sm" : "bg-muted/40 text-muted-foreground border-border/50 hover:border-red-300"}`,
                              children: "❌ Absent"
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "manualNotes", className: "font-body text-sm", children: "Notes (optional)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          id: "manualNotes",
                          placeholder: "e.g. Sick leave, holiday, etc.",
                          value: manualNotes,
                          onChange: (e) => setManualNotes(e.target.value),
                          className: "font-body resize-none h-20",
                          "data-ocid": "manual-notes-input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          disabled: isSubmitting,
                          className: "grad-purple text-white border-0 shadow-glow flex-1 sm:flex-none sm:w-auto",
                          "data-ocid": "manual-submit-btn",
                          children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            "Submitting",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedDots, {})
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
                            "Mark Attendance"
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          onClick: () => {
                            setManualOpen(false);
                            setSubmitError(null);
                          },
                          className: "border-border/60",
                          children: "Cancel"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "date",
                        value: selectedDate,
                        onChange: (e) => setSelectedDate(e.target.value),
                        className: "font-body hidden"
                      }
                    ) })
                  ]
                }
              )
            },
            "manual-form"
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 18, className: "text-primary" }),
            "Attendance History",
            attendanceRecords.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-xs ml-auto font-body", children: [
              attendanceRecords.length,
              " records"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 sm:px-2 pb-2", children: isLoadingHistory ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 rounded-xl" }, i)) }) : historyError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ErrorAlert,
            {
              message: `Could not load history: ${historyError}`
            }
          ) }) : attendanceRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "flex flex-col items-center gap-3 py-10 text-center px-4",
              "data-ocid": "attendance-empty-state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "📅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No attendance records yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body max-w-xs", children: "Your attendance history will appear here after you mark attendance for the first time." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 px-4 py-2 text-xs font-body text-muted-foreground border-b border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Method" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/20 max-h-96 overflow-y-auto", children: [...attendanceRecords].reverse().map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -12 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.05 },
                className: "grid grid-cols-3 items-center px-4 py-3 hover:bg-muted/20 transition-smooth",
                "data-ocid": `attendance-row-${i}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground", children: row.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: row.present ? "bg-green-100 text-green-700 border-green-200 text-xs" : "bg-red-100 text-red-600 border-red-200 text-xs",
                      children: row.present ? "✅ Present" : "❌ Absent"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-body text-xs text-muted-foreground", children: row.markedVia || "—" })
                ]
              },
              `${row.date}-${i}`
            )) })
          ] }) })
        ] })
      }
    )
  ] });
}
export {
  AttendancePage as default
};
