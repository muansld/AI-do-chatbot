import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { getQuestionInsights } from "@/services/insights";

export const metadata: Metadata = { title: "질문 상세" };

/** 빌드 때 예시 질문 상세 페이지를 미리 만들어 둬요 */
export async function generateStaticParams() {
  const data = await getQuestionInsights({ period: "7d" });
  return [...data.topQuestions, ...data.unanswered].map((q) => ({ questionId: q.id }));
}

/** 피그마 M4-1 질문 분석 · 질문 상세 · 처리 패널 */
export default function ManagerInsightDetailPage() {
  return <ScreenPlaceholder figma="M4-1" title="질문 상세 · 비슷한 질문 · 처리 패널" />;
}
