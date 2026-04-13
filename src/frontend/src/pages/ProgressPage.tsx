import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStudentData } from "../hooks/useStudentData";

// ── Data ───────────────────────────────────────────────────────────────────
const WEEKLY_DATA = [
  {
    week: "Wk 1",
    Maths: 72,
    Science: 62,
    English: 78,
    "Social Studies": 70,
    Geography: 65,
    Hindi: 80,
  },
  {
    week: "Wk 2",
    Maths: 75,
    Science: 65,
    English: 80,
    "Social Studies": 72,
    Geography: 68,
    Hindi: 82,
  },
  {
    week: "Wk 3",
    Maths: 74,
    Science: 68,
    English: 79,
    "Social Studies": 74,
    Geography: 66,
    Hindi: 83,
  },
  {
    week: "Wk 4",
    Maths: 78,
    Science: 63,
    English: 82,
    "Social Studies": 76,
    Geography: 70,
    Hindi: 84,
  },
  {
    week: "Wk 5",
    Maths: 80,
    Science: 70,
    English: 84,
    "Social Studies": 75,
    Geography: 72,
    Hindi: 86,
  },
  {
    week: "Wk 6",
    Maths: 82,
    Science: 68,
    English: 86,
    "Social Studies": 78,
    Geography: 74,
    Hindi: 87,
  },
  {
    week: "Wk 7",
    Maths: 85,
    Science: 72,
    English: 88,
    "Social Studies": 80,
    Geography: 76,
    Hindi: 88,
  },
  {
    week: "Wk 8",
    Maths: 88,
    Science: 68,
    English: 91,
    "Social Studies": 82,
    Geography: 78,
    Hindi: 90,
  },
];

const SUBJECT_BAR_DATA: Record<string, { week: string; score: number }[]> = {
  Maths: WEEKLY_DATA.map((d) => ({ week: d.week, score: d.Maths })),
  Science: WEEKLY_DATA.map((d) => ({ week: d.week, score: d.Science })),
  English: WEEKLY_DATA.map((d) => ({ week: d.week, score: d.English })),
  "Social Studies": WEEKLY_DATA.map((d) => ({
    week: d.week,
    score: d["Social Studies"],
  })),
  Geography: WEEKLY_DATA.map((d) => ({ week: d.week, score: d.Geography })),
  Hindi: WEEKLY_DATA.map((d) => ({ week: d.week, score: d.Hindi })),
  Commerce: WEEKLY_DATA.map((d) => ({
    week: d.week,
    score: Math.round(d.Maths * 0.9),
  })),
  IT: WEEKLY_DATA.map((d) => ({
    week: d.week,
    score: Math.round(d.English * 0.95),
  })),
  "Computer Science": WEEKLY_DATA.map((d) => ({
    week: d.week,
    score: Math.round(d.English * 0.93),
  })),
};

const SUBJECT_META = [
  {
    subject: "Maths",
    icon: "📐",
    color: "#7c3aed",
    bar: "#7c3aed",
    improvement: "+15%",
  },
  {
    subject: "Science",
    icon: "🔬",
    color: "#a855f7",
    bar: "#a855f7",
    improvement: "-3%",
  },
  {
    subject: "English",
    icon: "📖",
    color: "#c084fc",
    bar: "#c084fc",
    improvement: "+5%",
  },
  {
    subject: "Social Studies",
    icon: "🌍",
    color: "#6d28d9",
    bar: "#6d28d9",
    improvement: "+8%",
  },
  {
    subject: "Geography",
    icon: "🗺️",
    color: "#8b5cf6",
    bar: "#8b5cf6",
    improvement: "+10%",
  },
  {
    subject: "Hindi",
    icon: "🗣️",
    color: "#9333ea",
    bar: "#9333ea",
    improvement: "+6%",
  },
  {
    subject: "Commerce",
    icon: "📊",
    color: "#7e22ce",
    bar: "#7e22ce",
    improvement: "+4%",
  },
  {
    subject: "IT",
    icon: "🖥️",
    color: "#a21caf",
    bar: "#a21caf",
    improvement: "+12%",
  },
  {
    subject: "Computer Science",
    icon: "💻",
    color: "#86198f",
    bar: "#86198f",
    improvement: "+9%",
  },
];

