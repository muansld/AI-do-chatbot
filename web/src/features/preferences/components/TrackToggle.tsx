"use client";

import { usePreferences } from "@/features/preferences/store";
import { TRACK_LABEL, TRACK_ORDER } from "@/lib/constants/site";
import { cn } from "@/lib/cn";

interface TrackToggleProps {
  size?: "md" | "sm";
}

/** 취업 · 통합 · 창업 토글 (피그마 Track Toggle) */
export function TrackToggle({ size = "md" }: TrackToggleProps) {
  const { track, setTrack } = usePreferences();

  return (
    <div role="radiogroup" aria-label="트랙" className="flex rounded-full bg-muted p-[3px]">
      {TRACK_ORDER.map((value) => {
        const selected = track === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setTrack(value)}
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
            {TRACK_LABEL[value]}
          </button>
        );
      })}
    </div>
  );
}
