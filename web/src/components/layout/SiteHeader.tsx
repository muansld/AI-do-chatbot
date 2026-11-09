import Link from "next/link";

import { MainNav } from "@/components/layout/MainNav";
import { CohortSelect } from "@/features/preferences/components/CohortSelect";
import { TrackToggle } from "@/features/preferences/components/TrackToggle";
import { ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";
import { getCohorts } from "@/services/cohorts";

/** 교육생 상단 바 (피그마 Header/GNB v2 · 모바일 Mobile/Top Bar) */
export async function SiteHeader() {
  const cohorts = await getCohorts();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-4 md:h-header md:px-10">
        <Link href={ROUTES.home} className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-brand typo-caption-12-medium text-fg-inverse"
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

        <div className="flex flex-1 justify-center">
          <MainNav />
        </div>

        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <div className="hidden md:block">
            <CohortSelect cohorts={cohorts} />
          </div>
          <div className="md:hidden">
            <CohortSelect cohorts={cohorts} size="sm" />
          </div>
          <div className="hidden md:block">
            <TrackToggle />
          </div>
          <div className="md:hidden">
            <TrackToggle size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
