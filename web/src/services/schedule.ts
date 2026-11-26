import { matchesScope } from "@/lib/scope";
import { scheduleEvents } from "@/mocks/schedule";
import type { CohortId, ScheduleEvent, Scope } from "@/types/domain";

/** filter 를 주지 않으면 전체 일정을 돌려줘요 (화면에서 기수 · 범위로 거를 때) */
export async function getScheduleEvents(filter?: {
  scope?: Scope;
  cohortId?: CohortId;
}): Promise<ScheduleEvent[]> {
  return scheduleEvents.filter(
    (e) =>
      (!filter?.scope || matchesScope(e.scope, filter.scope)) &&
      (!filter?.cohortId || e.cohortId === filter.cohortId),
  );
}
