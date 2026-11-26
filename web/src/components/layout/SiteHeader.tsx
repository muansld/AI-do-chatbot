import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";

/** 교육생 헤더 (피그마 Header/GNB v3): 왼쪽 로고(= 홈) · 오른쪽 '센터 일정' */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:h-header md:px-10">
        <Link href={ROUTES.home} className="flex shrink-0 items-center gap-2">
          {/* TODO: 피그마 Logo/AI Buddy AppIcon 을 SVG로 내보내 public/ 에 두고 바꿔요 */}
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-lg bg-brand typo-caption-12-medium text-fg-inverse"
          >
            DO
          </span>
          <span className="flex flex-col">
            <span className="typo-heading-16">{SITE.name}</span>
            <span className="hidden typo-caption-11 text-fg-secondary md:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
