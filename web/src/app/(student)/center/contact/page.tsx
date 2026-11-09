import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "문의 방법" };

export default function CenterContactPage() {
  return (
    <ScreenPlaceholder
      figma="S4"
      title="문의 방법"
      description="1:1 카톡 · 트랙 단톡방 · 담당 매니저"
    />
  );
}
