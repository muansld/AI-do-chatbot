import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "질문함" };

export default function ManagerInboxPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="질문함" />
      <ScreenPlaceholder
        figma="M1"
        title="기수 · 트랙 필터 · 답변 필요 / 확정 답변 · 카톡용 답장 복사"
      />
    </div>
  );
}
