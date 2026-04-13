import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActor } from "@caffeineai/core-infrastructure";
import { Calendar, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../../backend";
import type { TimetableEntry } from "../../backend.d";
import { useAuth } from "../../context/AuthContext";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];

const TEACHER_SUBJECTS: Record<string, string[]> = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"],
};

const DAY_COLOR: Record<string, string> = {
  Monday: "bg-violet-100 text-violet-700",
  Tuesday: "bg-indigo-100 text-indigo-700",
  Wednesday: "bg-blue-100 text-blue-700",
  Thursday: "bg-teal-100 text-teal-700",
  Friday: "bg-emerald-100 text-emerald-700",
  Saturday: "bg-orange-100 text-orange-700",
};

interface NewEntry {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  subject: string;
  className: string;
}

const BLANK_ENTRY: NewEntry = {
  dayOfWeek: "Monday",
  startTime: "09:00",
  endTime: "10:00",
  subject: "",
  className: "Class 9",
};

export default function TimetablePage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [entries, setEntries] = useState<TimetableEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState<NewEntry>(BLANK_ENTRY);
  const [addSaving, setAddSaving] = useState(false);
  const [filterClass, setFilterClass] = useState("All");

  const name = teacherProfile?.name ?? "";
  const mySubjects = teacherProfile?.subjects ?? TEACHER_SUBJECTS[name] ?? [];

  const fetchAll = useCallback(async () => {
    if (!actor) return;
    setLoading(true);
    try {
      const all: TimetableEntry[] = [];
      for (const cls of ALL_CLASSES) {
        const rows = await actor.getTimetable(cls);
        for (const r of rows) {
          if (!all.find((x) => x.id === r.id)) all.push(r);
        }
      }
      setEntries(all);
    } finally {
      setLoading(false);
    }
  }, [actor]);

  useEffect(() => {
    if (actor && !isFetching) fetchAll();
  }, [actor, isFetching, fetchAll]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return toast.error("Not connected");
    if (!newEntry.subject) return toast.error("Please select a subject");
    setAddSaving(true);
    try {
      const entry: TimetableEntry = {
        id: BigInt(0),
        dayOfWeek: newEntry.dayOfWeek,
        startTime: newEntry.startTime,
        endTime: newEntry.endTime,
        subject: newEntry.subject,
        className: newEntry.className,
        teacherPrincipal: null as unknown as TimetableEntry["teacherPrincipal"],
      };
      const res = await actor.updateTimetable(entry);
      if (res.__kind__ === "ok") {
        toast.success("Timetable entry saved! 🗓️");
        setNewEntry(BLANK_ENTRY);
        setShowAddForm(false);
        fetchAll();
      } else {
        toast.error(res.err);
      }
    } catch {
      toast.error("Failed to save entry");
    } finally {
      setAddSaving(false);
    }
  };

  const handleSaveRow = async (entry: TimetableEntry) => {
    if (!actor) return;
    setSaving(String(entry.id));
    try {
      const res = await actor.updateTimetable(entry);
      if (res.__kind__ === "ok") {
        toast.success("Entry updated!");
      } else {
        toast.error(res.err);
      }
    } finally {
      setSaving(null);
    }
  };

  const handleDeleteRow = (id: bigint) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    toast("Entry removed from view (deleted locally)");
  };

  const filtered =
    filterClass === "All"
      ? entries
      : entries.filter((e) => e.className === filterClass);

  const grouped = DAYS.reduce(
    (acc, day) => {
      acc[day] = filtered.filter((e) => e.dayOfWeek === day);
      return acc;
    },
    {} as Record<string, TimetableEntry[]>,
  );

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
            <Calendar className="text-primary" size={28} />
            Timetable Manager
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Manage your weekly class schedule Monday–Saturday
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="grad-purple text-white border-0 shadow-md flex items-center gap-2"
          data-ocid="timetable-add-btn"
        >
          <Plus size={16} />
          {showAddForm ? "Cancel" : "Add Class"}
        </Button>
      </motion.div>

      {/* Add Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAdd}
            className="glass rounded-2xl border border-purple-100/60 p-6 space-y-4 overflow-hidden"
            data-ocid="timetable-form"
          >
            <h2 className="font-display font-bold text-lg text-foreground">
              🗓️ Add New Class
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Day</Label>
                <select
                  value={newEntry.dayOfWeek}
                  onChange={(e) =>
                    setNewEntry((p) => ({ ...p, dayOfWeek: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  data-ocid="timetable-day-select"
                >
                  {DAYS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Start Time</Label>
                <Input
                  type="time"
                  value={newEntry.startTime}
                  onChange={(e) =>
                    setNewEntry((p) => ({ ...p, startTime: e.target.value }))
                  }
                  className="rounded-xl border-input bg-card"
                  data-ocid="timetable-start-time"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">End Time</Label>
                <Input
                  type="time"
                  value={newEntry.endTime}
                  onChange={(e) =>
                    setNewEntry((p) => ({ ...p, endTime: e.target.value }))
                  }
                  className="rounded-xl border-input bg-card"
                  data-ocid="timetable-end-time"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Subject</Label>
                <select
                  value={newEntry.subject}
                  onChange={(e) =>
                    setNewEntry((p) => ({ ...p, subject: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  data-ocid="timetable-subject-select"
                >
                  <option value="">Subject…</option>
                  {mySubjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Class</Label>
                <select
                  value={newEntry.className}
                  onChange={(e) =>
                    setNewEntry((p) => ({ ...p, className: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  data-ocid="timetable-class-select"
                >
                  {ALL_CLASSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={addSaving}
              className="grad-purple text-white border-0 shadow-md"
              data-ocid="timetable-save-entry-btn"
            >
              {addSaving ? (
                <>
                  <Loader2 size={15} className="animate-spin mr-2" /> Saving…
                </>
              ) : (
                <>
                  <Save size={15} className="mr-2" /> Save Entry
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Class Filter */}
      <div className="flex flex-wrap gap-2">
        {["All", ...ALL_CLASSES].map((cls) => (
          <button
            key={cls}
            type="button"
            onClick={() => setFilterClass(cls)}
            data-ocid={`timetable-filter-${cls.replace(" ", "-")}`}
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

      {/* Timetable Grid */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 glass rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {DAYS.map((day, di) => {
            const dayEntries = grouped[day] ?? [];
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: di * 0.06 }}
                className="glass rounded-2xl border border-purple-100/50 overflow-hidden"
                data-ocid={`timetable-day-${day.toLowerCase()}`}
              >
                <div className="flex items-center gap-3 px-5 py-3 border-b border-border/50">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${DAY_COLOR[day] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {day}
                  </span>
                  <Badge className="bg-purple-50 text-primary border-purple-200 text-xs">
                    {dayEntries.length} class
                    {dayEntries.length !== 1 ? "es" : ""}
                  </Badge>
                </div>

                {dayEntries.length === 0 ? (
                  <p className="px-5 py-3 text-sm text-muted-foreground font-body italic">
                    No classes scheduled
                  </p>
                ) : (
                  <div className="divide-y divide-border/40">
                    {dayEntries.map((entry) => (
                      <motion.div
                        key={String(entry.id)}
                        layout
                        className="flex items-center gap-3 px-5 py-3 group hover:bg-purple-50/30 transition-smooth"
                        data-ocid={`timetable-entry-${entry.id}`}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">
                          {entry.startTime} – {entry.endTime}
                        </span>
                        <span className="font-semibold text-sm text-foreground flex-1 min-w-0 truncate">
                          {entry.subject}
                        </span>
                        <Badge className="bg-purple-50 text-primary border-purple-200 text-xs shrink-0">
                          {entry.className}
                        </Badge>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-smooth shrink-0">
                          <button
                            type="button"
                            onClick={() => handleSaveRow(entry)}
                            className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                            aria-label="Save"
                            data-ocid={`timetable-save-${entry.id}`}
                          >
                            {saving === String(entry.id) ? (
                              <Loader2 size={13} className="animate-spin" />
                            ) : (
                              <Save size={13} />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteRow(entry.id)}
                            className="p-1.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-smooth"
                            aria-label="Delete"
                            data-ocid={`timetable-delete-${entry.id}`}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      {entries.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass rounded-2xl p-12 text-center"
          data-ocid="timetable-empty-state"
        >
          <div className="text-5xl mb-3">🗓️</div>
          <p className="font-display font-semibold text-foreground">
            No timetable entries
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Add your first class using the button above
          </p>
        </motion.div>
      )}
    </div>
  );
}
