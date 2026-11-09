import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { getClubBooth, getClubBooths } from "@/services/clubs";

/** 빌드 때 부스 상세 페이지를 미리 만들어 둬요 */
export async function generateStaticParams() {
  const booths = await getClubBooths();
  return booths.filter((b) => !b.isMakers).map((b) => ({ boothId: b.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/clubs/booths/[boothId]">): Promise<Metadata> {
  const { boothId } = await params;
  const booth = await getClubBooth(boothId);
  return { title: booth ? booth.name : "동아리 부스" };
}

/**
 * 피그마 S6-3 부스 상세 (모든 부스가 같은 틀)
 * URL 값(params)은 <Suspense> 안쪽에서만 읽어요 — 페이지 틀은 바로 보이고 내용만 이어서 채워져요.
 */
export default function BoothPage({ params }: PageProps<"/clubs/booths/[boothId]">) {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-10 md:px-0">
      <Suspense
        fallback={<p className="typo-body-14 text-fg-tertiary">부스를 불러오는 중이에요</p>}
      >
        <BoothDetail params={params} />
      </Suspense>
    </div>
  );
}

async function BoothDetail({ params }: Pick<PageProps<"/clubs/booths/[boothId]">, "params">) {
  const { boothId } = await params;
  const booth = await getClubBooth(boothId);
  if (!booth) notFound();

  return (
    <>
      <PageHeader
        title={booth.name}
        description={booth.description}
        actions={<ButtonLink href="#join">오픈채팅으로 참여 문의</ButtonLink>}
      />
      <p className="typo-body-14 text-fg-secondary">
        {booth.schedule} · 멤버 {booth.memberCount}명
      </p>
      <ScreenPlaceholder figma="S6-3" title="이런 걸 해요 · 최근 활동 · 동아리 정보 · 참여 방법" />
    </>
  );
}
