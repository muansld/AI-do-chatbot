"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/constants/routes";
import type { NavItem } from "@/lib/constants/routes";

interface NavLinksProps {
  items: NavItem[];
  classNames: { base: string; active: string; idle: string };
  /**
   * 현재 경로로 활성 표시를 할지예요. usePathname 은 요청 때만 알 수 있어서
   * 이 값을 켠 쪽은 꼭 <Suspense> 안에 둬요 (Cache Components 규칙).
   */
  withActive?: boolean;
}

/** 헤더 · 매니저 사이드바가 함께 쓰는 메뉴 링크 목록 */
export function NavLinks({ items, classNames, withActive = false }: NavLinksProps) {
  return withActive ? (
    <ActiveLinks items={items} classNames={classNames} />
  ) : (
    <Links items={items} classNames={classNames} pathname={null} />
  );
}

function ActiveLinks({ items, classNames }: Omit<NavLinksProps, "withActive">) {
  const pathname = usePathname();
  return <Links items={items} classNames={classNames} pathname={pathname} />;
}

function Links({
  items,
  classNames,
  pathname,
}: Omit<NavLinksProps, "withActive"> & { pathname: string | null }) {
  return items.map((item) => {
    const active = pathname !== null && isActivePath(pathname, item);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(classNames.base, active ? classNames.active : classNames.idle)}
      >
        {item.label}
      </Link>
    );
  });
}
