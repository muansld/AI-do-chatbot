/**
 * 조건부 className 을 하나로 합쳐요.
 * 예) cn("px-4", isActive && "bg-brand", className)
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
