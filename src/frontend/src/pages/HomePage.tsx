import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  MessageCircle,
  Phone,
  QrCode,
  Trophy,
} from "lucide-react";
import {
  type Variants,
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";
import { Logo } from "../components/Logo";

// ── Data ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Progress Tracking",
    desc: "Monitor your learning journey with animated graphs.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Bot,
    emoji: "🗓️",
    title: "Smart Planner",
    desc: "AI-powered study schedule tailored to your goals.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: QrCode,
    emoji: "✅",
    title: "QR Attendance",
    desc: "Mark attendance in a snap — scan and you're done.",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Doubt Chat",
    desc: "Ask teachers anytime via live interactive chat.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Gamification",
    desc: "Earn streaks, badges, and climb the leaderboard.",
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    icon: BarChart3,
    emoji: "📈",
    title: "Analytics",
    desc: "Visual insights on your growth across all subjects.",
    color: "from-violet-600 to-purple-400",
  },
];

const STATS = [
  { label: "Students", end: 500, suffix: "+", prefix: "" },
  { label: "Pass Rate", end: 95, suffix: "%", prefix: "" },
  { label: "Subjects", end: 10, suffix: "+", prefix: "" },
  { label: "Expert Teachers", end: 3, suffix: "", prefix: "" },
];

const TEACHERS = [
  {
    name: "Sangya Ma'am",
    subject: "English, Science & Social Studies",
    phone: "7355367393",
    initials: "SM",
    color: "from-violet-500 to-purple-600",
    emoji: "📖",
  },
  {
    name: "Shruti Ma'am",
    subject: "Maths, Geography & Commerce",
    phone: "8879102547",
    initials: "SH",
    color: "from-fuchsia-500 to-pink-500",
    emoji: "📐",
  },
  {
    name: "Shristi Ma'am",
    subject: "IT, Computer Science & Hindi",
    phone: "7039375142",
    initials: "SR",
    color: "from-purple-600 to-indigo-500",
    emoji: "💻",
  },
];

const FLOATING_ICONS = [
  { icon: "✏️", x: "8%", y: "20%", delay: 0, duration: 4 },
  { icon: "📚", x: "88%", y: "15%", delay: 0.5, duration: 5 },
  { icon: "🧠", x: "5%", y: "70%", delay: 1, duration: 4.5 },
  { icon: "🎓", x: "92%", y: "65%", delay: 1.5, duration: 3.5 },
  { icon: "⭐", x: "18%", y: "85%", delay: 0.8, duration: 4.2 },
  { icon: "🔢", x: "78%", y: "80%", delay: 0.3, duration: 5.2 },
  { icon: "💡", x: "50%", y: "8%", delay: 1.2, duration: 4.8 },
  { icon: "🏆", x: "35%", y: "90%", delay: 0.6, duration: 3.8 },
];

// ── Animated Counter ────────────────────────────────────────────────

function AnimatedCounter({
  end,
  suffix,
  prefix,
}: {
  end: number;
  suffix: string;
  prefix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 12 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionVal, end, { duration: 1.8 });
    }
  }, [isInView, end, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix, prefix]);

  return (
    <div
      ref={ref}
      className="font-display text-4xl sm:text-5xl font-bold text-white"
    >
      {prefix}0{suffix}
    </div>
  );
}

// ── Feature Card ────────────────────────────────────────────────────

