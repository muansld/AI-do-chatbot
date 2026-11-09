"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { isActivePath, MANAGER_NAV, ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";

/** 매니저 사이드바 (피그마 Manager Sidebar v2) — 메뉴는 3개로 고정이에요 */
export function ManagerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-dvh w-[248px] shrink-0 flex-col gap-2 border-r border-line bg-subtle px-5 py-6">
      <Link href={ROUTES.manager.inbox} className="mb-4 flex flex-col">
        <span className="typo-heading-16">{SITE.name}</span>
        <span className="typo-caption-11 text-fg-secondary">매니저</span>
      </Link>
      <nav aria-label="매니저 메뉴" className="flex flex-col gap-1">
        {MANAGER_NAV.map((item) => {
          const active = isActivePath(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2.5 typo-body-15",
                active
                  ? "bg-brand-subtle typo-body-15-bold text-brand-strong"
                  : "text-fg-secondary hover:bg-muted",
              )}
            >
              {item.label}
            </Link>
          );
        })}
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
