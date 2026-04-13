import { e as useAuth, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, B as Bell, A as AnimatePresence, g as ue, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { L as Label } from "./label-D2jquGTz.js";
import { T as Textarea } from "./textarea-LKy1wIHY.js";
import { P as Plus } from "./plus-BdApgZ7F.js";
import { L as LoaderCircle } from "./loader-circle-COfQ0ihF.js";
import { C as CircleCheckBig } from "./circle-check-big-yDHn19mr.js";
const ALL_CLASSES = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
const MAX_BODY = 500;
const CLASS_COLOR = {
  "Class 6": "bg-blue-50 text-blue-700 border-blue-200",
  "Class 7": "bg-green-50 text-green-700 border-green-200",
  "Class 8": "bg-orange-50 text-orange-700 border-orange-200",
  "Class 9": "bg-violet-50 text-violet-700 border-violet-200",
  "Class 10": "bg-rose-50 text-rose-700 border-rose-200"
};
const BLANK_FORM = { title: "", body: "", targetClasses: [] };
function formatDate(ns) {
  const ms = Number(ns / BigInt(1e6));
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function AnnouncementsPage() {
  const { teacherProfile } = useAuth();
  const { actor, isFetching } = useActor(createActor);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(BLANK_FORM);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const fetchAll = reactExports.useCallback(async () => {
    if (!actor) return;
    setLoading(true);
    try {
      const all = [];
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
  reactExports.useEffect(() => {
    if (actor && !isFetching) fetchAll();
  }, [actor, isFetching, fetchAll]);
  const toggleClass = (cls) => {
    setForm((prev) => ({
      ...prev,
      targetClasses: prev.targetClasses.includes(cls) ? prev.targetClasses.filter((c) => c !== cls) : [...prev.targetClasses, cls]
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!actor) return ue.error("Not connected to backend");
    if (!form.title.trim()) return ue.error("Title is required");
    if (!form.body.trim()) return ue.error("Message body is required");
    if (form.targetClasses.length === 0)
      return ue.error("Select at least one class");
    setSubmitting(true);
    try {
      const res = await actor.postAnnouncement(
        form.title.trim(),
        form.body.trim(),
        form.targetClasses
      );
      if (res.__kind__ === "ok") {
        ue.success("Announcement posted! 📢");
        setForm(BLANK_FORM);
        setShowForm(false);
        fetchAll();
      } else {
        ue.error(res.err);
      }
    } catch {
      ue.error("Failed to post announcement. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const name = (teacherProfile == null ? void 0 : teacherProfile.name) ?? "Teacher";
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "text-primary", size: 28 }),
              "Announcements"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm mt-1", children: "Broadcast important notices to your students" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowForm(!showForm),
              className: "grad-purple text-white border-0 shadow-md flex items-center gap-2",
              "data-ocid": "announcement-create-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                showForm ? "Cancel" : "New Announcement"
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
            className: "glass rounded-2xl border border-purple-100/60 p-6 space-y-5 overflow-hidden",
            "data-ocid": "announcement-form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground flex items-center gap-2", children: "📢 New Announcement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body -mt-3", children: [
                "From:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                  "Title ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "e.g., Important: Unit Test Schedule Change",
                    value: form.title,
                    onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
                    maxLength: 120,
                    className: "rounded-xl border-input bg-card",
                    "data-ocid": "announcement-title-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                    "Message ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-mono ${form.body.length > MAX_BODY * 0.9 ? "text-destructive" : "text-muted-foreground"}`,
                      children: [
                        form.body.length,
                        "/",
                        MAX_BODY
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Write your announcement here…",
                    rows: 4,
                    value: form.body,
                    maxLength: MAX_BODY,
                    onChange: (e) => setForm((p) => ({ ...p, body: e.target.value })),
                    className: "rounded-xl border-input bg-card resize-none",
                    "data-ocid": "announcement-body-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: `h-full rounded-full ${form.body.length > MAX_BODY * 0.9 ? "bg-destructive" : "bg-primary"}`,
                    animate: {
                      width: `${form.body.length / MAX_BODY * 100}%`
                    },
                    transition: { duration: 0.2 }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold text-foreground", children: [
                  "Target Classes ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  ALL_CLASSES.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => toggleClass(cls),
                      "data-ocid": `ann-class-toggle-${cls.replace(" ", "-")}`,
                      className: `px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${form.targetClasses.includes(cls) ? "grad-purple text-white border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"}`,
                      children: cls
                    },
                    cls
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setForm((p) => ({
                        ...p,
                        targetClasses: p.targetClasses.length === ALL_CLASSES.length ? [] : [...ALL_CLASSES]
                      })),
                      "data-ocid": "ann-class-all",
                      className: "px-3 py-1.5 rounded-xl text-sm font-semibold border bg-card border-dashed border-primary/50 text-primary hover:bg-purple-50 transition-smooth",
                      children: form.targetClasses.length === ALL_CLASSES.length ? "Clear All" : "Select All"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: submitting,
                  className: "w-full grad-purple text-white border-0 shadow-md h-11 font-semibold",
                  "data-ocid": "announcement-submit-btn",
                  children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin mr-2" }),
                    " Posting…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "mr-2" }),
                    " Post Announcement"
                  ] })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2", children: "📋 Past Announcements" }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 glass rounded-2xl animate-pulse" }, i)) }) : announcements.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-12 text-center",
          "data-ocid": "announcements-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "📢" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No announcements yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Post your first announcement to keep students informed" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((ann, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.06, type: "spring" },
          className: "glass rounded-2xl border border-purple-100/50 p-5 space-y-3",
          "data-ocid": `announcement-row-${ann.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl grad-purple flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground leading-tight", children: ann.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5", children: ann.publishedAt ? formatDate(ann.publishedAt) : "Just now" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-body bg-purple-50/40 rounded-xl p-3 leading-relaxed", children: ann.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: ann.targetClasses.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs ${CLASS_COLOR[cls] ?? "bg-muted text-foreground"}`,
                children: cls
              },
              cls
            )) })
          ]
        },
        String(ann.id)
      )) })
    ] })
  ] });
}
export {
  AnnouncementsPage as default
};
