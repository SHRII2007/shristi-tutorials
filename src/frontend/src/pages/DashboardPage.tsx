import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  Bell,
  BotMessageSquare,
  CalendarCheck,
  CalendarDays,
  Clock,
  CreditCard,
  FileText,
  LayoutGrid,
  QrCode,
  Send,
  TrendingUp,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { toast } from "sonner";
import { createActor } from "../backend";
import type {
  Announcement,
  HomeworkAssignment,
  SubmissionStatus,
} from "../backend.d";
import { useAuth } from "../context/AuthContext";
import { useStudentData } from "../hooks/useStudentData";

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 18 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  useEffect(() => {
    return rounded.on("change", setDisplay);
  }, [rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// ─── SVG Circular progress ring ──────────────────────────────────────────────
function CircleRing({
  value,
  color,
  size = 100,
  strokeWidth = 9,
}: {
  value: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const dashoffset = useMotionValue(circ);
  const targetOffset = circ - (value / 100) * circ;

  useEffect(() => {
    animate(dashoffset, targetOffset, {
      duration: 1.4,
      ease: "easeOut",
      delay: 0.3,
    });
  }, [dashoffset, targetOffset]);

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-90deg)" }}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(124,58,237,0.12)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circ}
        style={{ strokeDashoffset: dashoffset }}
      />
    </svg>
  );
}

// ─── Subject progress card ────────────────────────────────────────────────────
function SubjectRingCard({
  subject,
  progress,
  color,
  score,
  index,
}: {
  subject: string;
  progress: number;
  color: string;
  score: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.04, rotateY: 2 }}
      className="glass rounded-2xl p-5 flex flex-col items-center gap-3 flex-1 min-w-[130px]"
    >
      <div className="relative flex items-center justify-center">
        <CircleRing value={progress} color={color} size={96} strokeWidth={9} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display font-bold text-foreground text-xl leading-none">
            <AnimatedCounter to={progress} suffix="%" />
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="font-display font-semibold text-foreground text-sm">
          {subject}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">Score: {score}%</p>
      </div>
    </motion.div>
  );
}

// ─── Sparkline data ───────────────────────────────────────────────────────────
const sparklineData = [
  { v: 68 },
  { v: 72 },
  { v: 70 },
  { v: 78 },
  { v: 75 },
  { v: 80 },
  { v: 82 },
];

// ─── Attendance ring ─────────────────────────────────────────────────────────
function AttendanceRing({ value }: { value: number }) {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <CircleRing value={value} color="#7c3aed" size={80} strokeWidth={8} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-bold text-primary text-base">
          <AnimatedCounter to={value} suffix="%" />
        </span>
      </div>
    </div>
  );
}

