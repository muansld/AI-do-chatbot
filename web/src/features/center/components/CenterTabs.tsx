"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { CENTER_TABS, isActivePath } from "@/lib/constants/routes";

/** 센터 안내 탭: 공지 · 실습·인턴십 기업 · 자주 묻는 질문 · 서류·양식 · 문의 방법 */
export function CenterTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="센터 안내 메뉴"
      className="-mx-4 overflow-x-auto border-b border-line px-4 md:mx-0 md:px-0"
    >
      <ul className="flex gap-6 whitespace-nowrap">
        {CENTER_TABS.map((tab) => {
          const active = isActivePath(pathname, tab);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block border-b-2 py-3 typo-body-15",
                  active
                    ? "border-fg typo-body-15-bold text-fg"
                    : "border-transparent text-fg-tertiary hover:text-fg-secondary",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
