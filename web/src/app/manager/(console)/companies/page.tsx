import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "실습·인턴십 기업 리스트" };

export default function ManagerCompaniesPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="실습·인턴십 기업 리스트" />
      <ScreenPlaceholder figma="M2-3" title="노션 연결 · 항목 맞추기 · 공개 설정" />
    </div>
  );
}
