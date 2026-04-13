import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActor } from "@caffeineai/core-infrastructure";
import { Hand, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
}

const TEACHERS = [
  {
    name: "Sangya Ma'am",
    phone: "7355367393",
    subject: "English, Science & Social Studies",
    subjectKey: "English",
    avatar: "SM",
    color: "bg-purple-500",
  },
  {
    name: "Shruti Ma'am",
    phone: "8879102547",
    subject: "Maths, Geography & Commerce",
    subjectKey: "Maths",
    avatar: "SH",
    color: "bg-fuchsia-500",
  },
  {
    name: "Shristi Ma'am",
    phone: "7039375142",
    subject: "IT, Computer Science & Hindi",
    subjectKey: "IT",
    avatar: "ST",
    color: "bg-indigo-500",
  },
];

// Seed messages per teacher
const SEED_MESSAGES: Record<string, Message[]> = {
  "Sangya Ma'am": [
    {
      id: 1,
      sender: "Sangya Ma'am",
      text: "Good morning students! English comprehension test is on Friday. Please revise Unit 4. 📚",
      time: "9:45 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Good morning ma'am! I had a doubt about the passage analysis technique.",
      time: "9:47 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sangya Ma'am",
      text: "Great question! Focus on identifying key terms and context clues. I'll cover it in today's class. 😊",
      time: "9:49 AM",
      isMe: false,
    },
  ],
  "Shruti Ma'am": [
    {
      id: 1,
      sender: "Shruti Ma'am",
      text: "Hello class! Maths Chapter 6 worksheet is due Monday. Focus on trigonometry. 📐",
      time: "10:00 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Ma'am, I'm confused about the cosine rule. Can you help?",
      time: "10:05 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Shruti Ma'am",
      text: "Sure! c² = a² + b² - 2ab·cos(C). We'll practice examples tomorrow! 🎯",
      time: "10:07 AM",
      isMe: false,
    },
  ],
  "Shristi Ma'am": [
    {
      id: 1,
      sender: "Shristi Ma'am",
      text: "Python assignment is due this Friday. Make sure you complete the loops exercise. 💻",
      time: "11:00 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Ma'am, I have a doubt about list comprehension syntax.",
      time: "11:05 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Shristi Ma'am",
      text: "Use [expression for item in iterable if condition]. I'll send more examples! 🚀",
      time: "11:08 AM",
      isMe: false,
    },
  ],
};

const LS_KEY = "shristi_doubt_messages_v1";

function loadMessages(teacherName: string): Message[] {
  try {
    const raw = localStorage.getItem(`${LS_KEY}_${teacherName}`);
    if (raw) return JSON.parse(raw) as Message[];
  } catch {
    /* ignore */
  }
  return SEED_MESSAGES[teacherName] ?? [];
}

function saveMessages(teacherName: string, msgs: Message[]) {
  try {
    localStorage.setItem(`${LS_KEY}_${teacherName}`, JSON.stringify(msgs));
  } catch {
    /* ignore */
  }
}

