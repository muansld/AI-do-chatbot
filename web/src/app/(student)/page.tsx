import Link from "next/link";

import { CohortSelect } from "@/features/preferences/components/CohortSelect";
import { ScopeToggle } from "@/features/preferences/components/ScopeToggle";
import { ROUTES } from "@/lib/constants/routes";
import { getCohorts } from "@/services/cohorts";

const SUGGESTIONS = [
  "지문 찍는 걸 깜빡했어요",
  "병가는 어떻게 쓰나요?",
  "치킨집에서 바우처 써도 돼요?",
  "외부활동 신청 방법",
];

/**
 * 피그마 S1 홈 — 헤더 · 푸터 없이 질문창 하나만 보여요.
 * 질문하면 AI에게 묻기(/ask)로 넘어가요.
 */
export default async function HomePage() {
  const cohorts = await getCohorts();

  return (
    <main className="flex flex-1 items-center bg-subtle px-4 py-16">
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-5 text-center">
        <h1 className="typo-title-26 md:typo-display-48">무엇이 궁금하세요?</h1>
        <p className="typo-body-14 text-fg-secondary md:typo-body-15">
          출결, 병가, 바우처, 상벌점까지 센터 가이드북을 기준으로 바로 알려드려요
        </p>

        {/* 피그마 Composer v3 · 기본. AI 서버 연동 전이라 묻기 화면으로만 보내요 */}
        <form action={ROUTES.ask} className="w-full rounded-2xl bg-surface p-5 text-left shadow-md">
          <label htmlFor="home-question" className="sr-only">
            질문
          </label>
          <input
            id="home-question"
            name="q"
            placeholder="센터 규정·지침에 대해 무엇이든 물어보세요"
            className="w-full bg-transparent typo-body-15 outline-none placeholder:text-fg-tertiary"
          />
          <div className="mt-5 flex items-center gap-2">
            <CohortSelect cohorts={cohorts} size="sm" />
            <ScopeToggle />
            <button
              type="submit"
              aria-label="질문 보내기"
              className="ml-auto grid size-10 place-items-center rounded-full bg-brand text-fg-inverse"
            >
              ↑
            </button>
          </div>
        </form>

        <ul className="flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((text) => (
            <li key={text}>
              <Link
                href={`${ROUTES.ask}?q=${encodeURIComponent(text)}`}
                className="block rounded-full border border-line bg-surface px-3.5 py-2 typo-body-13 hover:bg-muted"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
