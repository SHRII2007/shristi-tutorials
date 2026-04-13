import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { Identity } from "@icp-sdk/core/agent";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { UserRole, createActor } from "../backend";
import type { StudentProfile, TeacherProfile } from "../backend.d";

interface AuthContextValue {
  identity: Identity | undefined;
  isAuthenticated: boolean;
  principal: string | null;
  login: () => void;
  logout: () => void;
  userRole: UserRole | null;
  isLoading: boolean;
  isInitializing: boolean;
  iiLoginError: string | null;
  studentProfile: StudentProfile | null;
  teacherProfile: TeacherProfile | null;
  registerStudent: (
    name: string,
    className: string,
    email: string,
    rollNumber: string,
    board?: string,
    academicMedium?: string,
    livingAddress?: string,
    schoolName?: string,
    schoolAddress?: string,
    parent1Name?: string,
    parent1Contact?: string,
    parent2Name?: string,
    parent2Contact?: string,
    schoolTiming?: string,
    dateOfBirth?: string,
    gender?: string,
    bloodGroup?: string,
  ) => Promise<{ success: boolean; error?: string }>;
  registerTeacher: (
    name: string,
    subjects: string[],
    contactPhone: string,
    bio: string,
  ) => Promise<{ success: boolean; error?: string }>;
  refetchRole: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const {
    identity,
    login: connectII,
    clear,
    loginStatus,
    loginError: iiError,
    isInitializing,
  } = useInternetIdentity();
  const { actor, isFetching } = useActor(createActor);

  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isRoleLoading, setIsRoleLoading] = useState(false);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(
    null,
  );
  const [teacherProfile, setTeacherProfile] = useState<TeacherProfile | null>(
    null,
  );

  // Track whether we've already queued a login call (during initialization)
  const pendingLoginRef = useRef(false);

  const isAuthenticated = loginStatus === "success" && !!identity;
  const principal = identity?.getPrincipal().toText() ?? null;

  const fetchRoleAndProfile = useCallback(async () => {
    if (!actor || isFetching || !isAuthenticated) return;
    setIsRoleLoading(true);
    try {
      const role = await actor.getMyRole();
      setUserRole(role);

      const profile = await actor.getMyProfile();
      if (profile?.__kind__ === "student") {
        setStudentProfile(profile.student);
        setTeacherProfile(null);
      } else if (profile?.__kind__ === "teacher") {
        setTeacherProfile(profile.teacher);
        setStudentProfile(null);
      }
    } catch {
      setUserRole(UserRole.unregistered);
    } finally {
      setIsRoleLoading(false);
    }
  }, [actor, isFetching, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && actor && !isFetching) {
      fetchRoleAndProfile();
    } else if (!isAuthenticated) {
      setUserRole(null);
      setStudentProfile(null);
      setTeacherProfile(null);
    }
  }, [isAuthenticated, actor, isFetching, fetchRoleAndProfile]);

  // If login was queued during initialization, fire it once ready
  useEffect(() => {
    if (!isInitializing && pendingLoginRef.current && loginStatus === "idle") {
      pendingLoginRef.current = false;
      console.log("[AuthContext] Firing pending login after initialization");
      connectII();
    }
  }, [isInitializing, loginStatus, connectII]);

  // Direct pass-through — NEVER gate on isInitializing, just queue if needed
  const login = useCallback(() => {
    console.log(
      "[AuthContext] login() called — loginStatus:",
      loginStatus,
      "isInitializing:",
      isInitializing,
    );

    if (isInitializing) {
      // Queue the login to fire once initialization completes
      console.log("[AuthContext] Queuing login until initialization completes");
      pendingLoginRef.current = true;
      return;
    }

    // Always call connectII regardless of any other state
    connectII();
  }, [connectII, loginStatus, isInitializing]);

  const logout = useCallback(() => {
    clear();
    setUserRole(null);
    setStudentProfile(null);
    setTeacherProfile(null);
  }, [clear]);

  const registerStudent = useCallback(
    async (
      name: string,
      className: string,
      email: string,
      rollNumber: string,
      _board?: string,
      _academicMedium?: string,
      _livingAddress?: string,
      _schoolName?: string,
      _schoolAddress?: string,
      _parent1Name?: string,
      _parent1Contact?: string,
      _parent2Name?: string,
      _parent2Contact?: string,
      _schoolTiming?: string,
      _dateOfBirth?: string,
      _gender?: string,
      _bloodGroup?: string,
    ) => {
      if (!actor) return { success: false, error: "Not connected" };
      try {
        const result = await actor.registerStudent(
          name,
          className,
          email,
          rollNumber,
          _board ?? null,
          _academicMedium ?? null,
          _livingAddress ?? null,
          _schoolName ?? null,
          _schoolAddress ?? null,
          _parent1Name ?? null,
          _parent1Contact ?? null,
          _parent2Name ?? null,
          _parent2Contact ?? null,
          _schoolTiming ?? null,
          _dateOfBirth ?? null,
          _gender ?? null,
          _bloodGroup ?? null,
        );
        if (result.__kind__ === "ok") {
          setStudentProfile(result.ok);
          setUserRole(UserRole.student);
          return { success: true };
        }
        return { success: false, error: result.err };
      } catch (e) {
        return { success: false, error: String(e) };
      }
    },
    [actor],
  );

  const registerTeacher = useCallback(
    async (
      name: string,
      subjects: string[],
      contactPhone: string,
      bio: string,
    ) => {
      if (!actor) return { success: false, error: "Not connected" };
      try {
        const result = await actor.registerTeacher(
          name,
          subjects,
          contactPhone,
          bio,
        );
        if (result.__kind__ === "ok") {
          setTeacherProfile(result.ok);
          setUserRole(UserRole.teacher);
          return { success: true };
        }
        return { success: false, error: result.err };
      } catch (e) {
        return { success: false, error: String(e) };
      }
    },
    [actor],
  );

  const isLoading =
    loginStatus === "logging-in" ||
    (isAuthenticated && (isFetching || isRoleLoading));

  const iiLoginError = iiError?.message ?? null;

  return (
    <AuthContext.Provider
      value={{
        identity,
        isAuthenticated,
        principal,
        login,
        logout,
        userRole,
        isLoading,
        isInitializing,
        iiLoginError,
        studentProfile,
        teacherProfile,
        registerStudent,
        registerTeacher,
        refetchRole: fetchRoleAndProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
