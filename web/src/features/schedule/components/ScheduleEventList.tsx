"use client";

import { Tag } from "@/components/ui/Tag";
import type { TagTone } from "@/components/ui/Tag";
import { usePreferences } from "@/features/preferences/store";
import { TRACK_LABEL } from "@/lib/constants/site";
import { matchesTrack } from "@/lib/track";
import type { ScheduleCategory, ScheduleEvent } from "@/types/domain";

const CATEGORY: Record<ScheduleCategory, { label: string; tone: TagTone }> = {
  project: { label: "프로젝트", tone: "warning" },
  training: { label: "직무역량 교육", tone: "info" },
  care: { label: "상담 · 직무태도", tone: "neutral" },
  holiday: { label: "휴일", tone: "danger" },
  milestone: { label: "주요 일정", tone: "dark" },
};

const dateFormat = new Intl.DateTimeFormat("ko-KR", {
  month: "numeric",
  day: "numeric",
  weekday: "short",
  timeZone: "Asia/Seoul",
});

interface ScheduleEventListProps {
  /** 서버에서 받은 전체 일정. 고른 기수 · 트랙으로 여기서 걸러요. */
  events: ScheduleEvent[];
}

export function ScheduleEventList({ events }: ScheduleEventListProps) {
  const { cohortId, track } = usePreferences();
  const visible = events.filter((e) => e.cohortId === cohortId && matchesTrack(e.track, track));

  return (
    <section aria-label="일정 목록" className="flex flex-col gap-3">
      <p className="typo-body-13 text-fg-secondary">
        {cohortId}기 · {TRACK_LABEL[track]} 기준 · {visible.length}개
      </p>
      {visible.length === 0 ? (
        <p className="rounded-xl bg-subtle px-5 py-8 text-center typo-body-14 text-fg-secondary">
          이 기수 · 트랙에 등록된 일정이 없어요
        </p>
      ) : (
        <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
          {visible.map((event) => (
            <li key={event.id} className="flex items-center gap-4 px-5 py-4">
              <time dateTime={event.date} className="w-24 shrink-0 typo-body-13 text-fg-secondary">
                {dateFormat.format(new Date(`${event.date}T00:00:00+09:00`))}
              </time>
              <span className="flex-1 typo-body-14-medium">{event.title}</span>
              {event.timeLabel && (
                <span className="typo-caption-12 text-fg-tertiary">{event.timeLabel}</span>
              )}
              <Tag tone={CATEGORY[event.category].tone}>{CATEGORY[event.category].label}</Tag>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
