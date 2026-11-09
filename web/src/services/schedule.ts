import { matchesTrack } from "@/lib/track";
import { scheduleEvents } from "@/mocks/schedule";
import type { CohortId, ScheduleEvent, Track } from "@/types/domain";

/** filter 를 주지 않으면 전체 일정을 돌려줘요 (화면에서 기수 · 트랙으로 거를 때) */
export async function getScheduleEvents(filter?: {
  track?: Track;
  cohortId?: CohortId;
}): Promise<ScheduleEvent[]> {
  return scheduleEvents.filter(
    (e) =>
      (!filter?.track || matchesTrack(e.track, filter.track)) &&
      (!filter?.cohortId || e.cohortId === filter.cohortId),
  );
}
