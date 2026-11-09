import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "가이드북 확인" };

export default function ManagerNoticesReviewPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="가이드북 확인" />
      <ScreenPlaceholder figma="M2-1" title="AI가 확신하지 못한 곳만 고르기" />
    </div>
  );
}
