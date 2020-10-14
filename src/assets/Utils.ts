import { RefObject } from 'react';

/**
 * Check if an element is within the viewport.
 * @param ElementRef Element to check
 */
export default function checkIfInView(ElementRef: RefObject<Element>): boolean {
  if (ElementRef.current) {
    return (
      ElementRef.current.getBoundingClientRect().bottom > 0 &&
      ElementRef.current.getBoundingClientRect().top < window.innerHeight
    );
  }
  return false;
}
