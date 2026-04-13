import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface HomeworkSubmission {
    id: bigint;
    status: SubmissionStatus;
    homeworkId: bigint;
    studentPrincipal: Principal;
    submittedAt: Timestamp;
    submittedContent: string;
}
export type ApiResult_7 = {
    __kind__: "ok";
    ok: Array<HomeworkSubmission>;
} | {
    __kind__: "err";
    err: string;
};
export type ApiResult_3 = {
    __kind__: "ok";
    ok: StudentProfile;
} | {
    __kind__: "err";
    err: string;
};
export type ApiResult = {
    __kind__: "ok";
    ok: TimetableEntry;
} | {
    __kind__: "err";
    err: string;
};
export type ApiResult_2 = {
    __kind__: "ok";
    ok: TeacherProfile;
} | {
    __kind__: "err";
    err: string;
};
export interface TimetableEntry {
    id: bigint;
    startTime: string;
    subject: string;
    endTime: string;
    dayOfWeek: string;
    teacherPrincipal: Principal;
    className: string;
}
export interface SubjectProgress {
    studentId: StudentId;
    subject: string;
    weeklyScores: Array<bigint>;
    currentPercentage: bigint;
}
export interface StudyTask {
    id: string;
    title: string;
    studentId: StudentId;
    subject: string;
    completed: boolean;
    dueDate: DateText;
    priority: string;
}
export type StudentId = string;
export interface TeacherProfile {
    bio: string;
    principal: Principal;
    subjects: Array<string>;
    name: string;
    contactPhone: string;
}
export type ApiResult_6 = {
    __kind__: "ok";
    ok: Announcement;
} | {
    __kind__: "err";
    err: string;
};
export type ApiResult_5 = {
    __kind__: "ok";
    ok: HomeworkAssignment;
} | {
    __kind__: "err";
    err: string;
};
export interface StudentProfile {
    parent2Contact?: string;
    principal: Principal;
    dateOfBirth?: string;
    name: string;
    parent1Name?: string;
    academicMedium?: string;
    email: string;
    schoolAddress?: string;
    bloodGroup?: string;
    rollNumber: string;
    gender?: string;
    schoolTiming?: string;
    board?: string;
    livingAddress?: string;
    parent1Contact?: string;
    className: string;
    parent2Name?: string;
    schoolName?: string;
}
export interface HomeworkAssignment {
    id: bigint;
    title: string;
    subject: string;
    createdAt: Timestamp;
    dueDate: string;
    description: string;
    assignedClasses: Array<string>;
    teacherPrincipal: Principal;
}
export type ApiResult_8 = {
    __kind__: "ok";
    ok: Array<StudentProfile>;
} | {
    __kind__: "err";
    err: string;
};
export type ApiResult_1 = {
    __kind__: "ok";
    ok: HomeworkSubmission;
} | {
    __kind__: "err";
    err: string;
};
export type DateText = string;
export interface Announcement {
    id: bigint;
    title: string;
    body: string;
    publishedAt: Timestamp;
    targetClasses: Array<string>;
    teacherPrincipal: Principal;
}
export interface ChatMessage {
    id: bigint;
    content: string;
    subject: string;
    sentAt: Timestamp;
    senderPrincipal: Principal;
    senderName: string;
}
export interface StudyStreak {
    studentId: StudentId;
    lastStudyDate: DateText;
    longestStreak: bigint;
    currentStreak: bigint;
}
export interface AttendanceRecord {
    studentId: StudentId;
    markedVia: string;
    present: boolean;
    date: DateText;
}
export type ApiResult_4 = {
    __kind__: "ok";
    ok: ChatMessage;
} | {
    __kind__: "err";
    err: string;
};
export interface Student {
    id: StudentId;
    subjects: Array<string>;
    name: string;
    className: string;
    streakCount: bigint;
    avatar: string;
}
export enum SubmissionStatus {
    graded = "graded",
    submitted = "submitted",
    pending = "pending"
}
export enum UserRole {
    teacher = "teacher",
    unregistered = "unregistered",
    student = "student"
}
export interface backendInterface {
    completeTask(taskId: string): Promise<boolean>;
    getAnnouncements(className: string): Promise<Array<Announcement>>;
    getAttendance(studentId: string): Promise<Array<AttendanceRecord>>;
    getHomeworkByClass(className: string): Promise<Array<HomeworkAssignment>>;
    getMessages(subject: string): Promise<Array<ChatMessage>>;
    getMyProfile(): Promise<{
        __kind__: "teacher";
        teacher: TeacherProfile;
    } | {
        __kind__: "student";
        student: StudentProfile;
    } | null>;
    getMyRole(): Promise<UserRole>;
    getStreak(studentId: string): Promise<StudyStreak | null>;
    getStudentList(): Promise<ApiResult_8>;
    getStudentProfile(studentId: string): Promise<Student | null>;
    getStudyTasks(studentId: string): Promise<Array<StudyTask>>;
    getSubjectProgress(studentId: string): Promise<Array<SubjectProgress>>;
    getSubmissions(homeworkId: bigint): Promise<ApiResult_7>;
    getTimetable(className: string): Promise<Array<TimetableEntry>>;
    listAllTeachers(): Promise<Array<TeacherProfile>>;
    markAttendance(studentId: string, date: string, via: string): Promise<boolean>;
    postAnnouncement(title: string, body: string, targetClasses: Array<string>): Promise<ApiResult_6>;
    postHomework(subject: string, title: string, description: string, dueDate: string, assignedClasses: Array<string>): Promise<ApiResult_5>;
    postMessage(content: string, subject: string): Promise<ApiResult_4>;
    registerStudent(name: string, className: string, email: string, rollNumber: string, board: string | null, academicMedium: string | null, livingAddress: string | null, schoolName: string | null, schoolAddress: string | null, parent1Name: string | null, parent1Contact: string | null, parent2Name: string | null, parent2Contact: string | null, schoolTiming: string | null, dateOfBirth: string | null, gender: string | null, bloodGroup: string | null): Promise<ApiResult_3>;
    registerTeacher(name: string, subjects: Array<string>, contactPhone: string, bio: string): Promise<ApiResult_2>;
    seedDemoData(): Promise<void>;
    seedTeachers(): Promise<void>;
    submitHomework(homeworkId: bigint, submittedContent: string): Promise<ApiResult_1>;
    updateTimetable(entry: TimetableEntry): Promise<ApiResult>;
}
