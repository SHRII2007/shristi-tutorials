import { c as createLucideIcon, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, a4 as Users, A as AnimatePresence, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { C as ChevronUp } from "./chevron-up-BSPR16JD.js";
import { C as ChevronDown } from "./chevron-down-CBYl_4ES.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const ALL_CLASSES = [
  "All",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10"
];
const CLASS_COLOR = {
  "Class 6": "bg-blue-50 text-blue-700 border-blue-200",
  "Class 7": "bg-green-50 text-green-700 border-green-200",
  "Class 8": "bg-orange-50 text-orange-700 border-orange-200",
  "Class 9": "bg-violet-50 text-violet-700 border-violet-200",
  "Class 10": "bg-rose-50 text-rose-700 border-rose-200"
};
function StudentsPage() {
  const { actor, isFetching } = useActor(createActor);
  const [students, setStudents] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [filterClass, setFilterClass] = reactExports.useState("All");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  reactExports.useEffect(() => {
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
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.rollNumber.toLowerCase().includes(q) || s.email.toLowerCase().includes(q);
    return matchClass && matchSearch;
  });
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "text-primary", size: 28 }),
              "Student Registry"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm mt-1", children: "View and search all registered students" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-5 py-3 text-center border border-purple-100/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-primary", children: students.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Total Students" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 16,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search by name, roll number, or email…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 rounded-xl border-input bg-card",
            "data-ocid": "students-search-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ALL_CLASSES.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFilterClass(cls),
          "data-ocid": `students-filter-${cls.replace(" ", "-")}`,
          className: `px-3 py-1.5 rounded-xl text-sm font-semibold border transition-smooth ${filterClass === cls ? "grad-purple text-white border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:text-primary hover:border-primary/50"}`,
          children: cls
        },
        cls
      )) })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 glass rounded-2xl animate-pulse" }, i)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "glass rounded-2xl p-12 text-center",
        "data-ocid": "students-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🔍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: students.length === 0 ? "No students registered yet" : "No students match your search" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: students.length === 0 ? "Students will appear here after they register" : "Try adjusting your search or filter" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:grid grid-cols-[1fr_140px_160px_100px] gap-4 px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Student" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Roll Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Class" })
      ] }),
      filtered.map((student, i) => {
        const principalStr = String(student.principal);
        const isOpen = expandedId === principalStr;
        const initials = student.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.04, type: "spring" },
            className: "glass rounded-2xl border border-purple-100/50 overflow-hidden",
            "data-ocid": `student-row-${i}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full px-5 py-3.5 flex items-center gap-4 hover:bg-purple-50/30 transition-smooth text-left",
                  onClick: () => setExpandedId(isOpen ? null : principalStr),
                  "data-ocid": `student-expand-${i}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full grad-purple flex items-center justify-center text-white text-sm font-bold shrink-0", children: initials }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: student.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body sm:hidden", children: [
                        student.rollNumber,
                        " · ",
                        student.className
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-sm text-foreground font-mono w-36 shrink-0", children: student.rollNumber }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-xs text-muted-foreground w-40 shrink-0 truncate", children: student.email }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-xs shrink-0 ${CLASS_COLOR[student.className] ?? "bg-muted text-foreground border-border"}`,
                        children: student.className
                      }
                    ),
                    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronUp,
                      {
                        size: 16,
                        className: "text-muted-foreground shrink-0"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        size: 16,
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
                  transition: { duration: 0.22 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-4 border-t border-border/50 pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-purple rounded-xl p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Full Name" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mt-0.5", children: student.name })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-purple rounded-xl p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Email" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mt-0.5 break-all", children: student.email || "—" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-purple rounded-xl p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Roll Number" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mt-0.5 font-mono", children: student.rollNumber })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-purple rounded-xl p-3 sm:col-span-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: "Principal ID" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground mt-0.5 break-all", children: principalStr })
                    ] })
                  ] })
                }
              ) })
            ]
          },
          principalStr
        );
      })
    ] })
  ] });
}
export {
  StudentsPage as default
};
