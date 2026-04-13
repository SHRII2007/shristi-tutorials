import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  QrCode,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { UserRole } from "../backend";
import { useAuth } from "../context/AuthContext";
import { FloatingBackground } from "./FloatingBackground";
import { Logo } from "./Logo";

const STUDENT_NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/progress", label: "Progress", icon: TrendingUp },
  { to: "/planner", label: "Planner", icon: Calendar },
  { to: "/attendance", label: "Attendance", icon: QrCode },
  { to: "/doubt", label: "Doubts", icon: MessageCircle },
];

const TEACHER_NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/teacher", label: "Dashboard", icon: LayoutDashboard },
  { to: "/teacher/students", label: "Students", icon: Users },
  { to: "/teacher/homework", label: "Homework", icon: BookOpen },
  { to: "/teacher/timetable", label: "Timetable", icon: Calendar },
  { to: "/teacher/announcements", label: "Announcements", icon: GraduationCap },
];

function NavLink({
  to,
  label,
  icon: Icon,
  onClick,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      onClick={onClick}
      data-ocid={`nav-${label.toLowerCase().replace(" ", "-")}`}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg font-body text-sm font-medium transition-smooth
        ${
          isActive
            ? "grad-purple text-white shadow-glow-sm"
            : "text-muted-foreground hover:text-primary hover:bg-purple-50"
        }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </Link>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, userRole, studentProfile, teacherProfile, logout } =
    useAuth();
  const navigate = useNavigate();

  const isTeacher = userRole === UserRole.teacher;
  const navLinks = isTeacher ? TEACHER_NAV : STUDENT_NAV;

  const displayName = isTeacher ? teacherProfile?.name : studentProfile?.name;

  const initials = displayName
    ? displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "ST";

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <FloatingBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-filter backdrop-blur-md border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="md" showTagline={false} />
          </Link>

          {/* Center tagline – hidden on mobile */}
          <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-purple-500 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
            <span>✨</span>
            <span className="font-body">Where learning is fun</span>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-purple-50 transition-smooth relative"
                aria-label="Notifications"
                data-ocid="nav-notifications"
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              </button>
            )}

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                {/* Role badge */}
                {userRole && (
                  <span className="hidden sm:inline-block text-xs font-body font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    {isTeacher ? "👩‍🏫 Teacher" : "🎓 Student"}
                  </span>
                )}

                {/* Avatar with name */}
                <div
                  className="flex items-center gap-2 group cursor-pointer"
                  data-ocid="nav-user-menu"
                >
                  <div className="w-9 h-9 rounded-full grad-purple flex items-center justify-center text-white text-sm font-bold shadow-glow-sm">
                    {initials}
                  </div>
                  {displayName && (
                    <span className="hidden md:block text-sm font-body font-medium text-foreground max-w-[120px] truncate">
                      {displayName.split(" ")[0]}
                    </span>
                  )}
                </div>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  data-ocid="nav-logout"
                  className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
                  aria-label="Logout"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                data-ocid="nav-login"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg grad-purple text-white text-sm font-display font-semibold shadow-glow-sm transition-smooth hover:opacity-90"
              >
                <GraduationCap size={16} />
                Login
              </Link>
            )}

            {/* Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-purple-50 transition-smooth"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              data-ocid="nav-hamburger"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-out nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full z-50 w-72 bg-card shadow-glass-lg border-l border-border lg:hidden flex flex-col"
            >
              <div className="p-5 border-b border-border flex items-center justify-between">
                <Logo size="sm" showTagline />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-purple-50 text-muted-foreground"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* User info in mobile */}
              {isAuthenticated && displayName && (
                <div className="px-4 py-3 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grad-purple flex items-center justify-center text-white text-sm font-bold shadow-glow-sm">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-display font-semibold text-foreground truncate max-w-[160px]">
                      {displayName}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {isTeacher ? "Teacher" : "Student"}
                    </p>
                  </div>
                </div>
              )}

              <nav
                className="flex-1 p-4 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    {...link}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}

                {isAuthenticated && (
                  <button
                    type="button"
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    data-ocid="mobile-logout"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-body text-destructive hover:bg-destructive/10 transition-smooth mt-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                )}

                {!isAuthenticated && (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    data-ocid="mobile-login"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-body font-semibold grad-purple text-white mt-2"
                  >
                    <GraduationCap size={16} />
                    Login
                  </Link>
                )}
              </nav>
              <div className="p-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center font-body">
                  ✨ Where learning is fun
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo size="sm" showTagline={false} />
          <p className="text-xs text-muted-foreground font-body text-center">
            ✨{" "}
            <span className="text-purple-500 font-medium">
              Where learning is fun
            </span>{" "}
            – Empowering every student to shine
          </p>
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
