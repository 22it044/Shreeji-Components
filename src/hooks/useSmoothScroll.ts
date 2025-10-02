import { useEffect } from 'react';

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  behavior?: ScrollBehavior;
}

/**
 * Hook to enable smooth scrolling between sections
 * Enhanced for performance and smoother animations
 */
export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const {
    offset = 0,
    duration = 800, // Reduced for snappier feel
    easing = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    behavior = 'smooth'
  } = options;

  useEffect(() => {
    // Use passive event listener for better performance
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Check if browser supports native smooth scrolling
      if ('scrollBehavior' in document.documentElement.style && behavior === 'smooth') {
        const headerOffset = offset;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        setTimeout(() => {
          window.history.pushState(null, '', targetId);
        }, 10);
        
        return;
      }
      
      // Fallback to custom implementation for browsers without native support
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      let startTime: number | null = null;
      let rafId: number;
      
      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easing(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (timeElapsed < duration) {
          rafId = requestAnimationFrame(animateScroll);
        } else {
          // Update URL hash after animation completes
          window.history.pushState(null, '', targetId);
        }
      };
      
      rafId = requestAnimationFrame(animateScroll);
      
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    };
    
    document.addEventListener('click', handleAnchorClick, { passive: false });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [offset, duration, easing, behavior]);
};