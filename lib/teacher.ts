const teacherIds = JSON.parse(process.env.NEXT_PUBLIC_TEACHER_IDS || "[]");

export const isTeacher = (userId?: string | null) => {
  return teacherIds.includes(userId || "");
};