// ─── Dashboard card wrapper with navigation ───────────────────────────────────
function DashCard({
  children,
  index,
  ocid,
  className = "",
  to,
}: {
  children: React.ReactNode;
  index: number;
  ocid: string;
  className?: string;
  to?: string;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 70 }}
      whileHover={{
        scale: 1.025,
        rotateX: 1.5,
        rotateY: 1.5,
        boxShadow: "0 20px 60px rgba(124,58,237,0.22)",
      }}
      data-ocid={ocid}
      onClick={to ? () => navigate({ to }) : undefined}
      className={`glass rounded-2xl border border-purple-100/60 ${to ? "cursor-pointer" : "cursor-default"} select-none ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Homework Submission Modal ────────────────────────────────────────────────

const subjectBadgeColors: Record<string, string> = {
  Maths: "bg-purple-100 text-purple-700 border-purple-200",
  Science: "bg-blue-100 text-blue-700 border-blue-200",
  English: "bg-green-100 text-green-700 border-green-200",
  "Social Studies": "bg-orange-100 text-orange-700 border-orange-200",
  Geography: "bg-teal-100 text-teal-700 border-teal-200",
  Commerce: "bg-yellow-100 text-yellow-700 border-yellow-200",
  IT: "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Computer Science": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Hindi: "bg-pink-100 text-pink-700 border-pink-200",
};

const statusBadgeColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  graded: "bg-green-100 text-green-700 border-green-200",
};

function HomeworkCard({
  hw,
  onSubmit,
}: {
  hw: HomeworkAssignment;
  onSubmit: (homeworkId: bigint, content: string) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmissionStatus | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const dueDate = hw.dueDate || "TBD";
  const isOverdue = hw.dueDate && new Date(hw.dueDate) < new Date();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await onSubmit(hw.id, content.trim());
      setSubmitStatus("submitted" as SubmissionStatus);
      setOpen(false);
      toast.success(`📚 "${hw.title}" submitted successfully!`, {
        duration: 4000,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass border border-border/40 rounded-2xl p-4 shadow-glass transition-smooth hover:shadow-lg"
      data-ocid={`hw-card-${hw.id}`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <Badge
              className={`text-xs border font-body ${subjectBadgeColors[hw.subject] ?? "bg-muted text-muted-foreground border-border"}`}
            >
              {hw.subject}
            </Badge>
            {submitStatus ? (
              <Badge
                className={`text-xs border font-body ${statusBadgeColors[submitStatus] ?? statusBadgeColors.pending}`}
              >
                {submitStatus === "submitted"
                  ? "✅ Submitted"
                  : submitStatus === "graded"
                    ? "🏆 Graded"
                    : "⏳ Pending"}
              </Badge>
            ) : (
              <Badge
                className={`text-xs border font-body ${isOverdue ? "bg-red-100 text-red-700 border-red-200" : statusBadgeColors.pending}`}
              >
                {isOverdue ? "⚠️ Overdue" : "⏳ Pending"}
              </Badge>
            )}
          </div>
          <h4 className="font-display font-semibold text-foreground text-sm leading-snug truncate">
            {hw.title}
          </h4>
          <p className="text-xs text-muted-foreground font-body mt-0.5 line-clamp-2 leading-relaxed">
            {hw.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mt-3">
        <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
          <CalendarDays size={11} />
          Due: {dueDate}
        </span>
        {!submitStatus && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setOpen(true)}
            className="text-xs px-3 py-1.5 h-auto rounded-xl border-primary/40 text-primary hover:bg-primary hover:text-white transition-smooth"
            data-ocid={`hw-submit-btn-${hw.id}`}
          >
            <Send size={11} className="mr-1" />
            Submit
          </Button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 pt-3 border-t border-border/40 space-y-3 overflow-hidden"
            data-ocid={`hw-form-${hw.id}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-body text-sm font-semibold text-foreground">
                Submit your work
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-body"
              >
                <X size={12} />
                {error}
              </motion.div>
            )}

            <Textarea
              placeholder="Paste your answer or describe your submission here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="font-body resize-none h-24 text-sm"
              data-ocid={`hw-content-${hw.id}`}
              required
            />

            <div className="flex gap-2">
              <Button
                type="submit"
                size="sm"
                disabled={isSubmitting || !content.trim()}
                className="grad-purple text-white border-0 shadow-glow-sm flex-1"
                data-ocid={`hw-submit-confirm-${hw.id}`}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <span className="flex items-center gap-1">
                    <Send size={12} />
                    Submit Homework
                  </span>
                )}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setOpen(false)}
                className="border-border/60"
              >
                Cancel
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Announcement Card ────────────────────────────────────────────────────────
function AnnouncementCard({
  announcement,
  index,
}: { announcement: Announcement; index: number }) {
  const publishedDate = announcement.publishedAt
    ? new Date(Number(announcement.publishedAt) / 1_000_000).toLocaleDateString(
        "en-IN",
        { day: "numeric", month: "short", year: "numeric" },
      )
    : "Recently";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
      className="glass border border-primary/20 rounded-2xl p-4 shadow-glass bg-gradient-to-br from-purple-50/60 to-violet-50/30"
      data-ocid={`announcement-${announcement.id}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 grad-purple rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
          <Bell size={16} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="font-display font-semibold text-foreground text-sm leading-snug truncate">
              {announcement.title}
            </h4>
            <span className="text-xs text-muted-foreground font-body whitespace-nowrap flex-shrink-0">
              {publishedDate}
            </span>
          </div>
          <p className="text-sm text-foreground/80 font-body leading-relaxed">
            {announcement.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Error banner ─────────────────────────────────────────────────────────────
function ErrorBanner({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-2 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700"
    >
      <X size={14} className="mt-0.5 flex-shrink-0" />
      <p className="font-body text-sm">{message}</p>
    </motion.div>
  );
}

// ─── Quick Action Buttons ────────────────────────────────────────────────────
function QuickActions() {
  const navigate = useNavigate();
  const actions = [
    {
      icon: BarChart3,
      label: "Progress",
      desc: "View reports",
      to: "/progress",
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      icon: LayoutGrid,
      label: "Planner",
      desc: "Study tasks",
      to: "/planner",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: QrCode,
      label: "Attendance",
      desc: "Mark QR scan",
      to: "/attendance",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: BotMessageSquare,
      label: "Doubt Chat",
      desc: "Ask teachers",
      to: "/doubt",
      color: "text-pink-600",
      bg: "bg-pink-100",
    },
    {
      icon: CalendarCheck,
      label: "Analytics",
      desc: "Performance",
      to: "/progress",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass rounded-2xl p-5 border border-border/40"
      data-ocid="quick-actions-section"
    >
      <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2 mb-4">
        ⚡ Quick Access
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {actions.map((a) => (
          <motion.button
            key={a.label}
            type="button"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate({ to: a.to })}
            data-ocid={`quick-action-${a.label.toLowerCase().replace(/ /g, "-")}`}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/30 hover:bg-muted/60 border border-border/30 hover:border-primary/30 transition-smooth cursor-pointer text-center"
          >
            <div
              className={`w-10 h-10 ${a.bg} rounded-xl flex items-center justify-center`}
            >
              <a.icon size={20} className={a.color} />
            </div>
            <span className="font-display font-bold text-foreground text-xs">
              {a.label}
            </span>
            <span className="text-muted-foreground text-xs font-body leading-tight hidden sm:block">
              {a.desc}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardPage() {
  const {
    student,
    tasks,
    progress,
    streak,
    achievements,
    attendance,
    isLoading,
  } = useStudentData();
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile } = useAuth();

  const todayTasks = tasks.filter((t) => t.dueDate === "Today");
  const doneTodayCount = todayTasks.filter((t) => t.completed).length;
  const pendingHW = tasks.filter((t) => !t.completed);
  const hwSubjects = [...new Set(pendingHW.map((t) => t.subject))].slice(0, 3);

  const attendancePct =
    attendance.length > 0
      ? Math.round(
          (attendance.filter((r) => r.present).length / attendance.length) *
            100,
        )
      : 0;
  const waveRef = useRef<HTMLSpanElement>(null);

  const className = studentProfile?.className ?? "";

  // ── Homework from backend ─────────────────────────────────────────────────
  const [homework, setHomework] = useState<HomeworkAssignment[]>([]);
  const [isLoadingHW, setIsLoadingHW] = useState(false);
  const [hwError, setHwError] = useState<string | null>(null);

  useEffect(() => {
    if (!actor || isFetching || !className) return;
    setIsLoadingHW(true);
    actor
      .getHomeworkByClass(className)
      .then(setHomework)
      .catch((err: unknown) => setHwError(String(err)))
      .finally(() => setIsLoadingHW(false));
  }, [actor, isFetching, className]);

  // ── Announcements from backend ────────────────────────────────────────────
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoadingAnn, setIsLoadingAnn] = useState(false);
  const [annError, setAnnError] = useState<string | null>(null);

  useEffect(() => {
    if (!actor || isFetching || !className) return;
    setIsLoadingAnn(true);
    actor
      .getAnnouncements(className)
      .then(setAnnouncements)
      .catch((err: unknown) => setAnnError(String(err)))
      .finally(() => setIsLoadingAnn(false));
  }, [actor, isFetching, className]);

  const handleSubmitHomework = async (homeworkId: bigint, content: string) => {
    if (!actor) throw new Error("Not connected to backend");
    const result = await actor.submitHomework(homeworkId, content);
    if (result.__kind__ === "err") throw new Error(result.err);
  };

  const fireScale = useMotionValue(1);
  useEffect(() => {
    animate(fireScale, [1, 1.22, 1], {
      duration: 1.1,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 1.4,
    });
  }, [fireScale]);

  useEffect(() => {
    if (!waveRef.current) return;
    const el = waveRef.current;
    const anim = animate(
      el,
      { rotate: [0, 20, -8, 20, 0] },
      { duration: 1.2, delay: 0.6, ease: "easeInOut" },
    );
    return () => anim.stop();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <Skeleton className="h-16 w-80 rounded-2xl" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const displayName = studentProfile?.name ?? student.name ?? "Student";
  const firstName = displayName.split(" ")[0] || "Student";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground flex items-center gap-2 flex-wrap">
            Good Morning, {firstName}!{" "}
            <span ref={waveRef} className="inline-block origin-bottom-right">
              👋
            </span>
          </h1>
          <p className="text-muted-foreground font-body mt-1 text-sm">
            Keep up the great work! ✨{" "}
            <span className="text-primary font-medium">
              Where learning is fun
            </span>
          </p>
          {studentProfile && (
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              {studentProfile.className} · {studentProfile.rollNumber}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <motion.div
            className="glass-purple rounded-2xl px-4 py-2.5 flex items-center gap-2"
            whileHover={{ scale: 1.06 }}
          >
            <motion.span style={{ scale: fireScale }} className="text-xl">
              🔥
            </motion.span>
            <div>
              <p className="font-display font-bold text-foreground text-sm leading-none">
                {streak.current} Day Streak!
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Best: {streak.longest} days
              </p>
            </div>
          </motion.div>
          <motion.div
            className="glass rounded-2xl px-4 py-2.5 flex items-center gap-2"
            whileHover={{ scale: 1.06 }}
          >
            <span className="text-xl">🏆</span>
            <div>
              <p className="font-display font-bold text-foreground text-sm leading-none">
                {student.rank > 0 ? `Rank #${student.rank}` : "Rank --"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {student.totalPoints} pts
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Week Streak Dots ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2"
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
          <div key={day} className="flex flex-col items-center gap-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25 + i * 0.06, type: "spring" }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${streak.thisWeek[i] ? "grad-purple-deep text-white shadow-glass" : "bg-muted text-muted-foreground"}`}
            >
              {streak.thisWeek[i] ? "✓" : "·"}
            </motion.div>
            <span className="text-xs text-muted-foreground">{day}</span>
          </div>
        ))}
        <span className="ml-2 text-xs text-muted-foreground hidden sm:block">
          This week
        </span>
      </motion.div>

      {/* ── Quick Action Buttons ── */}
      <QuickActions />

      {/* ── 6 Dashboard Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Attendance → navigates to /attendance */}
        <DashCard index={0} ocid="dash-card-attendance" to="/attendance">
          <div className="p-5 flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl grad-purple flex items-center justify-center shadow-sm">
              <CalendarDays size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wide mb-1">
                Attendance
              </p>
              <div className="flex items-center gap-3">
                <AttendanceRing value={attendancePct} />
                <div>
                  <p className="font-display font-bold text-primary text-2xl leading-none">
                    <AnimatedCounter to={attendancePct} suffix="%" />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This Month
                  </p>
                  {attendancePct > 0 ? (
                    <Badge className="mt-1.5 bg-green-50 text-green-700 border-green-200 text-xs gap-1">
                      {attendancePct >= 75 ? "✓ Good standing" : "⚠ Below 75%"}
                    </Badge>
                  ) : (
                    <Badge className="mt-1.5 bg-muted text-muted-foreground border-border text-xs">
                      No records yet
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-xs text-primary font-semibold mt-2">
                Tap to mark attendance →
              </p>
            </div>
          </div>
        </DashCard>

        {/* Card 2: Study Planner → navigates to /planner */}
        <DashCard index={1} ocid="dash-card-study-planner" to="/planner">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <LayoutGrid size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Smart Planner
                </p>
                <p className="font-display font-bold text-foreground text-lg leading-tight">
                  {doneTodayCount}/{todayTasks.length} Tasks Done
                </p>
              </div>
            </div>
            <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width:
                    todayTasks.length > 0
                      ? `${(doneTodayCount / todayTasks.length) * 100}%`
                      : "0%",
                }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="h-full grad-purple rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Today's study target
            </p>
            <p className="text-xs text-primary font-semibold">
              Tap to open planner →
            </p>
          </div>
        </DashCard>

        {/* Card 3: Timetable */}
        <DashCard index={2} ocid="dash-card-timetable">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                <Clock size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Timetable
                </p>
                <p className="font-display font-bold text-foreground text-base leading-tight">
                  Next Class
                </p>
              </div>
            </div>
            <div className="glass-purple rounded-xl p-3 mb-3">
              <p className="font-display font-bold text-primary text-lg leading-none">
                Mathematics
              </p>
              <p className="text-sm text-foreground mt-1">Today at 4:00 PM</p>
              <motion.div
                className="mt-2 inline-flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1 text-xs font-medium text-foreground"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                in 2 hours
              </motion.div>
            </div>
            <p className="text-xs text-muted-foreground">
              Teacher: Shruti Ma'am · Room 204
            </p>
          </div>
        </DashCard>

        {/* Card 4: Fees */}
        <DashCard index={3} ocid="dash-card-fees">
          <div className="p-5 flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CreditCard size={20} className="text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                Fees
              </p>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display font-bold text-foreground text-lg">
                  April Fees
                </p>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="text-xl"
                >
                  ✅
                </motion.span>
              </div>
              <Badge className="bg-green-50 text-green-700 border-green-200 gap-1 text-xs">
                Paid · ₹2,500
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">
                Next due: May 1, 2026
              </p>
            </div>
          </div>
        </DashCard>

        {/* Card 5: Homework → navigates to /planner */}
        <DashCard index={4} ocid="dash-card-homework" to="/planner">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <FileText size={20} className="text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Homework
                </p>
                <p className="font-display font-bold text-foreground text-lg leading-tight">
                  {homework.length > 0
                    ? `${homework.length} Assigned`
                    : `${pendingHW.length} Pending`}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {hwSubjects.map((sub) => (
                <motion.span
                  key={sub}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + hwSubjects.indexOf(sub) * 0.1 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${sub === "Maths" ? "bg-purple-50 text-primary border-purple-200" : sub === "Science" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`}
                >
                  {sub}
                </motion.span>
              ))}
            </div>
            <p className="text-xs text-primary font-semibold mt-3">
              Tap to view assignments →
            </p>
          </div>
        </DashCard>

        {/* Card 6: Analytics → navigates to /progress */}
        <DashCard index={5} ocid="dash-card-analytics" to="/progress">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
                <TrendingUp size={20} className="text-violet-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Analytics
                </p>
                <p className="font-display font-bold text-foreground text-lg leading-tight flex items-center gap-1.5">
                  {progress.length > 0
                    ? `${Math.round(progress.reduce((sum, p) => sum + p.score, 0) / progress.length)}% Overall`
                    : "No data yet"}
                  {progress.length > 0 && (
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="text-green-500 text-sm"
                    >
                      ↑
                    </motion.span>
                  )}
                </p>
              </div>
            </div>
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={sparklineData}
                  margin={{ top: 4, right: 2, left: 2, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="analyticsGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip
                    contentStyle={{
                      background: "rgba(255,255,255,0.92)",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 11,
                    }}
                    formatter={(v: number) => [`${v}%`, "Score"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="#7c3aed"
                    strokeWidth={2.5}
                    fill="url(#analyticsGrad)"
                    isAnimationActive
                    animationDuration={1400}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-primary font-semibold mt-1">
              Tap to view full report →
            </p>
          </div>
        </DashCard>
      </div>

      {/* ── Homework Section ── */}
      <div data-ocid="homework-section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between mb-5"
        >
          <h2 className="font-display font-bold text-2xl text-foreground flex items-center gap-2">
            <span className="text-2xl">📝</span> Homework &amp; Assignments
          </h2>
          {homework.length > 0 && (
            <Badge className="bg-primary/10 text-primary border-primary/20 font-body">
              {homework.length} assigned
            </Badge>
          )}
        </motion.div>

        {isLoadingHW ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        ) : hwError ? (
          <ErrorBanner message={`Could not load homework: ${hwError}`} />
        ) : !className ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 text-center border border-dashed border-primary/30"
            data-ocid="homework-no-class"
          >
            <span className="text-4xl block mb-3">📚</span>
            <p className="font-display font-semibold text-foreground">
              No class assigned yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Your homework will appear here once your class is set up.
            </p>
          </motion.div>
        ) : homework.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 text-center border border-dashed border-primary/30"
            data-ocid="homework-empty-state"
          >
            <span className="text-4xl block mb-3">✅</span>
            <p className="font-display font-semibold text-foreground">
              No homework assigned
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              You're all caught up! Check back later for new assignments.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homework.map((hw) => (
              <HomeworkCard
                key={String(hw.id)}
                hw={hw}
                onSubmit={handleSubmitHomework}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Announcements Section ── */}
      <div data-ocid="announcements-section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between mb-5"
        >
          <h2 className="font-display font-bold text-2xl text-foreground flex items-center gap-2">
            <span className="text-2xl">📢</span> Announcements
          </h2>
          {announcements.length > 0 && (
            <Badge className="bg-primary/10 text-primary border-primary/20 font-body">
              {announcements.length} new
            </Badge>
          )}
        </motion.div>

        {isLoadingAnn ? (
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-24 rounded-2xl" />
            ))}
          </div>
        ) : annError ? (
          <ErrorBanner message={`Could not load announcements: ${annError}`} />
        ) : !className ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 text-center border border-dashed border-primary/30"
          >
            <span className="text-4xl block mb-3">📢</span>
            <p className="font-display font-semibold text-foreground">
              No class assigned yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Announcements from your teachers will appear here.
            </p>
          </motion.div>
        ) : announcements.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 text-center border border-dashed border-primary/30"
            data-ocid="announcements-empty-state"
          >
            <span className="text-4xl block mb-3">🔔</span>
            <p className="font-display font-semibold text-foreground">
              No announcements yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Your teachers haven't posted anything yet. Check back soon!
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {announcements.map((ann, i) => (
              <AnnouncementCard
                key={String(ann.id)}
                announcement={ann}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Subject Progress Section ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-between mb-5"
        >
          <h2 className="font-display font-bold text-2xl text-foreground flex items-center gap-2">
            <span className="text-2xl">📊</span> Your Subject Progress
          </h2>
          <Link
            to="/progress"
            className="text-sm text-primary font-semibold hover:underline"
          >
            View all →
          </Link>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-start">
          {progress.map((p, i) => (
            <SubjectRingCard
              key={p.subject}
              subject={p.subject}
              progress={p.progress}
              color={p.color}
              score={p.score}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ── Recent Activity ── */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="font-display font-bold text-2xl text-foreground flex items-center gap-2 mb-5"
        >
          <span className="text-2xl">⚡</span> Recent Activity
        </motion.h2>
        {tasks.length === 0 && attendance.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-8 text-center border border-dashed border-primary/30"
            data-ocid="activity-empty-state"
          >
            <span className="text-4xl block mb-3">⚡</span>
            <p className="font-display font-semibold text-foreground">
              No activity yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Your study activity will appear here as you complete tasks and
              mark attendance.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {tasks
              .filter((t) => t.completed)
              .slice(0, 3)
              .map((t, i) => (
                <motion.div
                  key={`task-${t.id}`}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.1,
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  data-ocid={`activity-row-task-${t.id}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border glass transition-smooth hover:shadow-glass bg-green-50 border-green-200"
                >
                  <span className="text-2xl">✅</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-foreground truncate">
                      Completed: {t.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    {t.dueDate}
                  </span>
                </motion.div>
              ))}
            {attendance
              .filter((r) => r.present)
              .slice(0, 2)
              .map((r, i) => (
                <motion.div
                  key={`att-${r.date}-${r.studentId}`}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.1,
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  data-ocid={`activity-row-att-${r.date}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border glass transition-smooth hover:shadow-glass bg-purple-50 border-purple-200"
                >
                  <span className="text-2xl">📅</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-foreground truncate">
                      Attendance marked
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    {r.date}
                  </span>
                </motion.div>
              ))}
          </div>
        )}
      </div>

      {/* ── Achievements preview ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="glass rounded-2xl p-6"
        data-ocid="achievements-section"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            🏅 Achievements
          </h2>
          <Badge className="bg-purple-50 text-primary border-purple-200 text-xs">
            {achievements.filter((a) => a.unlocked).length} /{" "}
            {achievements.length} unlocked
          </Badge>
        </div>
        <div className="flex flex-wrap gap-3">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.08, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border text-center min-w-[90px] transition-smooth ${ach.unlocked ? "glass-purple border-purple-200 shadow-glass" : "bg-muted/50 border-border opacity-50 grayscale"}`}
              title={ach.description}
            >
              <span className="text-2xl">{ach.icon}</span>
              <span className="text-xs font-semibold text-foreground leading-tight max-w-[80px]">
                {ach.title}
              </span>
              {ach.unlocked && ach.unlockedDate && (
                <span className="text-xs text-muted-foreground">
                  {ach.unlockedDate}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