// Calendar dates: April 2026 (current month)
const CALENDAR_DAYS = Array.from({ length: 28 }, (_, i) => {
  const d = i + 1;
  const dateStr = `2026-04-${String(d).padStart(2, "0")}`;
  const dayOfWeek = new Date(dateStr).getDay(); // 0=Sun
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const today = "2026-04-12";
  const isToday = dateStr === today;
  const status: "present" | "absent" | "late" | "weekend" | "future" = isWeekend
    ? "weekend"
    : dateStr > today
      ? "future"
      : "absent";
  return { date: d, dateStr, isToday, status };
});

const ATTENDANCE_RATE = 85;
const PIE_DATA = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 15 },
];
const PIE_COLORS = ["#7c3aed", "#c4b5fd"];

const TABS = ["Overview", "By Subject", "Attendance"] as const;
type Tab = (typeof TABS)[number];

const INSIGHTS = [
  { icon: "📈", text: "Maths improved by 15% this month — Keep it up!" },
  { icon: "🔬", text: "Science needs attention — only 68% this week" },
  { icon: "💻", text: "Computer Science is up 9% — great progress in IT!" },
];

// ── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  suffix = "%",
}: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(ease * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// ── Circular Progress Ring ─────────────────────────────────────────────────
function CircleRing({
  pct,
  color,
  size = 120,
}: { pct: number; color: string; size?: number }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - (pct / 100) * circumference);
    }, 300);
    return () => clearTimeout(timer);
  }, [pct, circumference]);

  return (
    <svg
      width={size}
      height={size}
      className="rotate-[-90deg]"
      role="img"
      aria-label={`${pct}% progress`}
    >
      <title>{pct}% progress</title>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(124,58,237,0.1)"
        strokeWidth={10}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{
          transition: "stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={20}
        fontWeight={700}
        fill={color}
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "50% 50%",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        {pct}%
      </text>
    </svg>
  );
}

// ── Tooltip styles ─────────────────────────────────────────────────────────
const TOOLTIP_STYLE = {
  background: "rgba(255,255,255,0.92)",
  border: "1px solid rgba(124,58,237,0.18)",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
  fontSize: 13,
};

// ── Overview Tab ───────────────────────────────────────────────────────────
function OverviewTab() {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="space-y-6"
    >
      {/* Score hero card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="md:col-span-1 glass rounded-2xl p-6 flex flex-col items-center justify-center gap-2 card-hover"
          data-ocid="overview-score-card"
        >
          <p className="text-muted-foreground font-body text-sm">
            Overall Score
          </p>
          <p
            className="font-display text-5xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg,#7c3aed,#c084fc)",
            }}
          >
            <AnimatedCounter value={82} />
          </p>
          <span className="text-xs font-body text-muted-foreground uppercase tracking-widest">
            All Subjects
          </span>
        </motion.div>

        {/* Trend cards */}
        {[
          {
            label: "Best Subject",
            value: "Maths",
            sub: "90% this week",
            icon: "🏆",
            delay: 0.1,
          },
          {
            label: "Most Improved",
            value: "Science",
            sub: "+15% vs last month",
            icon: "📈",
            delay: 0.15,
          },
          {
            label: "Study Streak",
            value: "7 Days",
            sub: "Keep it going! 🔥",
            icon: "🔥",
            delay: 0.2,
          },
        ].map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay }}
            className="glass rounded-2xl p-5 flex flex-col gap-2 card-hover"
            data-ocid={`trend-card-${card.label.toLowerCase().replace(/ /g, "-")}`}
          >
            <span className="text-2xl">{card.icon}</span>
            <p className="text-muted-foreground font-body text-xs">
              {card.label}
            </p>
            <p className="font-display text-xl font-bold text-foreground">
              {card.value}
            </p>
            <p className="text-xs text-muted-foreground font-body">
              {card.sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Line chart */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glass rounded-2xl p-6"
        data-ocid="performance-chart"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">
          Performance Over 8 Weeks
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={WEEKLY_DATA}
            margin={{ top: 10, right: 16, bottom: 0, left: -16 }}
          >
            <defs>
              <linearGradient id="lineMaths" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(124,58,237,0.07)"
            />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[55, 100]}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(v) => (
                <span style={{ fontSize: 12, color: "#6b7280" }}>{v}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="Maths"
              stroke="#7c3aed"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#7c3aed" }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
              animationDuration={1200}
            />
            <Line
              type="monotone"
              dataKey="Science"
              stroke="#a855f7"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#a855f7" }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
              animationDuration={1400}
            />
            <Line
              type="monotone"
              dataKey="English"
              stroke="#c084fc"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#c084fc" }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
              animationDuration={1600}
            />
            <Line
              type="monotone"
              dataKey="Social Studies"
              stroke="#6d28d9"
              strokeWidth={2}
              dot={{ r: 3, fill: "#6d28d9" }}
              activeDot={{ r: 5 }}
              isAnimationActive={true}
              animationDuration={1700}
            />
            <Line
              type="monotone"
              dataKey="Geography"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 3, fill: "#8b5cf6" }}
              activeDot={{ r: 5 }}
              isAnimationActive={true}
              animationDuration={1800}
            />
            <Line
              type="monotone"
              dataKey="Hindi"
              stroke="#9333ea"
              strokeWidth={2}
              dot={{ r: 3, fill: "#9333ea" }}
              activeDot={{ r: 5 }}
              isAnimationActive={true}
              animationDuration={1900}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}

