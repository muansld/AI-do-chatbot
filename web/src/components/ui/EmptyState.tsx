import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

/**
 * 빈 상태 · 오류 안내 (피그마 07 섹션)
 * 원칙: 무슨 일인지 → 지금 할 수 있는 일 → 그래도 안 되면 카톡
 */
export function EmptyState({ title, description, actions }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <h2 className="typo-heading-20">{title}</h2>
      {description && (
        <p className="max-w-md typo-body-14 whitespace-pre-line text-fg-secondary">{description}</p>
      )}
      {actions && <div className="mt-2 flex gap-2">{actions}</div>}
    </div>
  );
}
