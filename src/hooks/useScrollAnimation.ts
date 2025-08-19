import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({ 
  threshold = 0.15, 
  rootMargin = '0px 0px -10% 0px', 
  triggerOnce = true 
}: UseScrollAnimationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            // Keep animation visible permanently once triggered
            setTimeout(() => {
              observer.disconnect();
            }, 100);
          }
        } else if (!triggerOnce) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isVisible: hasTriggered ? true : isVisible };
};

export default useScrollAnimation;
