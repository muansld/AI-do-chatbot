import { questionInsights } from "@/mocks/insights";
import type { QuestionInsights } from "@/types/domain";

export type InsightPeriod = "7d" | "30d" | "cohort";

/**
 * 질문 분석 (매니저 · 1단계, 보기 전용)
 * 나중에 질문 기록(app.question_logs) · 피드백 집계 API로 바꿔요. 기간 · 트랙 · 기수 필터도 그때 서버로 넘겨요.
 */
export async function getQuestionInsights(_filter?: {
  period?: InsightPeriod;
}): Promise<QuestionInsights> {
  return questionInsights;
}
