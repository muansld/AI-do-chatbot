/**
 * 도메인 타입 — 화면과 서비스가 함께 쓰는 데이터 모양이에요.
 * 백엔드가 생기면 API 응답을 이 타입으로 바꿔서(매핑해서) 넘겨요.
 */

/* ───────────── 기본 ───────────── */

/** 트랙 — 교육생이 실제로 속한 과정은 취업 · 창업 두 가지뿐이에요. */
export type Track = "employment" | "startup";

/**
 * 범위 — 질문 · 일정 · 답변이 누구에게 해당하는지예요.
 * 트랙 하나(취업 · 창업) 또는 공통(두 트랙 모두: 공통교육과정 · 운영 지침 · 센터 행사).
 * 질문창의 '취업 · 창업 · 공통' 칩이 이 값이에요. 공통을 고르면 트랙 구분 없이 전체를 봐요.
 */
export type Scope = Track | "common";

/** 기수 번호 (예: 13 → 13기) */
export type CohortId = number;

export interface Cohort {
  id: CohortId;
  /** 화면에 보이는 단계 설명. 예) "1단계 · 직무교육" */
  stageLabel: string;
}

/* ───────────── 가이드북 · 근거 ───────────── */

/** 답변 근거가 되는 문서: 운영 지침 + 취업 · 창업 · 공통교육과정 가이드북 */
export type GuidebookId = "operating-guideline" | "employment" | "startup" | "common";

export interface Guidebook {
  id: GuidebookId;
  cohortId: CohortId;
  title: string;
  pageCount: number;
  /** PDF 주소. 아직 파일이 없으면 비워 둬요 */
  fileUrl?: string;
}

/** 답변 문장의 근거 (피그마 Chat/Source Box) */
export interface SourceCitation {
  guidebookId: GuidebookId;
  page: number;
  /** 예) "4.1 출결 운영 기준 · 〈표 2-2〉" */
  section?: string;
  quote?: string;
}

/* ───────────── AI에게 묻기 (S2) ───────────── */

/**
 * 답변 상태 — 한 컴포넌트가 이 값으로 화면을 갈라 보여 줘요.
 * - streaming: 두(DO)가 가이드북을 찾는 중 (S2-2)
 * - answered: 근거와 함께 답함 (S2 · S2-5 ~ S2-8 · S2-10)
 * - no-evidence: 가이드북에서 근거를 못 찾음 (S2-4)
 * - no-data: 그 기수 자료가 아직 없음 (S2-9)
 */
export type AnswerStatus = "streaming" | "answered" | "no-evidence" | "no-data";

export interface UserMessage {
  id: string;
  role: "user";
  text: string;
}

export interface AssistantMessage {
  id: string;
  role: "assistant";
  status: AnswerStatus;
  text: string;
  citations: SourceCitation[];
}

export type ChatMessage = UserMessage | AssistantMessage;

/** 대화 하나 = 사이드바 '최근 질문' 한 줄 */
export interface ChatThread {
  id: string;
  /** 사이드바에 보이는 짧은 제목 (한 줄, 넘치면 끝을 흐리게) */
  title: string;
  cohortId: CohortId;
  scope: Scope;
  /** ISO 날짜 · 시간 */
  updatedAt: string;
  messages: ChatMessage[];
}

/* ───────────── 센터 일정 (S3) ───────────── */

/** 센터 일정 화면의 보기: 센터 일정(기본) · 취업 · 창업 */
export type ScheduleView = "center" | "employment" | "startup";

export type ScheduleCategory = "project" | "training" | "care" | "holiday" | "milestone";

export interface ScheduleEvent {
  id: string;
  date: string;
  title: string;
  category: ScheduleCategory;
  scope: Scope;
  cohortId: CohortId;
  timeLabel?: string;
}

/* ───────────── 매니저 · 질문 분석 (M4) ───────────── */

/** 질문 주제 분류 (질문 분석 화면) */
export type QuestionKind = "rule" | "schedule" | "personal-record" | "out-of-scope";

/** 두(DO)가 답하지 못한 이유 */
export type HandoffReason = "no-source" | "ambiguous" | "negative-feedback";

export interface QuestionCluster {
  id: string;
  /** 비슷한 질문을 묶은 대표 질문 */
  representative: string;
  topic: string;
  scope: Scope;
  count: number;
}

export interface UnansweredQuestion {
  id: string;
  question: string;
  reason: HandoffReason;
  scope: Scope;
  /** ISO 날짜 · 시간 */
  askedAt: string;
}

export interface QuestionInsights {
  totalQuestions: number;
  weekOverWeekPercent: number;
  answeredRate: number;
  handoffCount: number;
  handoffBreakdown: { noSource: number; ambiguous: number };
  negativeFeedback: { count: number; total: number };
  topQuestions: QuestionCluster[];
  kindRatio: Record<QuestionKind, number>;
  scopeRatio: Record<Scope, number>;
  unanswered: UnansweredQuestion[];
}
