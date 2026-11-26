import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "게시 전 확인" };

/** 피그마 M5-3 새 기수 등록 · 게시 전 확인 */
export default function ScheduleImportPublishPage() {
  return <ScreenPlaceholder figma="M5-3" title="게시 설정 · 교육생 화면 미리보기" />;
}
