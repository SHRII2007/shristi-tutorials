import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { Bell, CheckCircle, Loader2, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../../backend";
import type { Announcement } from "../../backend.d";
import { useAuth } from "../../context/AuthContext";

const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
const MAX_BODY = 500;

const CLASS_COLOR: Record<string, string> = {
  "Class 6": "bg-blue-50 text-blue-700 border-blue-200",
  "Class 7": "bg-green-50 text-green-700 border-green-200",
  "Class 8": "bg-orange-50 text-orange-700 border-orange-200",
  "Class 9": "bg-violet-50 text-violet-700 border-violet-200",
  "Class 10": "bg-rose-50 text-rose-700 border-rose-200",
};

interface FormState {
  title: string;
  body: string;
  targetClasses: string[];
}

const BLANK_FORM: FormState = { title: "", body: "", targetClasses: [] };

function formatDate(ns: bigint): string {
  const ms = Number(ns / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AnnouncementsPage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(BLANK_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAll = useCallback(async () => {
    if (!actor) return;
    setLoading(true);
    try {
      const all: Announcement[] = [];
      for (const cls of ALL_CLASSES) {
        const rows = await actor.getAnnouncements(cls);
        for (const a of rows) {
          if (!all.find((x) => x.id === a.id)) all.push(a);
        }
      }
      all.sort((a, b) => Number(b.publishedAt - a.publishedAt));
      setAnnouncements(all);
    } finally {
      setLoading(false);
    }
  }, [actor]);

  useEffect(() => {
    if (actor && !isFetching) fetchAll();
  }, [actor, isFetching, fetchAll]);

  const toggleClass = (cls: string) => {
    setForm((prev) => ({
      ...prev,
      targetClasses: prev.targetClasses.includes(cls)
        ? prev.targetClasses.filter((c) => c !== cls)
        : [...prev.targetClasses, cls],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return toast.error("Not connected to backend");
    if (!form.title.trim()) return toast.error("Title is required");
    if (!form.body.trim()) return toast.error("Message body is required");
    if (form.targetClasses.length === 0)
      return toast.error("Select at least one class");
    setSubmitting(true);
    try {
      const res = await actor.postAnnouncement(
        form.title.trim(),
        form.body.trim(),
        form.targetClasses,
      );
      if (res.__kind__ === "ok") {
        toast.success("Announcement posted! 📢");
        setForm(BLANK_FORM);
        setShowForm(false);
        fetchAll();
      } else {
        toast.error(res.err);
      }
    } catch {
      toast.error("Failed to post announcement. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const name = teacherProfile?.name ?? "Teacher";

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
            <Bell className="text-primary" size={28} />
            Announcements
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Broadcast important notices to your students
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="grad-purple text-white border-0 shadow-md flex items-center gap-2"
          data-ocid="announcement-create-btn"
        >
          <Plus size={16} />
          {showForm ? "Cancel" : "New Announcement"}
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
              className="glass rounded-2xl border border-purple-100/60 p-6 space-y-5 overflow-hidden"
              data-ocid="announcement-form"
            >
              <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                📢 New Announcement
              </h2>
              <p className="text-xs text-muted-foreground font-body -mt-3">
                From:{" "}
                <span className="text-foreground font-medium">{name}</span>
              </p>

              {/* Title */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-foreground">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  placeholder="e.g., Important: Unit Test Schedule Change"
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  maxLength={120}
                  className="rounded-xl border-input bg-card"
                  data-ocid="announcement-title-input"
                />
              </div>

              {/* Body */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-semibold text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <span
                    className={`text-xs font-mono ${form.body.length > MAX_BODY * 0.9 ? "text-destructive" : "text-muted-foreground"}`}
                  >
                    {form.body.length}/{MAX_BODY}
                  </span>
                </div>
                <Textarea
                  placeholder="Write your announcement here…"
                  rows={4}
                  value={form.body}
                  maxLength={MAX_BODY}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, body: e.target.value }))
                  }
                  className="rounded-xl border-input bg-card resize-none"
                  data-ocid="announcement-body-input"
                />
                {/* Char progress bar */}
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${form.body.length > MAX_BODY * 0.9 ? "bg-destructive" : "bg-primary"}`}
                    animate={{
                      width: `${(form.body.length / MAX_BODY) * 100}%`,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              {/* Target Classes */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">
                  Target Classes <span className="text-destructive">*</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {ALL_CLASSES.map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => toggleClass(cls)}
                      data-ocid={`ann-class-toggle-${cls.replace(" ", "-")}`}
                      className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${
                        form.targetClasses.includes(cls)
                          ? "grad-purple text-white border-primary shadow-sm"
                          : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((p) => ({
                        ...p,
                        targetClasses:
                          p.targetClasses.length === ALL_CLASSES.length
                            ? []
                            : [...ALL_CLASSES],
                      }))
                    }
                    data-ocid="ann-class-all"
                    className="px-3 py-1.5 rounded-xl text-sm font-semibold border bg-card border-dashed border-primary/50 text-primary hover:bg-purple-50 transition-smooth"
                  >
                    {form.targetClasses.length === ALL_CLASSES.length
                      ? "Clear All"
                      : "Select All"}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full grad-purple text-white border-0 shadow-md h-11 font-semibold"
                data-ocid="announcement-submit-btn"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" /> Posting…
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} className="mr-2" /> Post Announcement
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcements List */}
      <div>
        <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          📋 Past Announcements
        </h2>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 glass rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : announcements.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-12 text-center"
            data-ocid="announcements-empty-state"
          >
            <div className="text-5xl mb-3">📢</div>
            <p className="font-display font-semibold text-foreground">
              No announcements yet
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Post your first announcement to keep students informed
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {announcements.map((ann, i) => (
              <motion.div
                key={String(ann.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, type: "spring" }}
                className="glass rounded-2xl border border-purple-100/50 p-5 space-y-3"
                data-ocid={`announcement-row-${ann.id}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl grad-purple flex items-center justify-center shrink-0">
                    <Bell size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-foreground leading-tight">
                      {ann.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      {ann.publishedAt
                        ? formatDate(ann.publishedAt)
                        : "Just now"}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground font-body bg-purple-50/40 rounded-xl p-3 leading-relaxed">
                  {ann.body}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ann.targetClasses.map((cls) => (
                    <Badge
                      key={cls}
                      className={`text-xs ${CLASS_COLOR[cls] ?? "bg-muted text-foreground"}`}
                    >
                      {cls}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
