import type { Metadata } from "next";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";

export const metadata: Metadata = { title: "서류·양식" };

export default function CenterFormsPage() {
  return (
    <ScreenPlaceholder
      figma="S4"
      title="서류·양식"
      description="[서식15] 출결 경위서 등 서식 목록"
    />
  );
}
