import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ROUTES } from "@/lib/constants/routes";

const SUGGESTIONS = [
  "지문 찍는 걸 깜빡했어요",
  "병가는 어떻게 쓰나요?",
  "치킨집에서 바우처 써도 돼요?",
  "외부활동 신청 방법",
];

/** 피그마 S1 홈 · Mo-1 */
export default function HomePage() {
  return (
    <section className="bg-linear-to-b from-brand-subtle via-subtle to-subtle px-4 pt-10 pb-16 md:pt-20 md:pb-28">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
        <Link
          href={ROUTES.center.notices}
          className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 typo-body-13-medium"
        >
          <Tag tone="warning">마감</Tag>
          이력서 · 자기소개서 · 포트폴리오 제출 마감 11/9 (월) 09:00
        </Link>

        <h1 className="typo-title-26 md:typo-display-48">무엇이 궁금하세요?</h1>
        <p className="typo-body-14 text-fg-secondary md:typo-body-15">
          출결, 병가, 바우처, 상벌점까지 센터 가이드북을 기준으로 바로 알려드려요
        </p>

        {/* 질문창: AI 서버 연동 전이라 묻기 화면으로만 보내요 */}
        <form action={ROUTES.ask} className="w-full rounded-2xl bg-surface p-4 text-left shadow-md">
          <label htmlFor="home-question" className="sr-only">
            질문
          </label>
          <input
            id="home-question"
            name="q"
            placeholder="센터 규정 · 지침에 대해 무엇이든 물어보세요"
            className="w-full bg-transparent typo-body-15 outline-none placeholder:text-fg-tertiary"
          />
          <div className="mt-4 flex items-center justify-between">
            <span className="typo-caption-12 text-fg-tertiary">
              운영 지침 · 트랙 가이드북 기준으로 답해요
            </span>
            <button
              type="submit"
              aria-label="질문 보내기"
              className="grid size-10 place-items-center rounded-full bg-brand text-fg-inverse"
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
                className="block rounded-full border border-line bg-surface px-3.5 py-2 typo-body-13 hover:bg-subtle"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <ButtonLink href={ROUTES.schedule} variant="secondary">
          다음 일정 보기
        </ButtonLink>
        <p className="typo-caption-11 text-fg-tertiary">AI 답변은 틀릴 수 있어요</p>
      </div>
    </section>
  );
}