function FeatureCard({
  icon: Icon,
  emoji,
  title,
  desc,
  color,
  index,
}: (typeof FEATURES)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{
        rotateX: 3,
        rotateY: 3,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="glass rounded-2xl p-6 group cursor-pointer hover-glow"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-smooth`}
      >
        <Icon size={22} className="text-white" />
      </div>
      <div className="text-2xl mb-2">{emoji}</div>
      <h3 className="font-display font-bold text-foreground text-lg mb-1">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm font-body leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

// ── Teacher Card ────────────────────────────────────────────────────

function TeacherCard({
  teacher,
  index,
}: { teacher: (typeof TEACHERS)[0]; index: number }) {
  const wa = `https://wa.me/91${teacher.phone}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
      className="glass rounded-2xl p-6 text-center hover-glow"
    >
      <div className="relative inline-block mb-4">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${teacher.color} blur-sm opacity-60`}
        />
        <div
          className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${teacher.color} flex items-center justify-center text-white font-display font-bold text-xl shadow-glow`}
        >
          {teacher.initials}
        </div>
        <span className="absolute -bottom-1 -right-1 text-xl">
          {teacher.emoji}
        </span>
      </div>
      <h3 className="font-display font-bold text-foreground text-lg mb-1">
        {teacher.name}
      </h3>
      <p className="text-muted-foreground text-sm font-body mb-4">
        {teacher.subject}
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
        <Phone size={14} />
        <span className="font-mono">{teacher.phone}</span>
      </div>
      <a href={wa} target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold gap-2"
          data-ocid={`teacher-wa-${index}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white"
            aria-label="WhatsApp"
            role="img"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.565 4.147 1.549 5.881L0 24l6.29-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.005-1.374l-.359-.212-3.731.897.931-3.618-.234-.372A9.818 9.818 0 012.182 12C2.182 6.557 6.557 2.182 12 2.182S21.818 6.557 21.818 12 17.443 21.818 12 21.818z" />
          </svg>
          Chat on WhatsApp
        </Button>
      </a>
    </motion.div>
  );
}

// ── Main Component ──────────────────────────────────────────────────

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-w-0 overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[100svh] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #2e1065 0%, #4c1d95 25%, #7c3aed 55%, #a855f7 80%, #c084fc 100%)",
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, #7c3aed 0%, transparent 60%)",
              "radial-gradient(ellipse at 80% 50%, #a855f7 0%, transparent 60%)",
              "radial-gradient(ellipse at 50% 80%, #c084fc 0%, transparent 60%)",
              "radial-gradient(ellipse at 20% 50%, #7c3aed 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Decorative blobs */}
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 bg-purple-300/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

        {/* Floating education icons */}
        {FLOATING_ICONS.map(({ icon, x, y, delay, duration }) => (
          <motion.div
            key={`${icon}-${x}`}
            className="absolute hidden sm:flex items-center justify-center text-3xl select-none pointer-events-none"
            style={{ left: x, top: y }}
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 text-center lg:text-left"
            >
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs font-medium px-4 py-1.5 backdrop-blur-sm">
                  ✨ Where learning is fun
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl xl:text-7xl font-bold text-white leading-tight mb-4"
              >
                Welcome to
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #e9d5ff, #f3e8ff, #fff, #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Shristi Tutorials
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="font-display text-xl sm:text-2xl xl:text-3xl font-semibold text-purple-200 mb-6"
              >
                Where Learning is{" "}
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block text-white"
                >
                  Fun
                </motion.span>{" "}
                🎉
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-purple-100 text-base sm:text-lg font-body max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                A premium EdTech platform for Class 1–10 students. Track
                progress, plan smarter with AI, and make every study session
                count.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <Link to="/login">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Button
                      size="lg"
                      data-ocid="hero-start-learning"
                      className="bg-white text-primary hover:bg-purple-50 font-bold px-8 shadow-glow text-base w-full sm:w-auto"
                    >
                      Start Learning <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </motion.div>
                </Link>

                <Link to="/login">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      data-ocid="hero-student-login"
                      className="border-white/40 text-white hover:bg-white/15 font-semibold px-8 text-base backdrop-blur-sm w-full sm:w-auto"
                    >
                      Student Login
                    </Button>
                  </motion.div>
                </Link>

                <Link to="/login">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Button
                      size="lg"
                      data-ocid="hero-teacher-login"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 text-base backdrop-blur-sm w-full sm:w-auto"
                    >
                      Teacher Login
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Animated Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              className="flex-shrink-0"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  {/* Owl mascot SVG */}
                  <div className="glass rounded-3xl p-6 shadow-glass-lg w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl" />
                    {/* Animated Owl */}
                    <OWLMascot />
                    <p className="font-display text-lg font-bold text-primary text-center relative z-10">
                      Ready to learn?
                    </p>
                    <p className="text-muted-foreground text-sm font-body text-center relative z-10">
                      Your daily goal awaits!
                    </p>
                    <div className="flex gap-3 mt-1 relative z-10">
                      {["🔥", "⭐", "🏆"].map((e, i) => (
                        <motion.span
                          key={e}
                          className="text-2xl"
                          animate={{ scale: [1, 1.25, 1], rotate: [0, 10, 0] }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {e}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Streak badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 glass-purple rounded-2xl px-3 py-2 shadow-glass border border-purple-300/30"
                >
                  <div className="flex items-center gap-1.5 text-white text-sm font-bold">
                    <span className="text-orange-300 text-base">🔥</span>
                    <span>7-day streak!</span>
                  </div>
                </motion.div>

                {/* Rank badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.5,
                    delay: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-glass"
                >
                  <div className="flex items-center gap-1.5 text-primary text-sm font-bold">
                    <span className="text-yellow-500 text-base">⭐</span>
                    <span>Rank #3</span>
                  </div>
                </motion.div>

                {/* Points badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    delay: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -left-8 glass rounded-xl px-2.5 py-1.5 shadow-glass"
                >
                  <div className="flex items-center gap-1 text-primary text-xs font-bold">
                    <span>🏆</span>
                    <span>1840 pts</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60"
          >
            <span className="text-xs font-body">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section id="features" className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1">
              Platform Features
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto text-base sm:text-lg">
              From AI study planners to live doubt resolution — Shristi
              Tutorials has it all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(ellipse at 0% 50%, #c4b5fd 0%, transparent 60%)",
              "radial-gradient(ellipse at 100% 50%, #e9d5ff 0%, transparent 60%)",
              "radial-gradient(ellipse at 0% 50%, #c4b5fd 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Why Students Love Shristi Tutorials
            </h2>
            <p className="text-purple-200 font-body text-base">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
                className="text-center"
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
                <div className="text-purple-200 text-sm font-body mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS ─────────────────────────────────────── */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1">
              Our Team
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Expert Teachers</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Experienced educators dedicated to making every concept crystal
              clear for every student.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEACHERS.map((t, i) => (
              <TeacherCard key={t.name} teacher={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="bg-background py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(124,58,237,0.2)",
                  "0 0 60px rgba(124,58,237,0.35)",
                  "0 0 30px rgba(124,58,237,0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
                padding: "2px",
              }}
            >
              <div className="rounded-3xl p-10 sm:p-14 glass-dark text-center">
                <Logo size="lg" variant="white" showTagline />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white/80 font-body mt-5 mb-8 text-base sm:text-lg max-w-md mx-auto leading-relaxed"
                >
                  Join 500+ students already learning smarter. Every session
                  brings you one step closer to your dreams.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-block"
                >
                  <Link to="/login">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-purple-50 font-bold px-12 py-6 text-lg shadow-glow"
                      data-ocid="cta-get-started"
                    >
                      Get Started Now 🚀
                    </Button>
                  </Link>
                </motion.div>
                <p className="text-white/40 text-xs font-body mt-4">
                  No fees. No setup. Just learning.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── Owl SVG Mascot ───────────────────────────────────────────────────

function OWLMascot() {
  return (
    <motion.div
      className="relative w-24 h-24"
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-lg"
        aria-label="Shristi Tutorials Owl Mascot"
        role="img"
      >
        <title>Shristi Tutorials Owl Mascot</title>
        {/* Body */}
        <ellipse cx="60" cy="75" rx="32" ry="38" fill="#7c3aed" />
        {/* Head */}
        <circle cx="60" cy="42" r="28" fill="#6d28d9" />
        {/* Ear tufts */}
        <polygon points="38,20 32,6 46,16" fill="#5b21b6" />
        <polygon points="82,20 88,6 74,16" fill="#5b21b6" />
        {/* Eyes outer */}
        <circle cx="49" cy="40" r="12" fill="white" />
        <circle cx="71" cy="40" r="12" fill="white" />
        {/* Eyes inner */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.5, 1],
          }}
          style={{ transformOrigin: "60px 40px" }}
        >
          <circle cx="49" cy="40" r="7" fill="#4c1d95" />
          <circle cx="71" cy="40" r="7" fill="#4c1d95" />
          <circle cx="51" cy="38" r="2.5" fill="white" />
          <circle cx="73" cy="38" r="2.5" fill="white" />
        </motion.g>
        {/* Beak */}
        <polygon points="55,50 65,50 60,58" fill="#fbbf24" />
        {/* Wings */}
        <ellipse
          cx="24"
          cy="80"
          rx="12"
          ry="20"
          fill="#5b21b6"
          transform="rotate(-15 24 80)"
        />
        <ellipse
          cx="96"
          cy="80"
          rx="12"
          ry="20"
          fill="#5b21b6"
          transform="rotate(15 96 80)"
        />
        {/* Belly */}
        <ellipse cx="60" cy="82" rx="18" ry="22" fill="#a78bfa" />
        {/* Feet */}
        <ellipse cx="50" cy="112" rx="8" ry="4" fill="#fbbf24" />
        <ellipse cx="70" cy="112" rx="8" ry="4" fill="#fbbf24" />
        {/* Graduation cap */}
        <rect x="38" y="16" width="44" height="6" rx="2" fill="#1e1b4b" />
        <polygon points="60,8 80,16 60,16 40,16" fill="#1e1b4b" />
        <line
          x1="80"
          y1="16"
          x2="86"
          y2="26"
          stroke="#fbbf24"
          strokeWidth="2"
        />
        <circle cx="86" cy="27" r="3" fill="#fbbf24" />
      </svg>
    </motion.div>
  );
}
