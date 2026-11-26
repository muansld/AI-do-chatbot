import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { getThread, getThreads } from "@/services/threads";

/** 빌드 때 예시 대화 페이지를 미리 만들어 둬요 */
export async function generateStaticParams() {
  const threads = await getThreads();
  return threads.map((t) => ({ threadId: t.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ask/[threadId]">): Promise<Metadata> {
  const { threadId } = await params;
  const thread = await getThread(threadId);
  return { title: thread ? thread.title : "AI에게 묻기" };
}

/**
 * 피그마 S2 · S2-1 ~ S2-10 — 대화 하나.
 * 답변 상태(AnswerStatus)에 따라 답변 · 근거 못 찾음(S2-4) · 자료 없는 기수(S2-9)를 갈라 보여요.
 * 원문 PDF 좌우 보기(S2-1)는 ?source=employment&page=46 처럼 URL로 열어요.
 */
export default function AskThreadPage({ params }: PageProps<"/ask/[threadId]">) {
  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-6 px-4 py-10 md:px-0">
      <Suspense
        fallback={<p className="typo-body-14 text-fg-tertiary">대화를 불러오는 중이에요</p>}
      >
        <ThreadDetail params={params} />
      </Suspense>
    </div>
  );
}

async function ThreadDetail({ params }: Pick<PageProps<"/ask/[threadId]">, "params">) {
  const { threadId } = await params;
  const thread = await getThread(threadId);
  if (!thread) notFound();

  const answer = thread.messages.find((m) => m.role === "assistant");

  return (
    <ScreenPlaceholder
      figma={answer?.status === "no-evidence" ? "S2-4" : "S2"}
      title={thread.title}
      description={`답변 상태: ${answer?.status ?? "없음"} · 근거 ${answer?.role === "assistant" ? answer.citations.length : 0}개`}
    />
  );
}
