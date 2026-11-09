"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

/** 피그마 E2 연결 오류 */
export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    // 오류 수집 도구를 붙이면 여기서 보내요
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <EmptyState
        title="잠깐 연결이 끊겼어요"
        description={
          "인터넷 연결을 확인하고 다시 시도해 주세요.\n급한 출결 · 병가 문의는 담당 매니저에게 카톡으로 보내 주세요."
        }
        actions={<Button onClick={() => retry()}>다시 시도</Button>}
      />
    </main>
  );
}
