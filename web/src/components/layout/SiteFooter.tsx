import { SITE } from "@/lib/constants/site";

/** 교육생 푸터 (피그마 Footer v3) — 문구 한 줄이에요 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-subtle">
      <div className="mx-auto max-w-page px-4 py-6 typo-caption-12 text-fg-secondary md:px-0">
        <p>{SITE.footer}</p>
      </div>
    </footer>
  );
}
