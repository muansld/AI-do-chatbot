import type { Metadata } from "next";

import { Tag } from "@/components/ui/Tag";
import { getNotices } from "@/services/notices";

export const metadata: Metadata = { title: "센터 안내 · 공지" };

/** 피그마 S4 센터 안내 · 공지 */
export default async function CenterNoticesPage() {
  const notices = await getNotices();

  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
      {notices.map((notice) => (
        <li key={notice.id} className="flex flex-col gap-1 px-5 py-4">
          <div className="flex items-center gap-2">
            <Tag tone="warning">취업</Tag>
            {notice.isNew && <Tag tone="info">새 공지</Tag>}
            <time dateTime={notice.publishedAt} className="typo-caption-12 text-fg-tertiary">
              {notice.publishedAt.slice(5).replace("-", ".")}
            </time>
          </div>
          <p className="typo-body-15-bold">{notice.title}</p>
          <p className="typo-body-13 text-fg-secondary">{notice.summary}</p>
        </li>
      ))}
    </ul>
  );
}
