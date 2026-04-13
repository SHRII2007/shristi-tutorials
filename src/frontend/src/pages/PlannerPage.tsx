import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  BookOpen,
  BrainCircuit,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Flame,
  Lightbulb,
  Plus,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";
import { useStudentData } from "../hooks/useStudentData";

// ── Types ─────────────────────────────────────────────────────────────────────
interface UITask {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  estimatedMinutes: number;
}

// ── Seed tasks for new users ──────────────────────────────────────────────────
// NOTE: No seed tasks shown for new users — they start with empty state
// and add their own tasks. Tasks persist via localStorage.
const LS_KEY = "shristi_planner_tasks_v1";

function loadTasks(): UITask[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as UITask[];
  } catch {
    /* ignore */
  }
  return []; // Empty by default — no fake seed data
}

function saveTasks(tasks: UITask[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
  } catch {
    /* ignore */
  }
}

// ── Constants ────────────────────────────────────────────────────────────────
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TODAY_IDX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

const WEEK_TASKS: Record<number, string[]> = {
  0: ["Maths worksheet", "English grammar practice"],
  1: ["Science chapter", "Social Studies notes"],
  2: ["Geography map work", "Maths formulas"],
  3: ["Computer Science practical", "Hindi reading"],
  4: ["Past year paper", "Commerce revision"],
  5: ["Maths mock test", "IT lab assignment"],
  6: ["Weekly revision", "Doubt clearing"],
};

const AI_SUGGESTIONS = [
  {
    id: "s1",
    icon: "📐",
    title: "Focus on Maths Chapter 5",
    desc: "You're 3 days behind schedule. A 45-min session with Shruti Ma'am's notes will close the gap!",
    color: "from-purple-500/10 to-violet-500/5 border-purple-300/40",
  },
  {
    id: "s2",
    icon: "💻",
    title: "Complete Computer Science practical",
    desc: "Shristi Ma'am's Python assignment is due Friday. Review loops and functions first.",
    color: "from-indigo-500/10 to-blue-500/5 border-indigo-300/40",
  },
  {
    id: "s3",
    icon: "📖",
    title: "Revise English comprehension",
    desc: "Daily 15-min reading with Sangya Ma'am's techniques will boost your score by ~8 points.",
    color: "from-green-500/10 to-emerald-500/5 border-green-300/40",
  },
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
  "Hindi",
];

const CONFETTI_COLORS = [
  "#7c3aed",
  "#c4b5fd",
  "#f9a8d4",
  "#fde68a",
  "#a5f3fc",
  "#6ee7b7",
  "#f87171",
];

const subjectStyle: Record<string, string> = {
  Maths: "bg-purple-100 text-purple-700",
  Science: "bg-blue-100 text-blue-700",
  English: "bg-green-100 text-green-700",
  "Social Studies": "bg-orange-100 text-orange-700",
  Geography: "bg-teal-100 text-teal-700",
  Commerce: "bg-yellow-100 text-yellow-700",
  IT: "bg-cyan-100 text-cyan-700",
  "Computer Science": "bg-indigo-100 text-indigo-700",
  Hindi: "bg-pink-100 text-pink-700",
};

const priorityStyle: Record<string, string> = {
  high: "bg-red-100 text-red-600 border-red-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  low: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

// ── Confetti Component ────────────────────────────────────────────────────────
interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
}