// ── By Subject Tab ─────────────────────────────────────────────────────────
function BySubjectTab() {
  return (
    <motion.div
      key="by-subject"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {SUBJECT_META.map((meta, idx) => {
        const barData = SUBJECT_BAR_DATA[meta.subject] ?? [];
        const isPositive = meta.improvement.startsWith("+");
        return (
          <motion.div
            key={meta.subject}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 card-hover"
            data-ocid={`subject-card-${meta.subject.toLowerCase()}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{meta.icon}</span>
                <span className="font-display font-bold text-foreground">
                  {meta.subject}
                </span>
              </div>
              <span
                className={`text-xs font-body font-semibold px-2 py-0.5 rounded-full ${isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
              >
                {meta.improvement} vs last month
              </span>
            </div>

            {/* Circular ring */}
            <div className="flex justify-center py-2">
              <CircleRing
                pct={
                  barData.length > 0
                    ? (barData[barData.length - 1]?.score ?? 80)
                    : 80
                }
                color={meta.color}
                size={120}
              />
            </div>

            {/* Bar chart */}
            <div>
              <p className="text-xs text-muted-foreground font-body mb-2">
                Last 8 weeks
              </p>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart
                  data={barData}
                  margin={{ top: 0, right: 0, bottom: 0, left: -24 }}
                >
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[50, 100]}
                    tick={false}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(v) => [`${v}%`, "Score"]}
                  />
                  <Bar
                    dataKey="score"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={18}
                    isAnimationActive={true}
                    animationDuration={1200}
                  >
                    {barData.map((_, i) => (
                      <Cell
                        key={`${meta.subject}-bar-${i}`}
                        fill={meta.bar}
                        fillOpacity={0.5 + (i / barData.length) * 0.5}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Score info */}
            <div className="flex items-center justify-between pt-1 border-t border-border/40">
              <span className="text-xs text-muted-foreground font-body">
                Weekly progress
              </span>
              <span
                className="text-xs font-display font-semibold"
                style={{ color: meta.color }}
              >
                {barData.length > 0
                  ? (barData[barData.length - 1]?.score ?? 0)
                  : 0}
                % score
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ── Attendance Tab ─────────────────────────────────────────────────────────
function AttendanceTab() {
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <motion.div
      key="attendance"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="space-y-6"
    >
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance rate hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-3 card-hover"
          data-ocid="attendance-rate-card"
        >
          <p className="text-muted-foreground font-body text-sm">
            Monthly Attendance Rate
          </p>
          <p
            className="font-display text-6xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg,#7c3aed,#c084fc)",
            }}
          >
            <AnimatedCounter value={ATTENDANCE_RATE} />
          </p>
          <div className="flex gap-4 text-xs font-body text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Present: 17 days
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
              Absent: 3 days
            </span>
          </div>
        </motion.div>

        {/* Pie chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6"
          data-ocid="attendance-pie-chart"
        >
          <h3 className="font-display font-semibold text-foreground mb-2">
            Attendance Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={PIE_DATA}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1200}
              >
                {PIE_DATA.map((entry, i) => (
                  <Cell key={`pie-${entry.name}`} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                formatter={(v) => [`${v}%`, ""]}
              />
              <Legend
                iconType="circle"
                iconSize={9}
                formatter={(v) => (
                  <span style={{ fontSize: 12, color: "#6b7280" }}>{v}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Calendar grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass rounded-2xl p-6"
        data-ocid="attendance-calendar"
      >
        <h3 className="font-display font-semibold text-foreground mb-4">
          April 2026 Calendar
        </h3>

        {/* Day labels */}
        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {dayLabels.map((d) => (
            <div
              key={d}
              className="text-center text-xs text-muted-foreground font-body font-medium"
            >
              {d}
            </div>
          ))}
        </div>

        {/* April 1 is Wednesday (index 3), so prefix 3 empty cells */}
        <div className="grid grid-cols-7 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={`empty-${i}`} />
          ))}
          {CALENDAR_DAYS.map((day, calIdx) => {
            const bgMap = {
              present: "bg-green-100 border-green-300 text-green-800",
              absent: "bg-red-100 border-red-300 text-red-700",
              late: "bg-yellow-100 border-yellow-300 text-yellow-800",
              weekend: "bg-muted/50 border-border text-muted-foreground",
              future:
                "bg-muted/30 border-dashed border-border text-muted-foreground opacity-40",
            };
            return (
              <motion.div
                key={day.dateStr}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.02 * calIdx }}
                className={`relative aspect-square flex items-center justify-center text-xs font-body font-semibold rounded-lg border
                  ${bgMap[day.status]}
                  ${day.isToday ? "ring-2 ring-purple-500 ring-offset-1" : ""}
                `}
              >
                {day.date}
                {day.isToday && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-purple-500" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs font-body">
          {[
            { color: "bg-green-100 border-green-300", label: "Present" },
            { color: "bg-red-100 border-red-300", label: "Absent" },
            { color: "bg-yellow-100 border-yellow-300", label: "Late" },
            { color: "bg-muted/50 border-border", label: "Weekend" },
          ].map((l) => (
            <span key={l.label} className="flex items-center gap-1.5">
              <span
                className={`w-3 h-3 rounded border ${l.color} inline-block`}
              />
              <span className="text-muted-foreground">{l.label}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Insights Panel ─────────────────────────────────────────────────────────
function InsightsPanel() {
  return (
    <div className="space-y-3" data-ocid="insights-panel">
      <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
        <span>💡</span> Key Insights
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {INSIGHTS.map((ins, i) => (
          <motion.div
            key={ins.text}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, ease: "easeOut" }}
            className="glass-purple rounded-xl p-4 flex items-start gap-3 hover-glow transition-smooth"
            data-ocid={`insight-card-${i}`}
          >
            <span className="text-xl shrink-0">{ins.icon}</span>
            <p className="text-sm font-body text-foreground/80 leading-snug">
              {ins.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Loading skeleton ───────────────────────────────────────────────────────
function ProgressSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <Skeleton className="h-10 w-64 rounded-xl" />
      <Skeleton className="h-5 w-48 rounded" />
      <div className="flex gap-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-9 w-28 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="h-72 rounded-2xl" />
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-16 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ProgressPage() {
  const { isLoading } = useStudentData();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  if (isLoading) return <ProgressSkeleton />;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1
          className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(135deg,#7c3aed 0%,#a855f7 60%,#c084fc 100%)",
          }}
        >
          📈 Your Progress
        </h1>
        <p className="text-muted-foreground font-body mt-1 text-sm">
          Track your learning journey across all subjects •{" "}
          <span className="text-primary font-semibold">
            Where learning is fun
          </span>
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 p-1 glass rounded-2xl w-fit"
        data-ocid="progress-tab-nav"
      >
        {TABS.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-5 py-2 rounded-xl text-sm font-body font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              ${activeTab === tab ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            data-ocid={`tab-${tab.toLowerCase().replace(/ /g, "-")}`}
          >
            {activeTab === tab && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-xl grad-purple-deep"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </motion.div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {activeTab === "Overview" && <OverviewTab key="overview" />}
        {activeTab === "By Subject" && <BySubjectTab key="by-subject" />}
        {activeTab === "Attendance" && <AttendanceTab key="attendance" />}
      </AnimatePresence>

      {/* Insights panel always visible */}
      <InsightsPanel />
    </div>
  );
}
