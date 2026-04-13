import { c as createLucideIcon, e as useAuth, u as useActor, a as reactExports, j as jsxRuntimeExports, m as motion, M as MessageCircle, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Cl9XV48G.js";
import { I as Input } from "./input-BFp_NUYI.js";
import { S as Send } from "./send-_MEJcMvC.js";
import { P as Phone } from "./phone-D0RE3Rf7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
];
const Hand = createLucideIcon("hand", __iconNode);
const TEACHERS = [
  {
    name: "Sangya Ma'am",
    phone: "7355367393",
    subject: "English, Science & Social Studies",
    subjectKey: "English",
    avatar: "SM",
    color: "bg-purple-500"
  },
  {
    name: "Shruti Ma'am",
    phone: "8879102547",
    subject: "Maths, Geography & Commerce",
    subjectKey: "Maths",
    avatar: "SH",
    color: "bg-fuchsia-500"
  },
  {
    name: "Shristi Ma'am",
    phone: "7039375142",
    subject: "IT, Computer Science & Hindi",
    subjectKey: "IT",
    avatar: "ST",
    color: "bg-indigo-500"
  }
];
const SEED_MESSAGES = {
  "Sangya Ma'am": [
    {
      id: 1,
      sender: "Sangya Ma'am",
      text: "Good morning students! English comprehension test is on Friday. Please revise Unit 4. 📚",
      time: "9:45 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      text: "Good morning ma'am! I had a doubt about the passage analysis technique.",
      time: "9:47 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Sangya Ma'am",
      text: "Great question! Focus on identifying key terms and context clues. I'll cover it in today's class. 😊",
      time: "9:49 AM",
      isMe: false
    }
  ],
  "Shruti Ma'am": [
    {
      id: 1,
      sender: "Shruti Ma'am",
      text: "Hello class! Maths Chapter 6 worksheet is due Monday. Focus on trigonometry. 📐",
      time: "10:00 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      text: "Ma'am, I'm confused about the cosine rule. Can you help?",
      time: "10:05 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Shruti Ma'am",
      text: "Sure! c² = a² + b² - 2ab·cos(C). We'll practice examples tomorrow! 🎯",
      time: "10:07 AM",
      isMe: false
    }
  ],
  "Shristi Ma'am": [
    {
      id: 1,
      sender: "Shristi Ma'am",
      text: "Python assignment is due this Friday. Make sure you complete the loops exercise. 💻",
      time: "11:00 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      text: "Ma'am, I have a doubt about list comprehension syntax.",
      time: "11:05 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Shristi Ma'am",
      text: "Use [expression for item in iterable if condition]. I'll send more examples! 🚀",
      time: "11:08 AM",
      isMe: false
    }
  ]
};
const LS_KEY = "shristi_doubt_messages_v1";
function loadMessages(teacherName) {
  try {
    const raw = localStorage.getItem(`${LS_KEY}_${teacherName}`);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return SEED_MESSAGES[teacherName] ?? [];
}
function saveMessages(teacherName, msgs) {
  try {
    localStorage.setItem(`${LS_KEY}_${teacherName}`, JSON.stringify(msgs));
  } catch {
  }
}
function DoubtPage() {
  const { studentProfile } = useAuth();
  const { actor } = useActor(createActor);
  const [selectedTeacher, setSelectedTeacher] = reactExports.useState(TEACHERS[0]);
  const [messages, setMessages] = reactExports.useState(
    () => loadMessages(TEACHERS[0].name)
  );
  const [input, setInput] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [backendConnected, setBackendConnected] = reactExports.useState(false);
  const bottomRef = reactExports.useRef(null);
  const pollingRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const senderName = (studentProfile == null ? void 0 : studentProfile.name) ?? "You";
  const scrollToBottom = reactExports.useCallback(() => {
    var _a;
    (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, []);
  const fetchMessages = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const raw = await actor.getMessages(selectedTeacher.subjectKey);
      if (Array.isArray(raw) && raw.length > 0) {
        setBackendConnected(true);
        const mapped = raw.map((m, i) => ({
          id: Number(m.id ?? i),
          sender: m.senderName ?? "Unknown",
          text: m.content ?? "",
          time: m.sentAt ? new Date(Number(m.sentAt) / 1e6).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }) : "",
          isMe: m.senderName === senderName
        }));
        setMessages(mapped);
        saveMessages(selectedTeacher.name, mapped);
        scrollToBottom();
      }
    } catch {
      setBackendConnected(false);
    }
  }, [
    actor,
    selectedTeacher.subjectKey,
    selectedTeacher.name,
    senderName,
    scrollToBottom
  ]);
  reactExports.useEffect(() => {
    fetchMessages();
    pollingRef.current = setInterval(fetchMessages, 4e3);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [fetchMessages]);
  reactExports.useEffect(() => {
    const stored = loadMessages(selectedTeacher.name);
    setMessages(stored);
    setTimeout(scrollToBottom, 100);
  }, [selectedTeacher.name, scrollToBottom]);
  const prevLenRef = reactExports.useRef(messages.length);
  reactExports.useEffect(() => {
    if (messages.length !== prevLenRef.current) {
      prevLenRef.current = messages.length;
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);
  const sendMessage = async () => {
    var _a;
    if (!input.trim()) return;
    const text = input.trim();
    const now = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const msg = {
      id: Date.now(),
      sender: senderName,
      text,
      time: now,
      isMe: true
    };
    const updatedMsgs = [...messages, msg];
    setMessages(updatedMsgs);
    saveMessages(selectedTeacher.name, updatedMsgs);
    setInput("");
    setIsTyping(true);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    if (actor) {
      try {
        await actor.postMessage(text, selectedTeacher.subjectKey);
        setBackendConnected(true);
      } catch {
        setBackendConnected(false);
      }
    }
    setTimeout(() => {
      setIsTyping(false);
      if (!backendConnected) {
        const reply = {
          id: Date.now() + 1,
          sender: selectedTeacher.name,
          text: "Thank you for your question! I'll address it in the next session. Feel free to ask more doubts anytime. 📝",
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          isMe: false
        };
        setMessages((prev) => {
          const updated = [...prev, reply];
          saveMessages(selectedTeacher.name, updated);
          return updated;
        });
      }
    }, 2e3);
  };
  const raiseHand = async () => {
    const handMsg = "✋ Raised hand — I have a doubt!";
    const now = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const msg = {
      id: Date.now(),
      sender: senderName,
      text: handMsg,
      time: now,
      isMe: true
    };
    const updatedMsgs = [...messages, msg];
    setMessages(updatedMsgs);
    saveMessages(selectedTeacher.name, updatedMsgs);
    if (actor) {
      try {
        await actor.postMessage(handMsg, selectedTeacher.subjectKey);
      } catch {
      }
    }
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: selectedTeacher.name,
        text: "I see your hand! ✋ I'll get to your doubt shortly. Please describe your question. 😊",
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        isMe: false
      };
      setMessages((prev) => {
        const updated = [...prev, reply];
        saveMessages(selectedTeacher.name, updated);
        return updated;
      });
    }, 1500);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Doubt Chat 💬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-1", children: "✨ Where learning is fun — ask anything, anytime" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.05 },
        className: "flex flex-wrap gap-2",
        children: TEACHERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelectedTeacher(t),
            "data-ocid": `teacher-tab-${t.subjectKey.toLowerCase()}`,
            className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-body border transition-all duration-200 cursor-pointer ${selectedTeacher.name === t.name ? "border-primary/60 text-primary bg-primary/10 shadow-glow-sm" : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `w-6 h-6 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`,
                  children: t.avatar
                }
              ),
              t.name
            ]
          },
          t.name
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.1 },
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "glass shadow-glass border-border/50 flex flex-col",
              style: { height: "560px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-10 h-10 rounded-full ${selectedTeacher.color} flex items-center justify-center text-white text-sm font-bold`,
                        children: selectedTeacher.avatar
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: selectedTeacher.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: selectedTeacher.subject })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    backendConnected && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500/10 text-green-600 border-green-500/20 text-xs font-body", children: "Live" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `https://wa.me/91${selectedTeacher.phone}?text=${encodeURIComponent(`Hello ${selectedTeacher.name}, I have a doubt.`)}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-green-500 text-white text-xs font-medium hover:opacity-90 transition-smooth",
                        "data-ocid": `whatsapp-${selectedTeacher.subjectKey.toLowerCase()}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13 }),
                          "WhatsApp"
                        ]
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin", children: [
                  messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, x: msg.isMe ? 20 : -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i < 3 ? 0 : 0.05 },
                      className: `flex ${msg.isMe ? "justify-end" : "justify-start"}`,
                      "data-ocid": `chat-msg-${msg.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[75%] ${msg.isMe ? "order-1" : ""}`, children: [
                        !msg.isMe && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium font-body mb-1 ml-1", children: msg.sender }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `px-4 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${msg.isMe ? "grad-purple text-white rounded-br-sm" : "glass shadow-glass text-foreground rounded-bl-sm border border-border/40"}`,
                            children: msg.text
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: `text-xs text-muted-foreground mt-1 font-body ${msg.isMe ? "text-right" : "text-left"} px-1`,
                            children: msg.time
                          }
                        )
                      ] })
                    },
                    msg.id
                  )),
                  isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      className: "flex justify-start",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass shadow-glass px-4 py-3 rounded-2xl rounded-bl-sm border border-border/40 flex items-center gap-1.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "w-2 h-2 bg-primary rounded-full",
                          animate: { y: [0, -4, 0] },
                          transition: {
                            duration: 0.6,
                            delay: i * 0.15,
                            repeat: Number.POSITIVE_INFINITY
                          }
                        },
                        i
                      )) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        size: "icon",
                        className: "flex-shrink-0 border-primary/30 text-primary hover:bg-primary/10",
                        onClick: raiseHand,
                        "aria-label": "Raise hand",
                        "data-ocid": "raise-hand-btn",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        ref: inputRef,
                        value: input,
                        onChange: (e) => setInput(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: `Ask ${selectedTeacher.name} anything…`,
                        className: "flex-1 bg-muted/40 border-border/40 focus:border-primary/50 font-body text-sm",
                        "data-ocid": "chat-input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        onClick: sendMessage,
                        disabled: !input.trim(),
                        className: "flex-shrink-0 grad-purple text-white border-0 shadow-glow-sm",
                        "aria-label": "Send message",
                        "data-ocid": "chat-send-btn",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 font-body", children: "Press Enter to send · ✋ button to raise hand" })
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass shadow-glass border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg", children: "Contact Teachers" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: TEACHERS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 * i },
                className: `p-4 rounded-2xl transition-smooth cursor-pointer ${selectedTeacher.name === t.name ? "bg-primary/10 border border-primary/30" : "bg-muted/40 hover:bg-muted/60 border border-transparent"}`,
                onClick: () => setSelectedTeacher(t),
                "data-ocid": `teacher-card-${i}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`,
                        children: t.avatar
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground truncate", children: t.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-50 text-primary border-purple-100 text-xs", children: t.subject })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `tel:${t.phone}`,
                        className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary text-white text-xs font-medium hover:opacity-90 transition-smooth shadow-glow-sm",
                        onClick: (e) => e.stopPropagation(),
                        "data-ocid": `call-teacher-${i}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 }),
                          "Call"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `https://wa.me/91${t.phone}?text=${encodeURIComponent("Hello ma'am, I have a doubt regarding my studies.")}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-green-500 text-white text-xs font-medium hover:opacity-90 transition-smooth",
                        onClick: (e) => e.stopPropagation(),
                        "data-ocid": `whatsapp-teacher-${i}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13 }),
                          "WhatsApp"
                        ]
                      }
                    )
                  ] })
                ]
              },
              t.name
            )) })
          ] })
        }
      )
    ] })
  ] });
}
export {
  DoubtPage as default
};
