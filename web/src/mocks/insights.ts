/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { QuestionInsights } from "@/types/domain";

// 숫자와 질문은 예시예요 (AIDO 시안 3-7 질문 분석 기준). 실제로는 질문 기록(app.question_logs)과 피드백에서 집계해요.
export const questionInsights: QuestionInsights = {
  totalQuestions: 1284,
  weekOverWeekPercent: 12,
  answeredRate: 81,
  handoffCount: 162,
  handoffBreakdown: { noSource: 118, ambiguous: 44 },
  negativeFeedback: { count: 16, total: 380 },
  topQuestions: [
    {
      id: "q-fingerprint",
      representative: "지문 찍는 걸 깜빡했어요",
      topic: "출결",
      track: "integrated",
      count: 142,
    },
    {
      id: "q-sick-leave",
      representative: "병가는 어떻게 쓰나요?",
      topic: "병가 · 휴가",
      track: "integrated",
      count: 98,
    },
    {
      id: "q-voucher-shop",
      representative: "이 가게에서 바우처 써도 돼요?",
      topic: "훈련수당",
      track: "integrated",
      count: 87,
    },
    {
      id: "q-outside",
      representative: "외부활동 신청은 어떻게 해요?",
      topic: "외부활동",
      track: "integrated",
      count: 64,
    },
    {
      id: "q-late-penalty",
      representative: "무단지각하면 벌점 몇 점이에요?",
      topic: "상벌점",
      track: "integrated",
      count: 51,
    },
    {
      id: "q-fast-track",
      representative: "패스트트랙이랑 일반트랙 차이가 뭐예요?",
      topic: "트랙",
      track: "employment",
      count: 37,
    },
  ],
  kindRatio: { rule: 72, schedule: 15, "personal-record": 8, "out-of-scope": 5 },
  trackRatio: { integrated: 61, employment: 24, startup: 15 },
  unanswered: [
    {
      id: "u-1",
      question: "외부활동 중인 날에도 지문을 찍어야 하나요?",
      reason: "no-source",
      track: "integrated",
      askedAt: "2026-11-09T10:42:00+09:00",
    },
    {
      id: "u-2",
      question: "병가 쓰면 개인사유 시간도 같이 줄어드나요?",
      reason: "ambiguous",
      track: "integrated",
      askedAt: "2026-11-09T09:15:00+09:00",
    },
    {
      id: "u-3",
      question: "카페에서 노트북 충전기 사도 바우처 돼요?",
      reason: "negative-feedback",
      track: "integrated",
      askedAt: "2026-11-08T17:30:00+09:00",
    },
    {
      id: "u-4",
      question: "실습 기간에도 월 2회 센터에 와야 해요?",
      reason: "no-source",
      track: "employment",
      askedAt: "2026-11-08T14:02:00+09:00",
    },
  ],
};
