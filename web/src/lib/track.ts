import type { Track } from "@/types/domain";

/** 통합(integrated)을 고르면 모든 트랙을, 통합 항목은 어느 트랙에서나 보여 줘요. */
export function matchesTrack(itemTrack: Track, selected: Track): boolean {
  return selected === "integrated" || itemTrack === "integrated" || itemTrack === selected;
}
