import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "분석 결과 확인" };

/** 피그마 M5-2 새 기수 등록 · 분석 결과 확인 (원문 대조) */
export default function ScheduleImportReviewPage() {
  return <ScreenPlaceholder figma="M5-2" title="뽑은 일정 표 · 확인 필요 표시 · 원문 쪽 대조" />;
}
