// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to an element and a boolean that flips to
 * true the first time the element scrolls into view. Used to drive
 * the "swipe down into focus" reveal animation on the poem cards.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.18] - fraction of element visible to trigger reveal
 * @param {string} [options.rootMargin="0px 0px -10% 0px"] - shrinks the viewport box used for detection
 */
export default function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser can't do IntersectionObserver, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
