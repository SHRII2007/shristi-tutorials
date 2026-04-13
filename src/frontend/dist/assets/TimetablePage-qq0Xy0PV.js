import { c as createLucideIcon, e as useAuth, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, C as Calendar, A as AnimatePresence, g as ue, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { P as Plus } from "./plus-BdApgZ7F.js";
import { L as LoaderCircle } from "./loader-circle-COfQ0ihF.js";
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
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
const TEACHER_SUBJECTS = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"]
};
const DAY_COLOR = {
  Monday: "bg-violet-100 text-violet-700",
  Tuesday: "bg-indigo-100 text-indigo-700",
  Wednesday: "bg-blue-100 text-blue-700",
  Thursday: "bg-teal-100 text-teal-700",
  Friday: "bg-emerald-100 text-emerald-700",
  Saturday: "bg-orange-100 text-orange-700"
};
const BLANK_ENTRY = {
  dayOfWeek: "Monday",
  startTime: "09:00",
  endTime: "10:00",
  subject: "",
  className: "Class 9"
};
function TimetablePage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [entries, setEntries] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(null);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [newEntry, setNewEntry] = reactExports.useState(BLANK_ENTRY);
  const [addSaving, setAddSaving] = reactExports.useState(false);
  const [filterClass, setFilterClass] = reactExports.useState("All");
  const name = (teacherProfile == null ? void 0 : teacherProfile.name) ?? "";
  const mySubjects = (teacherProfile == null ? void 0 : teacherProfile.subjects) ?? TEACHER_SUBJECTS[name] ?? [];
  const fetchAll = reactExports.useCallback(async () => {
    if (!actor) return;
    setLoading(true);
    try {
      const all = [];
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
  reactExports.useEffect(() => {
    if (actor && !isFetching) fetchAll();
  }, [actor, isFetching, fetchAll]);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!actor) return ue.error("Not connected");
    if (!newEntry.subject) return ue.error("Please select a subject");
    setAddSaving(true);
    try {
      const entry = {
        id: BigInt(0),
        dayOfWeek: newEntry.dayOfWeek,
        startTime: newEntry.startTime,
        endTime: newEntry.endTime,
        subject: newEntry.subject,
        className: newEntry.className,
        teacherPrincipal: null
      };
      const res = await actor.updateTimetable(entry);
      if (res.__kind__ === "ok") {
        ue.success("Timetable entry saved! 🗓️");
        setNewEntry(BLANK_ENTRY);
        setShowAddForm(false);
        fetchAll();
      } else {
        ue.error(res.err);
      }
    } catch {
      ue.error("Failed to save entry");
    } finally {
      setAddSaving(false);
    }
  };
  const handleSaveRow = async (entry) => {
    if (!actor) return;
    setSaving(String(entry.id));
    try {
      const res = await actor.updateTimetable(entry);
      if (res.__kind__ === "ok") {
        ue.success("Entry updated!");
      } else {
        ue.error(res.err);
      }
    } finally {
      setSaving(null);
    }
  };
  const handleDeleteRow = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    ue("Entry removed from view (deleted locally)");
  };
  const filtered = filterClass === "All" ? entries : entries.filter((e) => e.className === filterClass);
  const grouped = DAYS.reduce(
    (acc, day) => {
      acc[day] = filtered.filter((e) => e.dayOfWeek === day);
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-primary", size: 28 }),
              "Timetable Manager"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm mt-1", children: "Manage your weekly class schedule Monday–Saturday" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowAddForm(!showAddForm),
              className: "grad-purple text-white border-0 shadow-md flex items-center gap-2",
              "data-ocid": "timetable-add-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                showAddForm ? "Cancel" : "Add Class"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        onSubmit: handleAdd,
        className: "glass rounded-2xl border border-purple-100/60 p-6 space-y-4 overflow-hidden",
        "data-ocid": "timetable-form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: "🗓️ Add New Class" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: newEntry.dayOfWeek,
                  onChange: (e) => setNewEntry((p) => ({ ...p, dayOfWeek: e.target.value })),
                  className: "w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                  "data-ocid": "timetable-day-select",
                  children: DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, children: d }, d))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Start Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "time",
                  value: newEntry.startTime,
                  onChange: (e) => setNewEntry((p) => ({ ...p, startTime: e.target.value })),
                  className: "rounded-xl border-input bg-card",
                  "data-ocid": "timetable-start-time"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "End Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "time",
                  value: newEntry.endTime,
                  onChange: (e) => setNewEntry((p) => ({ ...p, endTime: e.target.value })),
                  className: "rounded-xl border-input bg-card",
                  "data-ocid": "timetable-end-time"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: newEntry.subject,
                  onChange: (e) => setNewEntry((p) => ({ ...p, subject: e.target.value })),
                  className: "w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                  "data-ocid": "timetable-subject-select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Subject…" }),
                    mySubjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Class" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: newEntry.className,
                  onChange: (e) => setNewEntry((p) => ({ ...p, className: e.target.value })),
                  className: "w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                  "data-ocid": "timetable-class-select",
                  children: ALL_CLASSES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: addSaving,
              className: "grad-purple text-white border-0 shadow-md",
              "data-ocid": "timetable-save-entry-btn",
              children: addSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 15, className: "animate-spin mr-2" }),
                " Saving…"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 15, className: "mr-2" }),
                " Save Entry"
              ] })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["All", ...ALL_CLASSES].map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFilterClass(cls),
        "data-ocid": `timetable-filter-${cls.replace(" ", "-")}`,
        className: `px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${filterClass === cls ? "grad-purple text-white border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:text-primary hover:border-primary/50"}`,
        children: cls
      },
      cls
    )) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 glass rounded-2xl animate-pulse" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: DAYS.map((day, di) => {
      const dayEntries = grouped[day] ?? [];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: di * 0.06 },
          className: "glass rounded-2xl border border-purple-100/50 overflow-hidden",
          "data-ocid": `timetable-day-${day.toLowerCase()}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-3 border-b border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `px-3 py-1 rounded-lg text-xs font-bold ${DAY_COLOR[day] ?? "bg-muted text-muted-foreground"}`,
                  children: day
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-purple-50 text-primary border-purple-200 text-xs", children: [
                dayEntries.length,
                " class",
                dayEntries.length !== 1 ? "es" : ""
              ] })
            ] }),
            dayEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 py-3 text-sm text-muted-foreground font-body italic", children: "No classes scheduled" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/40", children: dayEntries.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                layout: true,
                className: "flex items-center gap-3 px-5 py-3 group hover:bg-purple-50/30 transition-smooth",
                "data-ocid": `timetable-entry-${entry.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-muted-foreground w-28 shrink-0", children: [
                    entry.startTime,
                    " – ",
                    entry.endTime
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground flex-1 min-w-0 truncate", children: entry.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-50 text-primary border-purple-200 text-xs shrink-0", children: entry.className }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-smooth shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleSaveRow(entry),
                        className: "p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth",
                        "aria-label": "Save",
                        "data-ocid": `timetable-save-${entry.id}`,
                        children: saving === String(entry.id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 13, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 13 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleDeleteRow(entry.id),
                        className: "p-1.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-smooth",
                        "aria-label": "Delete",
                        "data-ocid": `timetable-delete-${entry.id}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                      }
                    )
                  ] })
                ]
              },
              String(entry.id)
            )) })
          ]
        },
        day
      );
    }) }),
    entries.length === 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "glass rounded-2xl p-12 text-center",
        "data-ocid": "timetable-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🗓️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No timetable entries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Add your first class using the button above" })
        ]
      }
    )
  ] });
}
export {
  TimetablePage as default
};
