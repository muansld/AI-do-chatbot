import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "만든 사람들" };

/** 피그마 S6-1 탐나는 AI:DO를 만든 사람들 */
export default function MakersPage() {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-10 md:px-0">
      <PageHeader
        title="탐나는 AI:DO를 만든 사람들"
        description="센터의 불편함을, 센터 사람들이 직접 풀었어요"
      />
      <ScreenPlaceholder figma="S6-1" title="멤버 카드 목록" />
    </div>
  );
}
