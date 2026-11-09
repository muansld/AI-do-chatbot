import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "bg-brand text-fg-inverse hover:bg-brand-strong",
  secondary: "border border-line bg-surface text-fg hover:bg-subtle",
};

const BASE_CLASS =
  "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 typo-body-14-bold transition-colors disabled:pointer-events-none disabled:opacity-45";

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & Omit<ComponentProps<"button">, keyof CommonProps>;
type ButtonLinkProps = CommonProps & Omit<ComponentProps<typeof Link>, keyof CommonProps>;

/** 피그마 Button (Type=Primary / Secondary) */
export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(BASE_CLASS, VARIANT_CLASS[variant], className)} {...props} />
  );
}

/** 페이지 이동은 <a>가 맞아서 링크 모양 버튼을 따로 둬요 */
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(BASE_CLASS, VARIANT_CLASS[variant], className)} {...props} />;
}
