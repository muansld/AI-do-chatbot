import { Suspense } from "react";

import { NavLinks } from "@/components/layout/NavLinks";
import { STUDENT_NAV } from "@/lib/constants/routes";

const linkClass = {
  base: "rounded-full px-4 py-2 typo-body-15-bold transition-colors",
  active: "bg-brand-subtle text-brand-strong",
  idle: "text-fg hover:bg-subtle",
};

/** 헤더 오른쪽 메뉴 (피그마 Header/Nav Item v3 · Default / Active) */
export function MainNav() {
  return (
    <nav aria-label="주요 메뉴" className="flex items-center gap-1">
      <Suspense fallback={<NavLinks items={STUDENT_NAV} classNames={linkClass} />}>
        <NavLinks items={STUDENT_NAV} classNames={linkClass} withActive />
      </Suspense>
    </nav>
  );
}
