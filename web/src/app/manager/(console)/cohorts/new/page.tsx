import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "새 기수 시작" };

export default function ManagerCohortsNewPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="새 기수 시작" />
      <ScreenPlaceholder figma="M2-2" title="문서 3종 → 일정 · 시간표 · 서식 · 규정 자동 세팅" />
    </div>
  );
}
