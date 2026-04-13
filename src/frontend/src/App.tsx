import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { UserRole } from "./backend";
import { Layout } from "./components/Layout";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProgressPage = lazy(() => import("./pages/ProgressPage"));
const PlannerPage = lazy(() => import("./pages/PlannerPage"));
const AttendancePage = lazy(() => import("./pages/AttendancePage"));
const DoubtPage = lazy(() => import("./pages/DoubtPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const TeacherDashboardPage = lazy(() => import("./pages/TeacherDashboardPage"));
const TeacherHomeworkPage = lazy(() => import("./pages/teacher/HomeworkPage"));
const TeacherTimetablePage = lazy(
  () => import("./pages/teacher/TimetablePage"),
);
const TeacherStudentsPage = lazy(() => import("./pages/teacher/StudentsPage"));
const TeacherAnnouncementsPage = lazy(
  () => import("./pages/teacher/AnnouncementsPage"),
);

const PageLoader = () => (
  <div className="flex flex-col gap-4 p-8 max-w-5xl mx-auto">
    <Skeleton className="h-12 w-1/2 rounded-xl" />
    <Skeleton className="h-6 w-3/4 rounded-lg" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-40 rounded-2xl" />
      ))}
    </div>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <Suspense fallback={<PageLoader />}>{children}</Suspense>
  </motion.div>
);

// Auth guard wrapper component
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, userRole } = useAuth();

  if (isLoading) return <PageLoader />;
  if (!isAuthenticated || userRole === UserRole.unregistered) {
    return (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    );
  }
  if (userRole === null) {
    return (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    );
  }
  return <>{children}</>;
}

// Route tree
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <PageWrapper>
      <HomePage />
    </PageWrapper>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <DashboardPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const progressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/progress",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <ProgressPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const plannerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/planner",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <PlannerPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const attendanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/attendance",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <AttendancePage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const doubtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/doubt",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <DoubtPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const teacherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <TeacherDashboardPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const teacherHomeworkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher/homework",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <TeacherHomeworkPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const teacherTimetableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher/timetable",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <TeacherTimetablePage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const teacherStudentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher/students",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <TeacherStudentsPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const teacherAnnouncementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teacher/announcements",
  component: () => (
    <AuthGuard>
      <PageWrapper>
        <TeacherAnnouncementsPage />
      </PageWrapper>
    </AuthGuard>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <PageWrapper>
      <LoginPage />
    </PageWrapper>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  progressRoute,
  plannerRoute,
  attendanceRoute,
  doubtRoute,
  teacherRoute,
  teacherHomeworkRoute,
  teacherTimetableRoute,
  teacherStudentsRoute,
  teacherAnnouncementsRoute,
  loginRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 30_000, retry: 1 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </QueryClientProvider>
  );
}