function ConfettiCelebration({ onDone }: { onDone: () => void }) {
  const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: Math.random() * 0.8,
    duration: 1.5 + Math.random() * 1.5,
    size: 6 + Math.random() * 8,
    rotate: Math.random() * 720 - 360,
  }));

  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 40 : 800,
            opacity: [1, 1, 0],
            rotate: p.rotate,
          }}
          transition={{ delay: p.delay, duration: p.duration, ease: "easeIn" }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[51]"
      >
        <div className="glass rounded-3xl px-8 py-6 shadow-glass border border-purple-300/40">
          <p className="text-5xl mb-2">🎉</p>
          <p className="font-display font-bold text-2xl text-foreground">
            Amazing!
          </p>
          <p className="font-body text-muted-foreground text-sm mt-1">
            You completed today's plan!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ── Animated Checkbox ────────────────────────────────────────────────────────
function AnimatedCheckbox({
  checked,
  onToggle,
  disabled,
}: { checked: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${checked ? "bg-primary border-primary text-primary-foreground shadow-glow-sm" : "border-muted-foreground/30 bg-background hover:border-primary"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label={checked ? "Mark incomplete" : "Mark complete"}
      data-ocid={`task-checkbox-${checked ? "checked" : "unchecked"}`}
    >
      <AnimatePresence>
        {checked && (
          <motion.svg
            key="check"
            viewBox="0 0 12 10"
            width={14}
            height={14}
            role="img"
            aria-label="Task completed"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <title>Task completed</title>
            <motion.path
              d="M1 5 L4.5 8.5 L11 1"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ── Task Card ────────────────────────────────────────────────────────────────
function TaskCard({
  task,
  index,
  onToggle,
  isCompleting,
}: {
  task: UITask;
  index: number;
  onToggle: (id: string) => void;
  isCompleting?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className={`flex items-center gap-3 p-4 rounded-2xl glass card-hover transition-smooth ${task.completed ? "border border-emerald-300/50 bg-emerald-50/30" : "border border-border/40 shadow-glass"}`}
      data-ocid={`task-item-${task.id}`}
    >
      <AnimatedCheckbox
        checked={task.completed}
        onToggle={() => onToggle(task.id)}
        disabled={isCompleting}
      />
      <div className="flex-1 min-w-0">
        <motion.p
          animate={{ opacity: task.completed ? 0.5 : 1 }}
          className={`font-body font-semibold text-sm truncate ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
        >
          {task.title}
        </motion.p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${subjectStyle[task.subject] ?? "bg-muted text-muted-foreground"}`}
          >
            {task.subject}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Target size={10} />
            {task.estimatedMinutes} min
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span
          className={`text-xs px-2 py-0.5 rounded-full border font-medium capitalize ${priorityStyle[task.priority] ?? priorityStyle.medium}`}
        >
          {task.priority}
        </span>
        <span className="text-xs text-muted-foreground hidden sm:inline-flex items-center gap-1 bg-muted/60 rounded-lg px-2 py-1">
          <Calendar size={10} />
          {task.dueDate}
        </span>
      </div>
    </motion.div>
  );
}

// ── Animated Progress Bar ────────────────────────────────────────────────────
function AnimatedProgressBar({
  value,
  allDone,
}: { value: number; allDone: boolean }) {
  const width = useMotionValue(0);
  const progressWidth = useTransform(width, (v) => `${v}%`);

  useEffect(() => {
    const controls = animate(width, value, {
      duration: 1.4,
      ease: [0.34, 1.56, 0.64, 1],
    });
    return controls.stop;
  }, [value, width]);

  return (
    <div className="w-full h-4 bg-muted/60 rounded-full overflow-hidden shadow-neumorphic-inset">
      <motion.div
        style={{ width: progressWidth }}
        className={`h-full rounded-full relative overflow-hidden transition-colors duration-500 ${allDone ? "bg-gradient-to-r from-emerald-400 to-green-500" : "grad-purple"}`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}

// ── Weekly Plan ──────────────────────────────────────────────────────────────
function WeeklyPlan() {
  const [selectedDay, setSelectedDay] = useState<number>(TODAY_IDX);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
    >
      <Card className="glass shadow-glass border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <BookOpen size={18} className="text-primary" />
            This Week
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-7 gap-1.5">
            {DAYS.map((day, idx) => (
              <motion.button
                key={day}
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedDay(idx)}
                data-ocid={`week-day-${day.toLowerCase()}`}
                className={`flex flex-col items-center py-2.5 rounded-xl text-xs font-medium font-body transition-smooth ${selectedDay === idx ? "grad-purple text-white shadow-glow-sm" : idx === TODAY_IDX ? "bg-primary/10 text-primary border border-primary/30" : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                <span>{day}</span>
                <span
                  className={`mt-1 text-[10px] font-bold ${selectedDay === idx ? "text-white/80" : "text-muted-foreground"}`}
                >
                  {WEEK_TASKS[idx]?.length ?? 0}
                </span>
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {(WEEK_TASKS[selectedDay] ?? []).map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/30"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/70 flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">{t}</span>
                  <ChevronRight
                    size={14}
                    className="ml-auto text-muted-foreground"
                  />
                </div>
              ))}
              {selectedDay === TODAY_IDX && (
                <p className="text-xs text-primary font-medium text-center mt-1">
                  ← Today
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ── AI Suggestions ────────────────────────────────────────────────────────────
function AISuggestions({
  onAddSuggestion,
}: { onAddSuggestion: (title: string, subject: string) => void }) {
  const [added, setAdded] = useState<Set<string>>(new Set());

  const handleAdd = (id: string, title: string, subject: string) => {
    setAdded((prev) => new Set(prev).add(id));
    onAddSuggestion(title, subject);
    toast.success(`✅ "${title}" added to your plan!`, { duration: 3000 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.45, type: "spring", stiffness: 220, damping: 24 }}
    >
      <Card className="glass-purple shadow-glass border-border/50 overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 grad-purple rounded-xl flex items-center justify-center shadow-glow-sm flex-shrink-0">
              <BrainCircuit size={20} className="text-white" />
            </div>
            <div>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Lightbulb size={16} className="text-primary" />
                AI Suggestions
              </CardTitle>
              <p className="text-xs text-muted-foreground font-body mt-0.5">
                Personalised recommendations for you
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {AI_SUGGESTIONS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.55 + i * 0.1,
                type: "spring",
                stiffness: 240,
                damping: 22,
              }}
              className={`p-4 rounded-2xl border bg-gradient-to-br ${s.color} hover-glow transition-smooth`}
              data-ocid={`ai-suggestion-${s.id}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 flex-1 min-w-0">
                  <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-sm text-foreground">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  className="flex-shrink-0"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleAdd(
                        s.id,
                        s.title,
                        s.icon === "📐"
                          ? "Maths"
                          : s.icon === "💻"
                            ? "Computer Science"
                            : "English",
                      )
                    }
                    disabled={added.has(s.id)}
                    className={`text-xs px-3 py-1.5 h-auto rounded-xl transition-smooth ${added.has(s.id) ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "border-primary/40 text-primary hover:bg-primary hover:text-white"}`}
                    data-ocid={`suggestion-add-${s.id}`}
                  >
                    {added.has(s.id) ? (
                      <span className="flex items-center gap-1">
                        <Check size={12} />
                        Added
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Plus size={12} />
                        Add to Plan
                      </span>
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ── Add Task Form ─────────────────────────────────────────────────────────────
function AddTaskForm({
  onAdd,
  onClose,
}: {
  onAdd: (task: Omit<UITask, "id" | "completed">) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      subject,
      dueDate,
      priority,
      estimatedMinutes: 30,
    });
    setTitle("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="glass border border-primary/30 rounded-2xl p-4 space-y-3 shadow-glass"
      data-ocid="add-task-form"
    >
      <div className="flex items-center justify-between mb-1">
        <p className="font-body font-semibold text-sm text-foreground">
          Add New Task
        </p>
        <button
          type="button"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-smooth"
        >
          <X size={16} />
        </button>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="task-title"
          className="font-body text-xs text-muted-foreground"
        >
          Task Title *
        </Label>
        <Input
          id="task-title"
          placeholder="e.g. Complete Chapter 5 exercises"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="font-body h-9 text-sm"
          data-ocid="task-title-input"
          required
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <Label
            htmlFor="task-subject"
            className="font-body text-xs text-muted-foreground"
          >
            Subject
          </Label>
          <select
            id="task-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
            data-ocid="task-subject-select"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="task-due"
            className="font-body text-xs text-muted-foreground"
          >
            Due Date
          </Label>
          <Input
            id="task-due"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="font-body h-9 text-sm"
            data-ocid="task-due-input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="task-priority"
            className="font-body text-xs text-muted-foreground"
          >
            Priority
          </Label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "high" | "medium" | "low")
            }
            className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
            data-ocid="task-priority-select"
          >
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <Button
          type="submit"
          size="sm"
          className="grad-purple text-white border-0 shadow-glow-sm flex-1 sm:flex-none"
          data-ocid="add-task-submit"
        >
          <Plus size={14} className="mr-1" />
          Add Task
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={onClose}
          className="border-border/60"
        >
          Cancel
        </Button>
      </div>
    </motion.form>
  );
}

// ── Filter Bar ────────────────────────────────────────────────────────────────
function FilterBar({
  filter,
  setFilter,
  subjectFilter,
  setSubjectFilter,
}: {
  filter: "all" | "pending" | "done";
  setFilter: (f: "all" | "pending" | "done") => void;
  subjectFilter: string;
  setSubjectFilter: (s: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {(["all", "pending", "done"] as const).map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-full text-xs font-body font-medium capitalize transition-smooth ${filter === f ? "bg-primary text-white shadow-glow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
          data-ocid={`filter-${f}`}
        >
          {f}
        </button>
      ))}
      <select
        value={subjectFilter}
        onChange={(e) => setSubjectFilter(e.target.value)}
        className="h-7 rounded-full border border-input bg-muted px-3 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
        data-ocid="subject-filter"
      >
        <option value="">All Subjects</option>
        {SUBJECTS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function PlannerPage() {
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile, principal } = useAuth();
  const { streak } = useStudentData();
  const studentId = studentProfile?.rollNumber ?? principal ?? "";

  // Load tasks from localStorage first (persists between visits)
  const [tasks, setTasks] = useState<UITask[]>(loadTasks);
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  const [completingIds, setCompletingIds] = useState<Set<string>>(new Set());
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all");
  const [subjectFilter, setSubjectFilter] = useState("");
  const wasAllDoneRef = useRef(false);
  const backendLoaded = useRef(false);

  // Persist tasks to localStorage on every change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Try to load tasks from backend (merge with local)
  useEffect(() => {
    if (!actor || isFetching || !studentId || backendLoaded.current) return;
    backendLoaded.current = true;
    setIsLoadingTasks(true);
    actor
      .getStudyTasks(studentId)
      .then((backendTasks) => {
        if (backendTasks.length > 0) {
          const mapped = backendTasks.map((t) => ({
            id: t.id,
            title: t.title,
            subject: t.subject,
            dueDate: t.dueDate,
            completed: t.completed,
            priority: (["high", "medium", "low"].includes(t.priority)
              ? t.priority
              : "medium") as "high" | "medium" | "low",
            estimatedMinutes: 30,
          }));
          // Merge: keep local tasks that aren't in backend, add backend tasks
          setTasks((prev) => {
            const backendIds = new Set(mapped.map((t) => t.id));
            const localOnly = prev.filter(
              (t) => !backendIds.has(t.id) && t.id.startsWith("local-"),
            );
            return [...mapped, ...localOnly];
          });
        }
      })
      .catch(() => {
        /* keep local/seed tasks */
      })
      .finally(() => setIsLoadingTasks(false));
  }, [actor, isFetching, studentId]);

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const pct =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const allDone = completedCount === totalCount && totalCount > 0;

  useEffect(() => {
    if (allDone && !wasAllDoneRef.current) {
      wasAllDoneRef.current = true;
      setShowConfetti(true);
    } else if (!allDone) {
      wasAllDoneRef.current = false;
    }
  }, [allDone]);

  const toggleTask = useCallback(
    async (id: string) => {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      const newCompleted = !task.completed;

      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t)),
      );

      if (newCompleted) {
        toast.success(`✅ "${task.title}" completed!`, { duration: 2500 });
      }

      if (actor && !isFetching && newCompleted) {
        setCompletingIds((prev) => new Set(prev).add(id));
        try {
          await actor.completeTask(id);
        } catch {
          /* keep optimistic state */
        } finally {
          setCompletingIds((prev) => {
            const s = new Set(prev);
            s.delete(id);
            return s;
          });
        }
      }
    },
    [tasks, actor, isFetching],
  );

  const handleAddTask = useCallback(
    (newTask: Omit<UITask, "id" | "completed">) => {
      const id = `local-${Date.now()}`;
      const task: UITask = { ...newTask, id, completed: false };
      setTasks((prev) => [task, ...prev]);
      setShowAddForm(false);
      toast.success(`📝 "${newTask.title}" added to your plan!`, {
        duration: 2500,
      });
    },
    [],
  );

  const handleAddFromSuggestion = useCallback(
    (title: string, subject: string) => {
      const id = `suggest-${Date.now()}`;
      const task: UITask = {
        id,
        title,
        subject,
        dueDate: "This Week",
        completed: false,
        priority: "medium",
        estimatedMinutes: 45,
      };
      setTasks((prev) => [task, ...prev]);
    },
    [],
  );

  const filteredTasks = tasks.filter((t) => {
    const matchFilter =
      filter === "all" ||
      (filter === "pending" && !t.completed) ||
      (filter === "done" && t.completed);
    const matchSubject = !subjectFilter || t.subject === subjectFilter;
    return matchFilter && matchSubject;
  });

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <AnimatePresence>
        {showConfetti && (
          <ConfettiCelebration onDone={() => setShowConfetti(false)} />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent leading-tight">
              📚 AI Study Planner
            </h1>
            <p className="text-muted-foreground font-body mt-1 flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              Smart study schedule — <em>Where learning is fun</em>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="glass rounded-2xl px-4 py-2.5 border border-border/40 shadow-glass">
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-orange-500" />
                <div>
                  <p className="text-xs text-muted-foreground font-body leading-none">
                    Streak
                  </p>
                  <p className="font-display font-bold text-foreground text-sm leading-tight">
                    {streak.current} days 🔥
                  </p>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl px-4 py-2.5 border border-border/40 shadow-glass hidden sm:block">
              <p className="text-xs text-muted-foreground font-body leading-none">
                Today
              </p>
              <p className="font-display font-semibold text-foreground text-xs leading-tight max-w-[140px] truncate">
                {today}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Daily Progress ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass shadow-glass border-border/50 overflow-hidden">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-display font-bold text-foreground text-xl">
                    Today's Progress
                  </p>
                  <p className="text-muted-foreground text-sm font-body mt-0.5">
                    {completedCount}/{totalCount} Tasks Complete
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  {allDone ? (
                    <motion.div
                      key="done"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl border border-emerald-200 font-medium text-sm font-body"
                    >
                      <CheckCircle2 size={16} />
                      All done!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="progress"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-3xl font-display font-bold text-primary"
                    >
                      {pct}%
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatedProgressBar value={pct} allDone={allDone} />
              <AnimatePresence>
                {allDone && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-emerald-600 font-body font-semibold text-sm mt-3"
                  >
                    🎉 Amazing! You completed today's plan!
                  </motion.p>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Daily Tasks ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass shadow-glass border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  My Tasks
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 font-body"
                >
                  {completedCount}/{totalCount} done
                </Badge>
              </div>
              <FilterBar
                filter={filter}
                setFilter={setFilter}
                subjectFilter={subjectFilter}
                setSubjectFilter={setSubjectFilter}
              />
            </CardHeader>
            <CardContent className="space-y-3">
              {isLoadingTasks ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 rounded-2xl" />
                  ))}
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {filteredTasks.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-8 text-center"
                      data-ocid="planner-empty-state"
                    >
                      <p className="text-4xl mb-2">📋</p>
                      <p className="font-display font-semibold text-foreground">
                        {filter === "all" && !subjectFilter
                          ? "No tasks yet!"
                          : "No tasks here"}
                      </p>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {filter === "all" && !subjectFilter
                          ? "Add your first task using the button below"
                          : "Change your filter or add a new task"}
                      </p>
                    </motion.div>
                  ) : (
                    filteredTasks.map((task, i) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        index={i}
                        onToggle={toggleTask}
                        isCompleting={completingIds.has(task.id)}
                      />
                    ))
                  )}
                </AnimatePresence>
              )}

              <AnimatePresence>
                {showAddForm && (
                  <AddTaskForm
                    key="add-form"
                    onAdd={handleAddTask}
                    onClose={() => setShowAddForm(false)}
                  />
                )}
              </AnimatePresence>

              {!showAddForm && (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-dashed border-primary/40 text-primary hover:bg-primary/5 rounded-2xl py-5 font-body font-medium"
                    data-ocid="add-task-btn"
                    onClick={() => setShowAddForm(true)}
                  >
                    <Plus size={16} className="mr-2" />
                    Add new task
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Weekly Plan ── */}
        <WeeklyPlan />

        {/* ── AI Suggestions ── */}
        <AISuggestions onAddSuggestion={handleAddFromSuggestion} />
      </div>
    </>
  );
}
