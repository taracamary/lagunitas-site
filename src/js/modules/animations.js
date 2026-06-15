// ==========================================================================
// GSAP ANIMATIONS & SCROLLTRIGGER
// ==========================================================================

export const initAnimations = (lenis) => {
  // Регистрируем плагин (GSAP подключен через CDN)
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  
  gsap.registerPlugin(ScrollTrigger);

  // 1. Синхронизация Lenis и GSAP ScrollTrigger
  // Это критически важно, чтобы анимации по скроллу не дергались
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // 2. Стартовая анимация (Hero Section)
  // Используем timeline для последовательного появления элементов
  const heroTl = gsap.timeline({ 
    defaults: { ease: 'power3.out' } 
  });

  // Прячем элементы перед анимацией (чтобы избежать моргания)
  gsap.set(['.hero__title', '#js-hero-bottle', '#js-hero-mascot', '.header'], { 
    opacity: 0, 
    visibility: 'visible' 
  });

  heroTl
    .fromTo('.hero__title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    .fromTo('#js-hero-bottle',
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      '-=0.6' // Начинаем на 0.6с раньше окончания предыдущей анимации
    )
    .fromTo('#js-hero-mascot',
      { x: 50, opacity: 0, rotation: 0 },
      { x: 0, opacity: 1, rotation: -30, duration: 0.8 },
      '-=0.6'
    )
    .fromTo('.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.8'
    );
};