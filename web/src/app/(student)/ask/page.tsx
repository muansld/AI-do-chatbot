import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "AI에게 묻기" };

/** 피그마 S2 AI에게 묻기 · 카톡 연결 / Mo-2 */
export default function AskPage() {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-10 md:px-0">
      <PageHeader title="AI에게 묻기" description="트랙 가이드북과 운영 지침을 함께 보고 답해요." />
      <ScreenPlaceholder
        figma="S2 · E4 · E5"
        title="대화 · 근거 조항 · 카톡 연결 · 가이드북 다운로드"
        description="AI 서버 연동 전이라 화면만 옮길 예정이에요"
      />
    </div>
  );
}
