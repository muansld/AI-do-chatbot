import type { Metadata } from "next";
import Link from "next/link";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ROUTES } from "@/lib/constants/routes";
import { getThreads } from "@/services/threads";

export const metadata: Metadata = { title: "AI에게 묻기" };

/**
 * 피그마 S2 AI에게 묻기 — 새 질문을 받는 자리예요.
 * 구현 순서: features/ask 의 HistorySidebar · ChatThread · Composer 를 만들어 여기서 조립해요.
 */
export default async function AskPage() {
  const threads = await getThreads();

  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-6 px-4 py-10 md:px-0">
      <ScreenPlaceholder
        figma="S2"
        title="사이드바(새 질문하기 · 최근 질문 · 가이드북 다운로드) + 대화 + 질문창"
        description="AI 서버 연동 전이라 예시 대화로 화면을 먼저 옮겨요"
      />
      <ul className="flex flex-col gap-2">
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link
              href={ROUTES.askThread(thread.id)}
              className="typo-body-14 text-brand-strong underline"
            >
              예시 대화: {thread.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
