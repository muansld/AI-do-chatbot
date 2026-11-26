import type { Scope } from "@/types/domain";

/**
 * 항목(일정 · 질문)이 고른 범위에서 보여야 하는지예요.
 * - 공통을 고르면 모든 항목을 보여 줘요.
 * - 공통 항목(공통교육 · 센터 행사)은 어느 트랙을 골라도 보여 줘요.
 */
export function matchesScope(itemScope: Scope, selected: Scope): boolean {
  return selected === "common" || itemScope === "common" || itemScope === selected;
}
