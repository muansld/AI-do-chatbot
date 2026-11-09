import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "자주 묻는 질문" };

export default function CenterFaqPage() {
  return (
    <ScreenPlaceholder
      figma="S4-1"
      title="자주 묻는 질문"
      description="매니저가 확인한 답변 · 검색 · 근거 조항"
    />
  );
}
