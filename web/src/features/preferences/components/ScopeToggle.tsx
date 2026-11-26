"use client";

import { usePreferences } from "@/features/preferences/store";
import { cn } from "@/lib/cn";
import { SCOPE_LABEL, SCOPE_ORDER } from "@/lib/constants/site";

interface ScopeToggleProps {
  size?: "md" | "sm";
}

/** 취업 · 창업 · 공통 범위 칩 (피그마 Composer v3 안의 Track Segment) */
export function ScopeToggle({ size = "sm" }: ScopeToggleProps) {
  const { scope, setScope } = usePreferences();

  return (
    <div role="radiogroup" aria-label="질문 범위" className="flex rounded-full bg-muted p-[3px]">
      {SCOPE_ORDER.map((value) => {
        const selected = scope === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setScope(value)}
            className={cn(
              "rounded-full transition-colors",
              size === "md"
                ? "px-5 py-2 typo-body-14-medium"
                : "px-2.5 py-1 typo-caption-12-medium",
              selected
                ? "bg-surface text-fg shadow-sm"
                : "text-fg-tertiary hover:text-fg-secondary",
            )}
          >
            {SCOPE_LABEL[value]}
          </button>
        );
      })}
    </div>
  );
}
