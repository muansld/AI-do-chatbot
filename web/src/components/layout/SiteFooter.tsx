import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";

/** 교육생 푸터 (피그마 Footer v2) */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-subtle pb-tabbar md:pb-0">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-6 typo-caption-12 text-fg-secondary md:flex-row md:items-center md:justify-between md:px-0">
        <p>{SITE.name} · 더큰내일센터 탐나는 인재 동아리 시범 서비스</p>
        <p className="flex flex-wrap gap-x-2">
          <Link href={ROUTES.clubs.makers} className="typo-caption-12-medium text-brand-strong">
            {SITE.name}를 만든 사람들
          </Link>
          <span>· 문의처</span>
          <Link href={ROUTES.manager.login}>· 매니저 화면</Link>
          <span>· AI 답변은 틀릴 수 있어요</span>
        </p>
      </div>
    </footer>
  );
}
