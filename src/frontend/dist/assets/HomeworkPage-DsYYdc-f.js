import { e as useAuth, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, q as BookOpen, A as AnimatePresence, g as ue, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { T as Textarea } from "./textarea-LKy1wIHY.js";
import { P as Plus } from "./plus-BdApgZ7F.js";
import { L as LoaderCircle } from "./loader-circle-COfQ0ihF.js";
import { C as CircleCheckBig } from "./circle-check-big-yDHn19mr.js";
import { C as ChevronUp } from "./chevron-up-BSPR16JD.js";
import { C as ChevronDown } from "./chevron-down-CBYl_4ES.js";
const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
const TEACHER_SUBJECTS = {
  "Sangya Ma'am": ["English", "Science", "Social Studies"],
  "Shruti Ma'am": ["Maths", "Geography", "Commerce"],
  "Shristi Ma'am": ["IT", "Computer Science", "Hindi"]
};
const STATUS_STYLE = {
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
  graded: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200"
};
const INITIAL_FORM = {
  subject: "",
  title: "",
  description: "",
  dueDate: "",
  assignedClasses: []
};
function HomeworkPage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [assignments, setAssignments] = reactExports.useState([]);
  const [loadingHW, setLoadingHW] = reactExports.useState(false);
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [submissions, setSubmissions] = reactExports.useState({});
  const name = (teacherProfile == null ? void 0 : teacherProfile.name) ?? "";
  const mySubjects = (teacherProfile == null ? void 0 : teacherProfile.subjects) ?? TEACHER_SUBJECTS[name] ?? [];
  const fetchHomework = reactExports.useCallback(async () => {
    if (!actor) return;
    setLoadingHW(true);
    try {
      const all = [];
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
  reactExports.useEffect(() => {
    if (actor && !isFetching) fetchHomework();
  }, [actor, isFetching, fetchHomework]);
  const toggleClass = (cls) => {
    setForm((prev) => ({
      ...prev,
      assignedClasses: prev.assignedClasses.includes(cls) ? prev.assignedClasses.filter((c) => c !== cls) : [...prev.assignedClasses, cls]
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!actor) return ue.error("Not connected to backend");
    if (!form.subject || !form.title || !form.dueDate || form.assignedClasses.length === 0) {
      return ue.error(
        "Please fill in all required fields and select at least one class"
      );
    }
    setSubmitting(true);
    try {
      const result = await actor.postHomework(
        form.subject,
        form.title,
        form.description,
        form.dueDate,
        form.assignedClasses
      );
      if (result.__kind__ === "ok") {
        ue.success("Homework assigned successfully! 🎉");
        setForm(INITIAL_FORM);
        setShowForm(false);
        fetchHomework();
      } else {
        ue.error(result.err);
      }
    } catch {
      ue.error("Failed to post homework. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const loadSubmissions = async (hwId) => {
    const key = String(hwId);
    if (submissions[key]) return;
    if (!actor) return;
    const res = await actor.getSubmissions(hwId);
    if (res.__kind__ === "ok") {
      setSubmissions((prev) => ({ ...prev, [key]: res.ok }));
    }
  };
  const toggleExpand = (id) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    if (newId !== null) loadSubmissions(newId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "text-primary", size: 28 }),
              "Homework Manager"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm mt-1", children: "Create assignments and track student submissions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowForm(!showForm),
              className: "grad-purple text-white border-0 shadow-md flex items-center gap-2",
              "data-ocid": "homework-create-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                showForm ? "Cancel" : "New Assignment"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "glass rounded-2xl border border-purple-100/60 p-6 space-y-5",
            "data-ocid": "homework-form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground flex items-center gap-2", children: "📝 New Assignment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                    "Subject ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: form.subject,
                      onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value })),
                      className: "w-full h-10 px-3 rounded-xl border border-input bg-card text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40",
                      "data-ocid": "homework-subject-select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select subject…" }),
                        mySubjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                    "Due Date ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      value: form.dueDate,
                      onChange: (e) => setForm((p) => ({ ...p, dueDate: e.target.value })),
                      className: "rounded-xl border-input bg-card",
                      "data-ocid": "homework-due-date"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                  "Title ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "e.g., Complete Chapter 5 exercises",
                    value: form.title,
                    onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
                    className: "rounded-xl border-input bg-card",
                    "data-ocid": "homework-title-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-foreground", children: "Instructions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Detailed instructions for students…",
                    rows: 3,
                    value: form.description,
                    onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                    className: "rounded-xl border-input bg-card resize-none",
                    "data-ocid": "homework-description-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                  "Assign to Classes ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ALL_CLASSES.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleClass(cls),
                    "data-ocid": `class-toggle-${cls.replace(" ", "-")}`,
                    className: `px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${form.assignedClasses.includes(cls) ? "grad-purple text-white border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"}`,
                    children: cls
                  },
                  cls
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: submitting,
                  className: "w-full grad-purple text-white border-0 shadow-md h-11 font-semibold",
                  "data-ocid": "homework-submit-btn",
                  children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin mr-2" }),
                    " Posting…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "mr-2" }),
                    " Post Assignment"
                  ] })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2", children: "📋 All Assignments" }),
      loadingHW ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 glass rounded-2xl animate-pulse" }, i)) }) : assignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-10 text-center",
          "data-ocid": "homework-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No assignments yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Create your first assignment using the button above" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: assignments.map((hw, i) => {
        const isOpen = expandedId === hw.id;
        const subs = submissions[String(hw.id)] ?? [];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.05, type: "spring" },
            className: "glass rounded-2xl border border-purple-100/50 overflow-hidden",
            "data-ocid": `hw-row-${hw.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full p-4 flex items-center gap-4 text-left hover:bg-purple-50/40 transition-smooth",
                  onClick: () => toggleExpand(hw.id),
                  "data-ocid": `hw-expand-${hw.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl grad-purple flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground truncate", children: hw.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body mt-0.5", children: [
                        hw.subject,
                        " · Due ",
                        hw.dueDate,
                        " ·",
                        " ",
                        hw.assignedClasses.join(", ")
                      ] })
                    ] }),
                    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronUp,
                      {
                        size: 18,
                        className: "text-muted-foreground shrink-0"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        size: 18,
                        className: "text-muted-foreground shrink-0"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.25 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 border-t border-border/50 pt-3 space-y-3", children: [
                    hw.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-body bg-purple-50/40 rounded-xl p-3", children: hw.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-sm text-foreground", children: [
                      "Submissions (",
                      subs.length,
                      ")"
                    ] }),
                    subs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body", children: "No submissions yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: subs.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 p-3 glass-purple rounded-xl",
                        "data-ocid": `submission-row-${sub.id}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full grad-purple flex items-center justify-center text-white text-xs font-bold shrink-0", children: String(sub.studentPrincipal).slice(0, 2).toUpperCase() }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground truncate", children: [
                              String(sub.studentPrincipal).slice(
                                0,
                                20
                              ),
                              "…"
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                              sub.submittedContent.slice(0, 60),
                              sub.submittedContent.length > 60 ? "…" : ""
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs shrink-0 ${STATUS_STYLE[sub.status] ?? "bg-muted text-foreground"}`,
                              children: sub.status
                            }
                          )
                        ]
                      },
                      String(sub.id)
                    )) })
                  ] })
                }
              ) })
            ]
          },
          String(hw.id)
        );
      }) })
    ] })
  ] });
}
export {
  HomeworkPage as default
};
