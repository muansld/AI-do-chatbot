import type { Metadata } from "next";

import { ManagerSidebar } from "@/components/layout/ManagerSidebar";

export const metadata: Metadata = { robots: { index: false } };

/** 매니저 화면 공통 틀: 사이드바(질문함 · 공지·자료 · 일정) + 본문 */
export default function ManagerConsoleLayout({ children }: LayoutProps<"/manager">) {
  return (
    <div className="flex min-h-dvh bg-subtle">
      <ManagerSidebar />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}
