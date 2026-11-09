/**
 * 도메인 타입 — 화면과 서비스가 함께 쓰는 데이터 모양이에요.
 * 백엔드가 생기면 API 응답을 이 타입으로 바꿔서(매핑해서) 넘겨요.
 */

/** 트랙. 통합(integrated)은 전체 보기예요. */
export type Track = "employment" | "integrated" | "startup";

/** 기수 번호 (예: 13 → 13기) */
export type CohortId = number;

export interface Cohort {
  id: CohortId;
  /** 화면에 보이는 단계 설명. 예) "1단계 · 직무교육" */
  stageLabel: string;
}

/** 근거 문서 종류: 운영 지침(통합) · 트랙 가이드북 */
export type SourceDocumentKind = "operating-guideline" | "track-guidebook";

export interface SourceCitation {
  documentKind: SourceDocumentKind;
  documentTitle: string;
  page: number;
  section?: string;
  quote?: string;
}

export interface Notice {
  id: string;
  title: string;
  summary: string;
  track: Track;
  cohortIds: CohortId[];
  /** ISO 날짜 (YYYY-MM-DD) */
  publishedAt: string;
  isNew?: boolean;
}

export type ScheduleCategory = "project" | "training" | "care" | "holiday" | "milestone";

export interface ScheduleEvent {
  id: string;
  date: string;
  title: string;
  category: ScheduleCategory;
  track: Track;
  cohortId: CohortId;
  timeLabel?: string;
}

export type CompanyProgramType = "practicum" | "internship";
export type CompanyStatus = "screening" | "interview" | "extra-recruit" | "closed";

export interface Company {
  id: string;
  name: string;
  industry: string;
  role: string;
  programType: CompanyProgramType;
  /** 일반 · 패스트 중 어디에 열려 있는지 */
  tracks: ("general" | "fast")[];
  headcount: number;
  location: string;
  status: CompanyStatus;
}

export interface ClubBooth {
  id: string;
  name: string;
  category: string;
  description: string;
  schedule: string;
  memberCount: number;
  recruiting: boolean;
  /** 만든 사람들 페이지로 가는 부스인지 */
  isMakers?: boolean;
}

export interface ClubNews {
  id: string;
  kicker: string;
  title: string;
  dateLabel: string;
  description: string;
  ctaLabel: string;
  tone: "brand" | "dark" | "employment" | "startup";
}
