import type { Metadata } from "next";
import Link from "next/link";

import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { Tag } from "@/components/ui/Tag";
import { ROUTES } from "@/lib/constants/routes";
import { getClubBooths } from "@/services/clubs";

export const metadata: Metadata = { title: "동아리" };

/** 피그마 S6 동아리 · Mo-5 (소식 배너 → 동아리 안내 → 프로젝트 개설) */
export default async function ClubsPage() {
  const booths = await getClubBooths();

  return (
    <div className="flex flex-col gap-10 pb-16">
      <ScreenPlaceholder
        figma="S6 · 08"
        title="동아리 소식 배너 슬라이드 + 소식 탭 띠 (Club News Tabs)"
      />
      <section className="mx-auto flex w-full max-w-page flex-col gap-4 px-4 md:px-0">
        <div>
          <p className="typo-caption-12-medium text-brand">CLUB BOOTH</p>
          <h2 className="typo-heading-20">동아리 안내</h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {booths.map((booth) => (
            <li key={booth.id}>
              <Link
                href={booth.isMakers ? ROUTES.clubs.makers : ROUTES.clubs.booth(booth.id)}
                className="flex h-full flex-col gap-2 rounded-xl border border-line bg-surface p-5 shadow-xs transition-shadow hover:shadow-md"
              >
                <span className="typo-caption-12 text-fg-secondary">{booth.category}</span>
                <span className="typo-heading-20">{booth.name}</span>
                <span className="typo-body-13 text-fg-secondary">{booth.description}</span>
                <span className="mt-auto flex items-center justify-between pt-3">
                  <Tag tone={booth.recruiting ? "info" : "neutral"}>
                    {booth.recruiting ? "모집 중" : "모집 예정"}
                  </Tag>
                  <span className="typo-caption-12-medium text-brand-strong">
                    {booth.isMakers ? "만든 사람들 보기" : "부스 둘러보기"} ›
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
