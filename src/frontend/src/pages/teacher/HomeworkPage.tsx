import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Loader2,
  Plus,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../../backend";
import type { HomeworkAssignment, HomeworkSubmission } from "../../backend.d";
import { useAuth } from "../../context/AuthContext";

const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];

const TEACHER_SUBJECTS: Record<string, string[]> = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"],
};

const STATUS_STYLE: Record<string, string> = {
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
  graded: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

interface FormState {
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  assignedClasses: string[];
}

const INITIAL_FORM: FormState = {
  subject: "",
  title: "",
  description: "",
  dueDate: "",
  assignedClasses: [],
};

export default function HomeworkPage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [assignments, setAssignments] = useState<HomeworkAssignment[]>([]);
  const [loadingHW, setLoadingHW] = useState(false);
  const [expandedId, setExpandedId] = useState<bigint | null>(null);
  const [submissions, setSubmissions] = useState<
    Record<string, HomeworkSubmission[]>
  >({});

  const name = teacherProfile?.name ?? "";
  const mySubjects = teacherProfile?.subjects ?? TEACHER_SUBJECTS[name] ?? [];

  const fetchHomework = useCallback(async () => {
    if (!actor) return;
    setLoadingHW(true);
    try {
      const all: HomeworkAssignment[] = [];
      for (const cls of ALL_CLASSES) {
        const hw = await actor.getHomeworkByClass(cls);
        for (const a of hw) {
          if (!all.find((x) => x.id === a.id)) all.push(a);
        }
      }
      all.sort((a, b) => Number(b.createdAt - a.createdAt));
      setAssignments(all);
    } finally {
      setLoadingHW(false);
    }
  }, [actor]);

  useEffect(() => {
    if (actor && !isFetching) fetchHomework();
  }, [actor, isFetching, fetchHomework]);

  const toggleClass = (cls: string) => {
    setForm((prev) => ({
      ...prev,
      assignedClasses: prev.assignedClasses.includes(cls)
        ? prev.assignedClasses.filter((c) => c !== cls)
        : [...prev.assignedClasses, cls],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return toast.error("Not connected to backend");
    if (
      !form.subject ||
      !form.title ||
      !form.dueDate ||
      form.assignedClasses.length === 0
    ) {
      return toast.error(
        "Please fill in all required fields and select at least one class",
      );
    }
    setSubmitting(true);
    try {
      const result = await actor.postHomework(
        form.subject,
        form.title,
        form.description,
        form.dueDate,
        form.assignedClasses,
      );
      if (result.__kind__ === "ok") {
        toast.success("Homework assigned successfully! 🎉");
        setForm(INITIAL_FORM);
        setShowForm(false);
        fetchHomework();
      } else {
        toast.error(result.err);
      }
    } catch {
      toast.error("Failed to post homework. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const loadSubmissions = async (hwId: bigint) => {
    const key = String(hwId);
    if (submissions[key]) return;
    if (!actor) return;
    const res = await actor.getSubmissions(hwId);
    if (res.__kind__ === "ok") {
      setSubmissions((prev) => ({ ...prev, [key]: res.ok }));
    }
  };

  const toggleExpand = (id: bigint) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    if (newId !== null) loadSubmissions(newId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="text-primary" size={28} />
            Homework Manager
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Create assignments and track student submissions
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="grad-purple text-white border-0 shadow-md flex items-center gap-2"
          data-ocid="homework-create-btn"
        >
          <Plus size={16} />
          {showForm ? "Cancel" : "New Assignment"}
        </Button>
      </motion.div>

      {/* Create Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-purple-100/60 p-6 space-y-5"
              data-ocid="homework-form"
            >
              <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                📝 New Assignment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Subject */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold text-foreground">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <select
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    className="w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
                    data-ocid="homework-subject-select"
                  >
                    <option value="">Select subject…</option>
                    {mySubjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Due Date */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold text-foreground">
                    Due Date <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="date"
                    value={form.dueDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, dueDate: e.target.value }))
                    }
                    className="rounded-xl border-input bg-card"
                    data-ocid="homework-due-date"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-foreground">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  placeholder="e.g., Complete Chapter 5 exercises"
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  className="rounded-xl border-input bg-card"
                  data-ocid="homework-title-input"
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-foreground">
                  Instructions
                </Label>
                <Textarea
                  placeholder="Detailed instructions for students…"
                  rows={3}
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                  className="rounded-xl border-input bg-card resize-none"
                  data-ocid="homework-description-input"
                />
              </div>

              {/* Assigned Classes */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">
                  Assign to Classes <span className="text-destructive">*</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {ALL_CLASSES.map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => toggleClass(cls)}
                      data-ocid={`class-toggle-${cls.replace(" ", "-")}`}
                      className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${
                        form.assignedClasses.includes(cls)
                          ? "grad-purple text-white border-primary shadow-sm"
                          : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full grad-purple text-white border-0 shadow-md h-11 font-semibold"
                data-ocid="homework-submit-btn"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" /> Posting…
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} className="mr-2" /> Post Assignment
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Homework List */}
      <div>
        <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          📋 All Assignments
        </h2>

        {loadingHW ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 glass rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : assignments.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-10 text-center"
            data-ocid="homework-empty-state"
          >
            <div className="text-5xl mb-3">📚</div>
            <p className="font-display font-semibold text-foreground">
              No assignments yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Create your first assignment using the button above
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {assignments.map((hw, i) => {
              const isOpen = expandedId === hw.id;
              const subs = submissions[String(hw.id)] ?? [];
              return (
                <motion.div
                  key={String(hw.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  className="glass rounded-2xl border border-purple-100/50 overflow-hidden"
                  data-ocid={`hw-row-${hw.id}`}
                >
                  <button
                    type="button"
                    className="w-full p-4 flex items-center gap-4 text-left hover:bg-purple-50/40 transition-smooth"
                    onClick={() => toggleExpand(hw.id)}
                    data-ocid={`hw-expand-${hw.id}`}
                  >
                    <div className="w-10 h-10 rounded-xl grad-purple flex items-center justify-center shrink-0">
                      <BookOpen size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-foreground truncate">
                        {hw.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-0.5">
                        {hw.subject} · Due {hw.dueDate} ·{" "}
                        {hw.assignedClasses.join(", ")}
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp
                        size={18}
                        className="text-muted-foreground shrink-0"
                      />
                    ) : (
                      <ChevronDown
                        size={18}
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-border/50 pt-3 space-y-3">
                          {hw.description && (
                            <p className="text-sm text-foreground font-body bg-purple-50/40 rounded-xl p-3">
                              {hw.description}
                            </p>
                          )}
                          <h4 className="font-display font-semibold text-sm text-foreground">
                            Submissions ({subs.length})
                          </h4>
                          {subs.length === 0 ? (
                            <p className="text-sm text-muted-foreground font-body">
                              No submissions yet
                            </p>
                          ) : (
                            <div className="space-y-2">
                              {subs.map((sub) => (
                                <div
                                  key={String(sub.id)}
                                  className="flex items-center gap-3 p-3 glass-purple rounded-xl"
                                  data-ocid={`submission-row-${sub.id}`}
                                >
                                  <div className="w-8 h-8 rounded-full grad-purple flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {String(sub.studentPrincipal)
                                      .slice(0, 2)
                                      .toUpperCase()}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-foreground truncate">
                                      {String(sub.studentPrincipal).slice(
                                        0,
                                        20,
                                      )}
                                      …
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate">
                                      {sub.submittedContent.slice(0, 60)}
                                      {sub.submittedContent.length > 60
                                        ? "…"
                                        : ""}
                                    </p>
                                  </div>
                                  <Badge
                                    className={`text-xs shrink-0 ${STATUS_STYLE[sub.status] ?? "bg-muted text-foreground"}`}
                                  >
                                    {sub.status}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          )}
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
    </div>
  );
}
