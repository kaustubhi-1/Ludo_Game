// hooks/useBoardRefs.ts
import { useRef } from 'react';

export function useBoardRefs() {
  const blueBoardRef = useRef<HTMLDivElement | null>(null);
  const greenBoardRef = useRef<HTMLDivElement | null>(null);
  const redBoardRef = useRef<HTMLDivElement | null>(null);
  const yellowBoardRef = useRef<HTMLDivElement | null>(null);

  return {
    blueBoardRef,
    greenBoardRef,
    redBoardRef,
    yellowBoardRef,
  };
}
