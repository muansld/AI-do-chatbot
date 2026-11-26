import Link from "next/link";
import { Suspense } from "react";

import { NavLinks } from "@/components/layout/NavLinks";
import { MANAGER_NAV, ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";

const linkClass = {
  base: "rounded-lg px-3 py-2.5 typo-body-15",
  active: "bg-brand-subtle typo-body-15-bold text-brand-strong",
  idle: "text-fg-secondary hover:bg-muted",
};

/** 매니저 사이드바 — 1단계 메뉴는 질문 분석 · 일정 2개예요 */
export function ManagerSidebar() {
  return (
    <aside className="sticky top-0 flex h-dvh w-[248px] shrink-0 flex-col gap-2 border-r border-line bg-subtle px-5 py-6">
      <Link href={ROUTES.manager.insights} className="mb-4 flex flex-col">
        <span className="typo-heading-16">{SITE.name}</span>
        <span className="typo-caption-11 text-fg-secondary">매니저</span>
      </Link>
      <nav aria-label="매니저 메뉴" className="flex flex-col gap-1">
        {/* 현재 경로는 요청 때 알 수 있어서, 미리 만든 화면에는 활성 표시 없이 먼저 보여요 */}
        <Suspense fallback={<NavLinks items={MANAGER_NAV} classNames={linkClass} />}>
          <NavLinks items={MANAGER_NAV} classNames={linkClass} withActive />
        </Suspense>
      </nav>
      <div className="mt-auto flex items-center justify-between typo-caption-12">
        <span className="text-fg-secondary">로그인 중</span>
        <Link href={ROUTES.manager.login} className="text-fg-tertiary hover:text-fg-secondary">
          로그아웃
        </Link>
      </div>
    </aside>
  );
}