export default function DoubtPage() {
  const { studentProfile } = useAuth();
  const { actor } = useActor(createActor);

  const [selectedTeacher, setSelectedTeacher] = useState(TEACHERS[0]);
  const [messages, setMessages] = useState<Message[]>(() =>
    loadMessages(TEACHERS[0].name),
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const senderName = studentProfile?.name ?? "You";

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Fetch messages from backend with graceful fallback
  const fetchMessages = useCallback(async () => {
    if (!actor) return;
    try {
      const raw = await actor.getMessages(selectedTeacher.subjectKey);
      if (Array.isArray(raw) && raw.length > 0) {
        setBackendConnected(true);
        const mapped: Message[] = raw.map((m, i) => ({
          id: Number(m.id ?? i),
          sender: m.senderName ?? "Unknown",
          text: m.content ?? "",
          time: m.sentAt
            ? new Date(Number(m.sentAt) / 1_000_000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "",
          isMe: m.senderName === senderName,
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
    scrollToBottom,
  ]);

  // Poll every 4 seconds
  useEffect(() => {
    fetchMessages();
    pollingRef.current = setInterval(fetchMessages, 4000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [fetchMessages]);

  // Load localStorage messages when switching teacher
  useEffect(() => {
    const stored = loadMessages(selectedTeacher.name);
    setMessages(stored);
    setTimeout(scrollToBottom, 100);
  }, [selectedTeacher.name, scrollToBottom]);

  // Scroll on new messages
  const prevLenRef = useRef(messages.length);
  useEffect(() => {
    if (messages.length !== prevLenRef.current) {
      prevLenRef.current = messages.length;
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const text = input.trim();
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const msg: Message = {
      id: Date.now(),
      sender: senderName,
      text,
      time: now,
      isMe: true,
    };
    const updatedMsgs = [...messages, msg];
    setMessages(updatedMsgs);
    saveMessages(selectedTeacher.name, updatedMsgs);
    setInput("");
    setIsTyping(true);
    inputRef.current?.focus();

    // Try backend
    if (actor) {
      try {
        await actor.postMessage(text, selectedTeacher.subjectKey);
        setBackendConnected(true);
      } catch {
        setBackendConnected(false);
      }
    }

    // Auto-reply after 2s if not connected to backend
    setTimeout(() => {
      setIsTyping(false);
      if (!backendConnected) {
        const reply: Message = {
          id: Date.now() + 1,
          sender: selectedTeacher.name,
          text: "Thank you for your question! I'll address it in the next session. Feel free to ask more doubts anytime. 📝",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isMe: false,
        };
        setMessages((prev) => {
          const updated = [...prev, reply];
          saveMessages(selectedTeacher.name, updated);
          return updated;
        });
      }
    }, 2000);
  };

  const raiseHand = async () => {
    const handMsg = "✋ Raised hand — I have a doubt!";
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const msg: Message = {
      id: Date.now(),
      sender: senderName,
      text: handMsg,
      time: now,
      isMe: true,
    };
    const updatedMsgs = [...messages, msg];
    setMessages(updatedMsgs);
    saveMessages(selectedTeacher.name, updatedMsgs);

    if (actor) {
      try {
        await actor.postMessage(handMsg, selectedTeacher.subjectKey);
      } catch {
        /* ignore */
      }
    }

    // Auto-reply
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        sender: selectedTeacher.name,
        text: "I see your hand! ✋ I'll get to your doubt shortly. Please describe your question. 😊",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: false,
      };
      setMessages((prev) => {
        const updated = [...prev, reply];
        saveMessages(selectedTeacher.name, updated);
        return updated;
      });
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-bold text-foreground">
          Doubt Chat 💬
        </h1>
        <p className="text-muted-foreground font-body mt-1">
          ✨ Where learning is fun — ask anything, anytime
        </p>
      </motion.div>

      {/* Teacher selector tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="flex flex-wrap gap-2"
      >
        {TEACHERS.map((t) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setSelectedTeacher(t)}
            data-ocid={`teacher-tab-${t.subjectKey.toLowerCase()}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-body border transition-all duration-200 cursor-pointer ${selectedTeacher.name === t.name ? "border-primary/60 text-primary bg-primary/10 shadow-glow-sm" : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}
          >
            <span
              className={`w-6 h-6 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
            >
              {t.avatar}
            </span>
            {t.name}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card
            className="glass shadow-glass border-border/50 flex flex-col"
            style={{ height: "560px" }}
          >
            {/* Chat header */}
            <CardHeader className="pb-3 border-b border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${selectedTeacher.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {selectedTeacher.avatar}
                  </div>
                  <div>
                    <CardTitle className="font-display text-base">
                      {selectedTeacher.name}
                    </CardTitle>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground font-body">
                        {selectedTeacher.subject}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {backendConnected && (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs font-body">
                      Live
                    </Badge>
                  )}
                  <a
                    href={`https://wa.me/91${selectedTeacher.phone}?text=${encodeURIComponent(`Hello ${selectedTeacher.name}, I have a doubt.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-green-500 text-white text-xs font-medium hover:opacity-90 transition-smooth"
                    data-ocid={`whatsapp-${selectedTeacher.subjectKey.toLowerCase()}`}
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.isMe ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i < 3 ? 0 : 0.05 }}
                  className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                  data-ocid={`chat-msg-${msg.id}`}
                >
                  <div className={`max-w-[75%] ${msg.isMe ? "order-1" : ""}`}>
                    {!msg.isMe && (
                      <p className="text-xs text-primary font-medium font-body mb-1 ml-1">
                        {msg.sender}
                      </p>
                    )}
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${msg.isMe ? "grad-purple text-white rounded-br-sm" : "glass shadow-glass text-foreground rounded-bl-sm border border-border/40"}`}
                    >
                      {msg.text}
                    </div>
                    <p
                      className={`text-xs text-muted-foreground mt-1 font-body ${msg.isMe ? "text-right" : "text-left"} px-1`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass shadow-glass px-4 py-3 rounded-2xl rounded-bl-sm border border-border/40 flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.15,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </CardContent>

            {/* Input */}
            <div className="p-4 border-t border-border/40">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0 border-primary/30 text-primary hover:bg-primary/10"
                  onClick={raiseHand}
                  aria-label="Raise hand"
                  data-ocid="raise-hand-btn"
                >
                  <Hand size={18} />
                </Button>
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask ${selectedTeacher.name} anything…`}
                  className="flex-1 bg-muted/40 border-border/40 focus:border-primary/50 font-body text-sm"
                  data-ocid="chat-input"
                />
                <Button
                  type="button"
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="flex-shrink-0 grad-purple text-white border-0 shadow-glow-sm"
                  aria-label="Send message"
                  data-ocid="chat-send-btn"
                >
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 font-body">
                Press Enter to send · ✋ button to raise hand
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Teacher contacts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass shadow-glass border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg">
                Contact Teachers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {TEACHERS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={`p-4 rounded-2xl transition-smooth cursor-pointer ${selectedTeacher.name === t.name ? "bg-primary/10 border border-primary/30" : "bg-muted/40 hover:bg-muted/60 border border-transparent"}`}
                  onClick={() => setSelectedTeacher(t)}
                  data-ocid={`teacher-card-${i}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-bold text-sm text-foreground truncate">
                        {t.name}
                      </p>
                      <Badge className="bg-purple-50 text-primary border-purple-100 text-xs">
                        {t.subject}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${t.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary text-white text-xs font-medium hover:opacity-90 transition-smooth shadow-glow-sm"
                      onClick={(e) => e.stopPropagation()}
                      data-ocid={`call-teacher-${i}`}
                    >
                      <Phone size={13} />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${t.phone}?text=${encodeURIComponent("Hello ma'am, I have a doubt regarding my studies.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-green-500 text-white text-xs font-medium hover:opacity-90 transition-smooth"
                      onClick={(e) => e.stopPropagation()}
                      data-ocid={`whatsapp-teacher-${i}`}
                    >
                      <MessageCircle size={13} />
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
