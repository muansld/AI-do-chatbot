"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { isActivePath, STUDENT_NAV } from "@/lib/constants/routes";

/** 데스크톱 상단 메뉴 5개 (피그마 GNB Link) */
export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
      {STUDENT_NAV.map((item) => {
        const active = isActivePath(pathname, item);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 typo-body-15-bold transition-colors",
              active ? "bg-brand-subtle text-brand-strong" : "text-fg hover:bg-subtle",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
