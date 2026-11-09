"use client";

import { useCallback, useSyncExternalStore } from "react";

import type { CohortId, Track } from "@/types/domain";

/**
 * 교육생이 고른 기수 · 트랙을 브라우저(localStorage)에만 저장해요. 로그인은 없어요.
 * useSyncExternalStore 로 읽어서 서버 렌더링(기본값)과 브라우저 값이 어긋나지 않게 해요.
 */
export interface Preferences {
  cohortId: CohortId;
  track: Track;
}

const STORAGE_KEY = "aido:preferences";
export const DEFAULT_PREFERENCES: Preferences = { cohortId: 13, track: "integrated" };

const TRACKS: Track[] = ["employment", "integrated", "startup"];
const listeners = new Set<() => void>();
let cache: { raw: string | null; value: Preferences } = { raw: null, value: DEFAULT_PREFERENCES };

function parse(raw: string | null): Preferences {
  if (!raw) return DEFAULT_PREFERENCES;
  try {
    const data = JSON.parse(raw) as Partial<Preferences>;
    return {
      cohortId: typeof data.cohortId === "number" ? data.cohortId : DEFAULT_PREFERENCES.cohortId,
      track: TRACKS.includes(data.track as Track)
        ? (data.track as Track)
        : DEFAULT_PREFERENCES.track,
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function readSnapshot(): Preferences {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // 사생활 보호 모드 등에서 저장소를 못 쓰면 기본값을 써요
  }
  if (raw !== cache.raw) cache = { raw, value: parse(raw) };
  return cache.value;
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function write(next: Preferences): void {
  const raw = JSON.stringify(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // 저장에 실패해도 이번 방문 동안은 메모리 값으로 유지해요
  }
  cache = { raw, value: next };
  listeners.forEach((listener) => listener());
}

export function usePreferences() {
  const preferences = useSyncExternalStore(subscribe, readSnapshot, () => DEFAULT_PREFERENCES);

  const setTrack = useCallback((track: Track) => write({ ...readSnapshot(), track }), []);
  const setCohortId = useCallback(
    (cohortId: CohortId) => write({ ...readSnapshot(), cohortId }),
    [],
  );

  return { ...preferences, setTrack, setCohortId };
}
