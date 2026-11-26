import { SITE } from "@/lib/constants/site";

/** 피그마 S2-2 답변 작성 중 — 두(DO)가 가이드북을 찾는 동안 보여요 */
export default function AskLoading() {
  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-4 py-10 md:px-0">
      <div className="rounded-2xl border border-brand-subtle bg-brand-faint px-6 py-5">
        <p className="typo-heading-16">{SITE.character}가 가이드북을 찾고 있어요</p>
        <p className="mt-1 typo-body-14 text-fg-secondary">
          운영 지침과 트랙 가이드북에서 근거를 찾는 중이에요
        </p>
      </div>
      <div aria-hidden className="flex flex-col gap-2.5">
        <span className="h-3 w-full animate-pulse rounded-full bg-muted" />
        <span className="h-3 w-11/12 animate-pulse rounded-full bg-muted" />
        <span className="h-3 w-3/5 animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
}
