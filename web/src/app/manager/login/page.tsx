import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = { title: "매니저 로그인", robots: { index: false } };

/** 피그마 M0 매니저 로그인 (인증 연동 전: 버튼은 질문함으로만 이동해요) */
export default function ManagerLoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-subtle px-4">
      <div className="flex w-full max-w-[400px] flex-col gap-5 rounded-2xl bg-surface p-8 shadow-md">
        <div className="flex flex-col gap-1">
          <h1 className="typo-title-26">매니저 로그인</h1>
          <p className="typo-body-15 text-fg-secondary">센터에서 받은 매니저 계정으로 들어와요.</p>
        </div>
        <label className="flex flex-col gap-2 typo-body-14-medium">
          아이디
          <input
            type="email"
            autoComplete="username"
            className="h-12 rounded-lg border border-line-strong px-4 typo-body-15"
          />
        </label>
        <label className="flex flex-col gap-2 typo-body-14-medium">
          비밀번호
          <input
            type="password"
            autoComplete="current-password"
            className="h-12 rounded-lg border border-line-strong px-4 typo-body-15"
          />
        </label>
        <ButtonLink href={ROUTES.manager.inbox} className="w-full py-3.5">
          로그인
        </ButtonLink>
        <p className="typo-caption-12 text-fg-tertiary">교육생은 로그인 없이 바로 쓸 수 있어요.</p>
      </div>
    </main>
  );
}
