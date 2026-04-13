import { Badge } from "@/components/ui/badge";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  GraduationCap,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";

const TEACHER_SUBJECTS: Record<string, string[]> = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"],
};

const SUBJECT_COLORS: Record<string, string> = {
  English: "bg-blue-100 text-blue-700 border-blue-200",
  Science: "bg-green-100 text-green-700 border-green-200",
  "Social Studies": "bg-orange-100 text-orange-700 border-orange-200",
  Maths: "bg-purple-100 text-purple-700 border-purple-200",
  Geography: "bg-teal-100 text-teal-700 border-teal-200",
  Commerce: "bg-yellow-100 text-yellow-700 border-yellow-200",
  IT: "bg-rose-100 text-rose-700 border-rose-200",
  "Computer Science": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Hindi: "bg-pink-100 text-pink-700 border-pink-200",
};

interface StatCard {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  to: string;
  emoji: string;
  gradient: string;
  stat: string;
}

const ACTION_CARDS: StatCard[] = [
  {
    id: "homework",
    icon: BookOpen,
    label: "Create Homework",
    description: "Assign new tasks and view submissions from students",
    to: "/teacher/homework",
    emoji: "📝",
    gradient: "from-violet-500 to-purple-600",
    stat: "Manage Assignments",
  },
  {
    id: "timetable",
    icon: Calendar,
    label: "Manage Timetable",
    description: "Update your weekly class schedule for all classes",
    to: "/teacher/timetable",
    emoji: "🗓️",
    gradient: "from-purple-500 to-indigo-600",
    stat: "Mon – Sat",
  },
  {
    id: "students",
    icon: Users,
    label: "View Students",
    description: "Browse all registered students, filter by class",
    to: "/teacher/students",
    emoji: "🎓",
    gradient: "from-fuchsia-500 to-purple-600",
    stat: "Full Registry",
  },
  {
    id: "announcements",
    icon: Bell,
    label: "Post Announcement",
    description: "Send important notices to one or more classes",
    to: "/teacher/announcements",
    emoji: "📢",
    gradient: "from-pink-500 to-purple-600",
    stat: "Broadcast Now",
  },
];

export default function TeacherDashboardPage() {
  const { teacherProfile, isLoading } = useAuth();
  const { actor } = useActor(createActor);
  const [studentCount, setStudentCount] = useState<number | null>(null);

  useEffect(() => {
    if (!actor) return;
    actor.getStudentList().then((res) => {
      if (res.__kind__ === "ok") setStudentCount(res.ok.length);
    });
  }, [actor]);

  const name = teacherProfile?.name ?? "Teacher";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const subjects = teacherProfile?.subjects ?? TEACHER_SUBJECTS[name] ?? [];

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="h-40 glass rounded-3xl animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-48 glass rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* ── Hero Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="relative overflow-hidden rounded-3xl grad-purple-deep text-white px-6 py-8 sm:px-10"
        data-ocid="teacher-dashboard-header"
      >
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg shrink-0"
          >
            {initials}
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={16} className="text-white/70" />
              <span className="text-white/70 text-sm font-body">
                Teacher Dashboard
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Welcome back, {name}! 👋
            </h1>
            <p className="text-white/75 font-body text-sm mt-1">
              {teacherProfile?.bio ?? "Ready to inspire young minds today?"}
            </p>

            {/* Subject badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {subjects.map((sub) => (
                <motion.span
                  key={sub}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.35 + subjects.indexOf(sub) * 0.07 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 border border-white/30 text-white backdrop-blur-sm"
                >
                  {sub}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Stats chip */}
          {studentCount !== null && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="shrink-0 glass-dark rounded-2xl px-5 py-4 text-center border border-white/20"
            >
              <p className="font-display text-3xl font-bold text-white">
                {studentCount}
              </p>
              <p className="text-white/70 text-xs font-body mt-0.5">
                Total Students
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ── Quick Stats Row ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Subjects", value: subjects.length, icon: "📚" },
          { label: "Classes", value: "6–10", icon: "🏫" },
          { label: "Today's Sessions", value: "3", icon: "⏰" },
          { label: "Pending Reviews", value: "5", icon: "✏️" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.07, type: "spring" }}
            className="glass rounded-2xl p-4 text-center border border-purple-100/60"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <p className="font-display font-bold text-xl text-foreground">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground font-body">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── Action Cards ── */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2"
        >
          <span>⚡</span> Quick Actions
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTION_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35 + i * 0.09,
                type: "spring",
                stiffness: 70,
              }}
              whileHover={{
                scale: 1.03,
                rotateX: 1.5,
                rotateY: 1,
                boxShadow: "0 20px 60px rgba(124,58,237,0.25)",
              }}
              style={{ transformStyle: "preserve-3d" }}
              data-ocid={`teacher-action-${card.id}`}
            >
              <Link to={card.to} className="block h-full">
                <div className="glass rounded-2xl border border-purple-100/60 overflow-hidden h-full flex flex-col group transition-smooth cursor-pointer">
                  {/* Card color bar */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${card.gradient}`}
                  />
                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md`}
                    >
                      <card.icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-bold text-foreground text-base leading-tight">
                        {card.label}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-1 leading-snug">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
                      <Badge className="bg-purple-50 text-primary border-purple-200 text-xs">
                        {card.stat}
                      </Badge>
                      <ChevronRight
                        size={16}
                        className="text-primary transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Subjects at a Glance ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-2xl p-6 border border-purple-100/60"
        data-ocid="teacher-subjects-section"
      >
        <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-primary" />
          Your Subjects
        </h2>
        <div className="flex flex-wrap gap-3">
          {subjects.map((sub, i) => (
            <motion.div
              key={sub}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.75 + i * 0.07, type: "spring" }}
              whileHover={{ scale: 1.06 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-smooth cursor-default ${SUBJECT_COLORS[sub] ?? "bg-muted text-foreground border-border"}`}
            >
              <span className="w-2 h-2 rounded-full bg-current opacity-60" />
              {sub}
            </motion.div>
          ))}
        </div>
        {teacherProfile?.contactPhone && (
          <p className="mt-4 text-sm text-muted-foreground font-body flex items-center gap-2">
            <span>📞</span>
            Contact:{" "}
            <span className="text-foreground font-medium">
              {teacherProfile.contactPhone}
            </span>
          </p>
        )}
      </motion.div>
    </div>
  );
}
