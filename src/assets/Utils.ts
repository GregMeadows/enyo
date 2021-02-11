import { RefObject } from 'react';

/**
 * Check if an element is within the viewport.
 * @param ElementRef Element to check
 */
export function checkIfInView(ElementRef: RefObject<Element>): boolean {
  if (ElementRef.current) {
    return (
      ElementRef.current.getBoundingClientRect().bottom > 0 &&
      ElementRef.current.getBoundingClientRect().top < window.innerHeight
    );
  }
  return false;
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
