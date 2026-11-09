import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "공지·자료" };

export default function ManagerNoticesPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="공지·자료" />
      <ScreenPlaceholder figma="M2" title="공지 쓰기(대상 기수) · PDF 올리기 · 올린 자료" />
    </div>
  );
}
