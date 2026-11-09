import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "일정" };

export default function ManagerSchedulePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="일정" />
      <ScreenPlaceholder figma="M3" title="기수 선택 · 월 달력 · 일정 고치기" />
    </div>
  );
}
