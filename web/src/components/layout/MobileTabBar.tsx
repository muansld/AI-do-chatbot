"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { isActivePath, STUDENT_NAV } from "@/lib/constants/routes";

/** 모바일 하단 탭 바 (피그마 Mobile/Tab Bar) — 768px 미만에서만 보여요 */
export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="하단 메뉴"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex">
        {STUDENT_NAV.map((item) => {
          const active = isActivePath(pathname, item);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 typo-caption-12",
                  active ? "text-brand" : "text-fg-tertiary",
                )}
              >
                <span
                  aria-hidden
                  className={cn("size-1.5 rounded-full", active ? "bg-brand" : "bg-transparent")}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
