import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "새 기수 등록" };

/** 피그마 M5-1 새 기수 등록 · 기수 정보 + 가이드북 올리기 */
export default function ScheduleImportPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="새 기수 등록" description="가이드북 PDF를 올리면 일정을 뽑아 정리해요." />
      <ScreenPlaceholder figma="M5-1" title="기수 정보 · 가이드북 3종 올리기" />
    </div>
  );
}
