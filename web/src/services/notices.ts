import { matchesTrack } from "@/lib/track";
import { notices } from "@/mocks/notices";
import type { CohortId, Notice, Track } from "@/types/domain";

export async function getNotices(filter?: {
  track?: Track;
  cohortId?: CohortId;
}): Promise<Notice[]> {
  return notices.filter(
    (n) =>
      (!filter?.track || matchesTrack(n.track, filter.track)) &&
      (!filter?.cohortId || n.cohortIds.includes(filter.cohortId)),
  );
}
