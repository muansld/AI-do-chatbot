"use client";

import { usePreferences } from "@/features/preferences/store";
import { cn } from "@/lib/cn";
import type { Cohort } from "@/types/domain";

interface CohortSelectProps {
  cohorts: Cohort[];
  size?: "md" | "sm";
}

/** 기수 선택 (피그마 '13기 ▾'). 기수 목록은 서비스에서 받아 와요. */
export function CohortSelect({ cohorts, size = "md" }: CohortSelectProps) {
  const { cohortId, setCohortId } = usePreferences();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">기수</span>
      <select
        value={cohortId}
        onChange={(event) => setCohortId(Number(event.target.value))}
        className={cn(
          "appearance-none rounded-full border border-line-strong bg-surface pr-8 text-fg",
          size === "md"
            ? "h-[42px] pl-4 typo-body-14-bold"
            : "h-[30px] pl-3 typo-caption-12-medium",
        )}
      >
        {cohorts.map((cohort) => (
          <option key={cohort.id} value={cohort.id}>
            {cohort.id}기
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="pointer-events-none absolute right-3 size-3.5 text-fg-secondary"
      >
        <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </label>
  );
}
