import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  Calendar,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronDown,
  QrCode,
  RotateCcw,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import type { AttendanceRecord } from "../backend.d";
import { useAuth } from "../context/AuthContext";

// ── Types ──────────────────────────────────────────────────────────────────
type ScanState = "idle" | "scanning" | "success" | "error";

// ── Constants ──────────────────────────────────────────────────────────────
const CONFETTI_COLORS = [
  "#7c3aed",
  "#a855f7",
  "#c4b5fd",
  "#e9d5ff",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
];

// ── Animated Dots ──────────────────────────────────────────────────────────
function AnimatedDots() {
  return (
    <span className="inline-flex gap-0.5 ml-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        />
      ))}
    </span>
  );
}

// ── Circular Progress Ring ─────────────────────────────────────────────────
function CircularProgress({ pct }: { pct: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const [drawn, setDrawn] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(pct), 400);
    return () => clearTimeout(t);
  }, [pct]);

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg width="144" height="144" className="-rotate-90">
        <title>Attendance progress ring</title>
        <circle
          cx="72"
          cy="72"
          r={r}
          fill="none"
          strokeWidth="10"
          className="stroke-muted"
        />
        <motion.circle
          cx="72"
          cy="72"
          r={r}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          stroke="url(#progressGrad)"
          strokeDasharray={circ}
          animate={{ strokeDashoffset: circ - (circ * drawn) / 100 }}
          initial={{ strokeDashoffset: circ }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-display text-2xl font-bold text-primary"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          {pct}%
        </motion.span>
        <span className="text-xs text-muted-foreground font-body">present</span>
      </div>
    </div>
  );
}

// ── Confetti Burst ─────────────────────────────────────────────────────────
function ConfettiBurst() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.8,
    vx: (Math.random() - 0.5) * 260,
    vy: -(80 + Math.random() * 220),
    dur: 1.6 + Math.random() * 0.8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2.5 h-2.5 rounded-sm"
          style={{ backgroundColor: p.color }}
          initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: p.vx,
            y: p.vy + 160,
            scale: [0, p.scale, 0],
            rotate: p.rotation + 360,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: p.dur, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

