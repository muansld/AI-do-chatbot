import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

/** 페이지 제목 영역 (예: '커리큘럼·일정', '센터 안내') */
export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-1.5">
        <h1 className="typo-title-24 md:typo-title-34">{title}</h1>
        {description && (
          <p className="typo-body-14 text-fg-secondary md:typo-body-15">{description}</p>
        )}
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}
