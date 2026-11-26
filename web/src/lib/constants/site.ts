import type { GuidebookId, ScheduleView, Scope, Track } from "@/types/domain";

export const SITE = {
  name: "탐나는 AI:DO",
  tagline: "탐나는 인재 길잡이",
  /** 캐릭터 호칭 — 화면 문구에서는 항상 이 값을 써요 */
  character: "두(DO)",
  description:
    "출결, 병가, 바우처, 상벌점까지 센터 가이드북을 기준으로 바로 알려 드려요. 제주더큰내일센터 탐나는인재를 위한 AI 길잡이예요.",
  footer: "탐나는 AI:DO · 더큰내일센터 탐나는 인재 AI 서비스",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const TRACK_LABEL: Record<Track, string> = {
  employment: "취업",
  startup: "창업",
};

export const SCOPE_LABEL: Record<Scope, string> = {
  ...TRACK_LABEL,
  common: "공통",
};

/** 질문창 범위 칩 순서 (피그마 Composer v3 · Track Segment) */
export const SCOPE_ORDER: Scope[] = ["employment", "startup", "common"];

/** 센터 일정 화면 드롭다운 (피그마 S3) — 기본은 센터 일정 */
export const SCHEDULE_VIEW_LABEL: Record<ScheduleView, string> = {
  center: "센터 일정",
  employment: "취업",
  startup: "창업",
};

export const GUIDEBOOK_LABEL: Record<GuidebookId, string> = {
  "operating-guideline": "운영 지침",
  employment: "취업트랙 가이드북",
  startup: "창업트랙 가이드북",
  common: "공통교육과정 가이드북",
};
