// composables/useAnimation.ts
import { ref, onMounted, onUnmounted } from 'vue';

interface AnimationOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
}

export function useAnimation() {
  // Back to top button visibility
  const showBackToTop = ref(false);
  
  // Function to handle scroll for back-to-top button
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 100;
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Setup and cleanup scroll listener
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  
  // Intersection Observer for animations on scroll
  const useIntersectionObserver = (
    elementRef: Ref<Element | null>,
    callback: (isIntersecting: boolean) => void,
    options: AnimationOptions = {}
  ) => {
    const observer = ref<IntersectionObserver | null>(null);
    
    onMounted(() => {
      const element = elementRef.value;
      if (!element) return;
      
      observer.value = new IntersectionObserver(
        (entries) => {
          const isIntersecting = entries[0].isIntersecting;
          callback(isIntersecting);
          
          // If "once" option is true, disconnect observer after element is visible
          if (isIntersecting && options.once && observer.value) {
            observer.value.disconnect();
          }
        },
        {
          threshold: options.threshold || 0.1,
          root: options.root || null,
          rootMargin: options.rootMargin || '0px'
        }
      );
      
      observer.value.observe(element);
    });
    
    onUnmounted(() => {
      if (observer.value) {
        observer.value.disconnect();
      }
    });
  };
  
  // Skills progress animation
  const animateSkills = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('aria-valuenow') || '0';
      (bar as HTMLElement).style.width = `${width}%`;
    });
  };
  
  // Counter animation for facts section
  const animateCounter = (
    elementRef: Ref<Element | null>,
    targetValue: number,
    duration = 1000,
    startDelay = 0
  ) => {
    const element = elementRef.value;
    if (!element) return;
    
    let startValue = 0;
    let startTime: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Only start counting after the delay
      if (progress < startDelay) {
        window.requestAnimationFrame(step);
        return;
      }
      
      const adjustedProgress = progress - startDelay;
      
      // Calculate the current count value based on progress
      const currentValue = Math.min(
        Math.floor(adjustedProgress / duration * targetValue),
        targetValue
      );
      
      if (currentValue !== startValue) {
        element.textContent = currentValue.toString();
        startValue = currentValue;
      }
      
      if (adjustedProgress < duration) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = targetValue.toString();
      }
    };
    
    window.requestAnimationFrame(step);
  };
  
  // Simple hooks for CSS animations
  const useElementAnimation = (
    elementRef: Ref<Element | null>,
    animationClass = 'animated',
    options: AnimationOptions = { once: true }
  ) => {
    useIntersectionObserver(
      elementRef,
      (isIntersecting) => {
        if (isIntersecting) {
          elementRef.value?.classList.add(animationClass);
        } else if (!options.once) {
          elementRef.value?.classList.remove(animationClass);
        }
      },
      options
    );
  };
  
  return {
    // Back to top functionality
    showBackToTop,
    scrollToTop,
    scrollToSection,
    
    // Animation helpers
    useIntersectionObserver,
    animateSkills,
    animateCounter,
    useElementAnimation
  };
}