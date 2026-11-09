interface ScreenPlaceholderProps {
  /** 피그마 프레임 번호. 예) "S2", "M1" */
  figma: string;
  title: string;
  description?: string;
}

/**
 * 아직 옮기지 않은 화면 자리 표시예요. 화면을 구현하면 이 컴포넌트를 지워요.
 */
export function ScreenPlaceholder({ figma, title, description }: ScreenPlaceholderProps) {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong bg-subtle px-6 py-10 text-center">
      <p className="typo-caption-12-medium text-brand-strong">피그마 {figma}</p>
      <p className="mt-1 typo-heading-16">{title}</p>
      {description && <p className="mt-1 typo-body-13 text-fg-secondary">{description}</p>}
    </div>
  );
}