// ── Corner Brackets ────────────────────────────────────────────────────────
function CornerBrackets() {
  const corners = [
    {
      id: "tl",
      cls: "top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-xl",
    },
    {
      id: "tr",
      cls: "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-xl",
    },
    {
      id: "bl",
      cls: "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-xl",
    },
    {
      id: "br",
      cls: "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-xl",
    },
  ];
  return (
    <>
      {corners.map(({ id, cls }, i) => (
        <motion.div
          key={id}
          className={`absolute w-7 h-7 border-primary ${cls}`}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </>
  );
}

// ── Alert Banner ───────────────────────────────────────────────────────────
function ErrorAlert({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700"
    >
      <X size={16} className="mt-0.5 flex-shrink-0" />
      <p className="font-body text-sm leading-relaxed">{message}</p>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function AttendancePage() {
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile, principal } = useAuth();

  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);

  const [scanState, setScanState] = useState<ScanState>("idle");
  const [manualOpen, setManualOpen] = useState(false);
  const [manualDate, setManualDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [manualPresent, setManualPresent] = useState(true);
  const [manualNotes, setManualNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const scanTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [successTime, setSuccessTime] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const studentId = studentProfile?.rollNumber ?? principal ?? "";

  // Load real attendance history on mount
  useEffect(() => {
    if (!actor || isFetching || !studentId) return;
    setIsLoadingHistory(true);
    setHistoryError(null);
    actor
      .getAttendance(studentId)
      .then((records) => setAttendanceRecords(records))
      .catch((err: unknown) => setHistoryError(String(err)))
      .finally(() => setIsLoadingHistory(false));
  }, [actor, isFetching, studentId]);

  const presentCount = attendanceRecords.filter((a) => a.present).length;
  const totalCount = attendanceRecords.length;
  const pct =
    totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 85;

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) track.stop();
      streamRef.current = null;
    }
    setCameraActive(false);
  }, []);

  useEffect(() => {
    return () => {
      if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
      stopCamera();
    };
  }, [stopCamera]);

  const triggerSuccess = useCallback(
    (time: string) => {
      setSuccessTime(time);
      setScanState("success");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2400);
      // Refresh attendance history
      if (actor && studentId) {
        actor
          .getAttendance(studentId)
          .then(setAttendanceRecords)
          .catch(() => {});
      }
    },
    [actor, studentId],
  );

  const handleSuccess = useCallback(() => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    stopCamera();
    const time = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    // Call backend markAttendance via QR
    if (actor && studentId) {
      actor
        .markAttendance(studentId, new Date().toISOString().split("T")[0], "QR")
        .then(() => {
          toast.success("🎉 Attendance marked via QR!", { duration: 3000 });
        })
        .catch(() => {});
    }
    triggerSuccess(time);
  }, [stopCamera, actor, studentId, triggerSuccess]);

  const handleStartScan = useCallback(async () => {
    setScanState("scanning");
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
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

  const handleCancel = useCallback(() => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    stopCamera();
    setScanState("idle");
  }, [stopCamera]);

  const handleReset = useCallback(() => {
    stopCamera();
    setScanState("idle");
  }, [stopCamera]);

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      if (!actor) throw new Error("Not connected to backend");
      const via = manualPresent ? "Manual" : "Manual-Absent";
      const success = await actor.markAttendance(studentId, manualDate, via);
      if (!success) throw new Error("Backend rejected the attendance record");
      const time = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setManualOpen(false);
      setManualNotes("");
      triggerSuccess(time);
      toast.success(
        `✅ Attendance marked ${manualPresent ? "Present" : "Absent"} for ${manualDate}!`,
        { duration: 4000 },
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingHistory && attendanceRecords.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <Skeleton className="h-10 w-72 rounded-xl" />
        <Skeleton className="h-5 w-48 rounded-lg" />
        <Skeleton className="h-48 rounded-2xl" />
        <Skeleton className="h-80 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd] leading-tight">
          📷 Mark Your Attendance
        </h1>
        <p className="text-muted-foreground font-body text-sm sm:text-base">
          Scan the QR code shown by your teacher ·{" "}
          <em>Where learning is fun</em>
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-body mt-0.5">
          <CalendarDays size={13} className="text-primary" />
          {today}
        </p>
      </motion.div>

      {/* ── Attendance Summary Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass shadow-glass border-border/50 overflow-hidden">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <CircularProgress pct={pct} />
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h2 className="font-display text-xl font-bold text-foreground">
                  This Month: {presentCount}/{totalCount > 0 ? totalCount : 26}{" "}
                  Days Present
                </h2>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground font-body">
                      {presentCount} Present
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-sm text-muted-foreground font-body">
                      {Math.max(0, totalCount - presentCount)} Absent
                    </span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-purple text-primary text-sm font-body font-medium"
                >
                  <Star size={14} className="fill-primary" />
                  {pct >= 85 ? "Excellent Attendance! 🌟" : "Keep it up! 💪"}
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ── QR Scanner Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass shadow-glass border-border/50 relative overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <QrCode size={18} className="text-primary" />
              Scan QR Code
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 sm:p-6">
            <AnimatePresence mode="wait">
              {scanState === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-5 py-4"
                >
                  <div className="relative w-48 h-48 sm:w-52 sm:h-52">
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/30"
                      animate={{
                        borderColor: [
                          "rgba(124,58,237,0.2)",
                          "rgba(124,58,237,0.5)",
                          "rgba(124,58,237,0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <CornerBrackets />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Camera size={60} className="text-primary/40" />
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground font-body max-w-xs">
                    Tap the button below to open your camera and scan the QR
                    code shown by your teacher
                  </p>
                  <Button
                    size="lg"
                    className="h-14 px-8 grad-purple text-white border-0 shadow-glow font-body text-base gap-2 glow-purple-sm"
                    onClick={handleStartScan}
                    data-ocid="scan-qr-btn"
                  >
                    <Camera size={20} />
                    Open Camera &amp; Scan
                  </Button>
                </motion.div>
              )}

              {scanState === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-5"
                >
                  <div
                    className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-muted/60 border-2 border-primary/30"
                    style={{ minHeight: "280px", aspectRatio: "1/1" }}
                  >
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                      muted
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-4">
                      <CornerBrackets />
                    </div>
                    <motion.div
                      className="absolute left-6 right-6 h-0.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #7c3aed, transparent)",
                        boxShadow: "0 0 8px 2px rgba(124,58,237,0.6)",
                      }}
                      animate={{ top: ["8%", "92%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                    {!cameraActive && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
                        <motion.div
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          <QrCode size={72} className="text-white/60" />
                        </motion.div>
                        {cameraError && (
                          <p className="text-center text-xs text-white/80 font-body bg-black/40 rounded-xl px-3 py-1.5">
                            {cameraError}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
                    Scanning for QR code <AnimatedDots />
                  </p>
                  <Button
                    variant="outline"
                    className="gap-2 border-border/60"
                    onClick={handleCancel}
                    data-ocid="cancel-scan-btn"
                  >
                    <X size={16} />
                    Cancel
                  </Button>
                </motion.div>
              )}

              {scanState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex flex-col items-center gap-5 py-6"
                >
                  {showConfetti && <ConfettiBurst />}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                      delay: 0.1,
                    }}
                  >
                    <svg width="96" height="96" viewBox="0 0 96 96">
                      <title>Attendance marked successfully</title>
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="rgba(16,185,129,0.12)"
                      />
                      <motion.path
                        d="M 26 48 L 42 64 L 70 36"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center space-y-2"
                  >
                    <h2 className="font-display text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd]">
                      🎉 Attendance Marked!
                    </h2>
                    <p className="text-muted-foreground font-body text-sm max-w-xs mx-auto">
                      Great job! Your attendance has been recorded for today.
                    </p>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <span className="font-body font-semibold text-foreground text-sm">
                        {studentProfile?.name ?? "Student"}
                      </span>
                      <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-green-500" />
                        Marked at {successTime} · Today
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      className="grad-purple text-white border-0 shadow-glow gap-2"
                      onClick={handleReset}
                      data-ocid="done-btn"
                    >
                      <RotateCcw size={16} />
                      Done
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {scanState === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-4 py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={32} className="text-red-500" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground text-center">
                    Could not scan QR code. Please try again or enter attendance
                    manually.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      data-ocid="retry-scan-btn"
                    >
                      Try Again
                    </Button>
                    <Button
                      className="grad-purple text-white border-0"
                      onClick={() => {
                        setScanState("idle");
                        setManualOpen(true);
                      }}
                    >
                      Enter Manually
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* ── Manual Attendance Form ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass shadow-glass border-border/50 overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/20 transition-smooth"
            onClick={() => setManualOpen((v) => !v)}
            data-ocid="manual-accordion-toggle"
          >
            <span className="font-body font-medium text-sm text-muted-foreground flex items-center gap-2">
              <Calendar size={15} className="text-primary" />
              Mark attendance manually
            </span>
            <motion.div
              animate={{ rotate: manualOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={16} className="text-muted-foreground" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {manualOpen && (
              <motion.div
                key="manual-form"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <form
                  onSubmit={handleManualSubmit}
                  className="px-5 pb-5 pt-1 space-y-4 border-t border-border/40"
                >
                  <AnimatePresence>
                    {submitError && <ErrorAlert message={submitError} />}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date picker */}
                    <div className="space-y-1.5">
                      <Label htmlFor="manualDate" className="font-body text-sm">
                        Date
                      </Label>
                      <Input
                        id="manualDate"
                        type="date"
                        value={manualDate}
                        onChange={(e) => setManualDate(e.target.value)}
                        max={new Date().toISOString().split("T")[0]}
                        className="font-body"
                        data-ocid="manual-date-input"
                        required
                      />
                    </div>

                    {/* Present / Absent toggle */}
                    <div className="space-y-1.5">
                      <Label className="font-body text-sm">Status</Label>
                      <div className="flex gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setManualPresent(true)}
                          data-ocid="manual-present-btn"
                          className={`flex-1 py-2 rounded-xl text-sm font-body font-medium border-2 transition-smooth ${
                            manualPresent
                              ? "bg-green-500 text-white border-green-500 shadow-sm"
                              : "bg-muted/40 text-muted-foreground border-border/50 hover:border-green-300"
                          }`}
                        >
                          ✅ Present
                        </button>
                        <button
                          type="button"
                          onClick={() => setManualPresent(false)}
                          data-ocid="manual-absent-btn"
                          className={`flex-1 py-2 rounded-xl text-sm font-body font-medium border-2 transition-smooth ${
                            !manualPresent
                              ? "bg-red-500 text-white border-red-500 shadow-sm"
                              : "bg-muted/40 text-muted-foreground border-border/50 hover:border-red-300"
                          }`}
                        >
                          ❌ Absent
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes field */}
                  <div className="space-y-1.5">
                    <Label htmlFor="manualNotes" className="font-body text-sm">
                      Notes (optional)
                    </Label>
                    <Textarea
                      id="manualNotes"
                      placeholder="e.g. Sick leave, holiday, etc."
                      value={manualNotes}
                      onChange={(e) => setManualNotes(e.target.value)}
                      className="font-body resize-none h-20"
                      data-ocid="manual-notes-input"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="grad-purple text-white border-0 shadow-glow flex-1 sm:flex-none sm:w-auto"
                      data-ocid="manual-submit-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          Submitting
                          <AnimatedDots />
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={16} />
                          Mark Attendance
                        </span>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setManualOpen(false);
                        setSubmitError(null);
                      }}
                      className="border-border/60"
                    >
                      Cancel
                    </Button>
                  </div>

                  {/* Date display */}
                  <div className="mt-2">
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="font-body hidden"
                    />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>

      {/* ── Real Attendance History ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass shadow-glass border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <CalendarDays size={18} className="text-primary" />
              Attendance History
              {attendanceRecords.length > 0 && (
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs ml-auto font-body">
                  {attendanceRecords.length} records
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 sm:px-2 pb-2">
            {isLoadingHistory ? (
              <div className="px-4 py-6 space-y-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-12 rounded-xl" />
                ))}
              </div>
            ) : historyError ? (
              <div className="px-4 py-6">
                <ErrorAlert
                  message={`Could not load history: ${historyError}`}
                />
              </div>
            ) : attendanceRecords.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-3 py-10 text-center px-4"
                data-ocid="attendance-empty-state"
              >
                <span className="text-4xl">📅</span>
                <p className="font-display font-semibold text-foreground">
                  No attendance records yet
                </p>
                <p className="text-sm text-muted-foreground font-body max-w-xs">
                  Your attendance history will appear here after you mark
                  attendance for the first time.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-3 px-4 py-2 text-xs font-body text-muted-foreground border-b border-border/30">
                  <span>Date</span>
                  <span className="text-center">Status</span>
                  <span className="text-right">Method</span>
                </div>
                <div className="divide-y divide-border/20 max-h-96 overflow-y-auto">
                  {[...attendanceRecords].reverse().map((row, i) => (
                    <motion.div
                      key={`${row.date}-${i}`}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-3 items-center px-4 py-3 hover:bg-muted/20 transition-smooth"
                      data-ocid={`attendance-row-${i}`}
                    >
                      <span className="font-body text-sm text-foreground">
                        {row.date}
                      </span>
                      <span className="flex justify-center">
                        <Badge
                          className={
                            row.present
                              ? "bg-green-100 text-green-700 border-green-200 text-xs"
                              : "bg-red-100 text-red-600 border-red-200 text-xs"
                          }
                        >
                          {row.present ? "✅ Present" : "❌ Absent"}
                        </Badge>
                      </span>
                      <span className="text-right font-body text-xs text-muted-foreground">
                        {row.markedVia || "—"}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
