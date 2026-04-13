import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useActor } from "@caffeineai/core-infrastructure";
import { ChevronDown, ChevronUp, Search, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createActor } from "../../backend";
import type { StudentProfile } from "../../backend.d";

const ALL_CLASSES = [
  "All",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const CLASS_COLOR: Record<string, string> = {
  "Class 6": "bg-blue-50 text-blue-700 border-blue-200",
  "Class 7": "bg-green-50 text-green-700 border-green-200",
  "Class 8": "bg-orange-50 text-orange-700 border-orange-200",
  "Class 9": "bg-violet-50 text-violet-700 border-violet-200",
  "Class 10": "bg-rose-50 text-rose-700 border-rose-200",
};

export default function StudentsPage() {
  const { actor, isFetching } = useActor(createActor);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (!actor || isFetching) return;
    setLoading(true);
    actor.getStudentList().then((res) => {
      if (res.__kind__ === "ok") setStudents(res.ok);
      setLoading(false);
    });
  }, [actor, isFetching]);

  const filtered = students.filter((s) => {
    const matchClass = filterClass === "All" || s.className === filterClass;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.rollNumber.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q);
    return matchClass && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
            <Users className="text-primary" size={28} />
            Student Registry
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            View and search all registered students
          </p>
        </div>
        <div className="glass rounded-2xl px-5 py-3 text-center border border-purple-100/60">
          <p className="font-display font-bold text-2xl text-primary">
            {students.length}
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Total Students
          </p>
        </div>
      </motion.div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search by name, roll number, or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 rounded-xl border-input bg-card"
            data-ocid="students-search-input"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CLASSES.map((cls) => (
            <button
              key={cls}
              type="button"
              onClick={() => setFilterClass(cls)}
              data-ocid={`students-filter-${cls.replace(" ", "-")}`}
              className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${
                filterClass === cls
                  ? "grad-purple text-white border-primary shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:text-primary hover:border-primary/50"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Student List */}
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 glass rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass rounded-2xl p-12 text-center"
          data-ocid="students-empty-state"
        >
          <div className="text-5xl mb-3">🔍</div>
          <p className="font-display font-semibold text-foreground">
            {students.length === 0
              ? "No students registered yet"
              : "No students match your search"}
          </p>
          <p className="text-sm text-muted-foreground font-body mt-1">
            {students.length === 0
              ? "Students will appear here after they register"
              : "Try adjusting your search or filter"}
          </p>
        </motion.div>
      ) : (
        <div className="space-y-2">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_140px_160px_100px] gap-4 px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <span>Student</span>
            <span>Roll Number</span>
            <span>Email</span>
            <span>Class</span>
          </div>

          {filtered.map((student, i) => {
            const principalStr = String(student.principal);
            const isOpen = expandedId === principalStr;
            const initials = student.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .toUpperCase()
              .slice(0, 2);

            return (
              <motion.div
                key={principalStr}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, type: "spring" }}
                className="glass rounded-2xl border border-purple-100/50 overflow-hidden"
                data-ocid={`student-row-${i}`}
              >
                <button
                  type="button"
                  className="w-full px-5 py-3.5 flex items-center gap-4 hover:bg-purple-50/30 transition-smooth text-left"
                  onClick={() => setExpandedId(isOpen ? null : principalStr)}
                  data-ocid={`student-expand-${i}`}
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full grad-purple flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {initials}
                  </div>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {student.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-body sm:hidden">
                      {student.rollNumber} · {student.className}
                    </p>
                  </div>

                  {/* Roll (desktop) */}
                  <span className="hidden sm:block text-sm text-foreground font-mono w-36 shrink-0">
                    {student.rollNumber}
                  </span>

                  {/* Email (desktop) */}
                  <span className="hidden sm:block text-xs text-muted-foreground w-40 shrink-0 truncate">
                    {student.email}
                  </span>

                  {/* Class badge */}
                  <Badge
                    className={`text-xs shrink-0 ${CLASS_COLOR[student.className] ?? "bg-muted text-foreground border-border"}`}
                  >
                    {student.className}
                  </Badge>

                  {isOpen ? (
                    <ChevronUp
                      size={16}
                      className="text-muted-foreground shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="text-muted-foreground shrink-0"
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 border-t border-border/50 pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="glass-purple rounded-xl p-3">
                          <p className="text-xs text-muted-foreground font-body">
                            Full Name
                          </p>
                          <p className="font-semibold text-sm text-foreground mt-0.5">
                            {student.name}
                          </p>
                        </div>
                        <div className="glass-purple rounded-xl p-3">
                          <p className="text-xs text-muted-foreground font-body">
                            Email
                          </p>
                          <p className="font-semibold text-sm text-foreground mt-0.5 break-all">
                            {student.email || "—"}
                          </p>
                        </div>
                        <div className="glass-purple rounded-xl p-3">
                          <p className="text-xs text-muted-foreground font-body">
                            Roll Number
                          </p>
                          <p className="font-semibold text-sm text-foreground mt-0.5 font-mono">
                            {student.rollNumber}
                          </p>
                        </div>
                        <div className="glass-purple rounded-xl p-3 sm:col-span-3">
                          <p className="text-xs text-muted-foreground font-body">
                            Principal ID
                          </p>
                          <p className="font-mono text-xs text-foreground mt-0.5 break-all">
                            {principalStr}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
