import { threads } from "@/mocks/threads";
import type { ChatThread } from "@/types/domain";

/** 사이드바 '최근 질문' — 최근 것부터 */
export async function getThreads(): Promise<ChatThread[]> {
  return [...threads].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getThread(threadId: string): Promise<ChatThread | undefined> {
  return threads.find((t) => t.id === threadId);
}
