import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type TagTone = "dark" | "neutral" | "warning" | "danger" | "info";

const TONE_CLASS: Record<TagTone, string> = {
  dark: "bg-fg text-fg-inverse",
  neutral: "bg-muted text-fg-secondary",
  warning: "bg-employment-subtle text-employment",
  danger: "bg-danger-subtle text-danger-strong",
  info: "bg-brand-subtle text-brand-strong",
};

interface TagProps {
  tone?: TagTone;
  className?: string;
  children: ReactNode;
}

/** 피그마 Tag (Tone=Dark / Neutral / Warning / Danger / Info) */
export function Tag({ tone = "neutral", className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 typo-caption-12-medium",
        TONE_CLASS[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
