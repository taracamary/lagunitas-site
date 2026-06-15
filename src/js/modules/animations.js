// ==========================================================================
// GSAP ANIMATIONS & SCROLLTRIGGER
// ==========================================================================

export const initAnimations = (lenis) => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  
  gsap.registerPlugin(ScrollTrigger);

  // 1. Синхронизация Lenis и GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  // 2. Стартовая анимация (Hero Section)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Важно: для fixed элемента задаем начальный xPercent для точного центрирования
  gsap.set('#js-hero-bottle', { xPercent: -50, yPercent: 0, rotation: 0, scale: 1 });
  gsap.set(['.hero__title', '#js-hero-bottle', '#js-hero-mascot', '.header'], { opacity: 0, visibility: 'visible' });

  heroTl
    .fromTo('.hero__title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
    .fromTo('#js-hero-bottle',
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      '-=0.6'
    )
    .fromTo('#js-hero-mascot',
      { x: 50, opacity: 0, rotation: 0 },
      { x: 0, opacity: 1, rotation: -30, duration: 0.8 },
      '-=0.6'
    )
    .fromTo('.header', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.8');

  // 3. Класс для шапки при скролле (Sticky Header)
  ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: { className: 'is-scrolled', targets: '.header' }
  });

  // 4. Сквозная покадровая анимация главной бутылки (Master Timeline)
  // Бутылка имеет position: fixed, поэтому мы анимируем только ее трансформации,
  // привязав таймлайн к высоте всего документа.
  const bottleTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true, // Используем true, а не число, так как Lenis УЖЕ сглаживает скролл (избегаем двойной вязкости)
    }
  });

  // Шаг 1: Hero -> About (Сдвигаем влево к тексту, уменьшаем, поворачиваем)
  bottleTl.to('#js-hero-bottle', {
    xPercent: -140, // Улетает влево
    scale: 0.7,
    rotation: -15,
    ease: 'none'
  }, 0) // Старт в самом начале скролла
  
  // Шаг 2: About -> Mouthfeel (Перелетает вправо к видео)
  .to('#js-hero-bottle', {
    xPercent: 40, // Улетает вправо
    scale: 0.6,
    rotation: 15,
    ease: 'none'
  }, 0.3) // Начинается на 30% прогресса скролла
  
  // Шаг 3: Mouthfeel -> Flavors (Возвращается в центр над кляксами)
  .to('#js-hero-bottle', {
    xPercent: -50, // Возврат в центр
    scale: 0.5,
    rotation: 0,
    ease: 'none'
  }, 0.6) // Начинается на 60% прогресса скролла
  
  // Шаг 4: Flavors -> Availability (Уходит вниз и растворяется)
  .to('#js-hero-bottle', {
    scale: 0.3,
    opacity: 0,
    yPercent: 50,
    ease: 'none'
  }, 0.9); // Конец анимации

  // 5. Появление контента (Reveal Animations)
  const headings = gsap.utils.toArray('section h2, section .availability__subtitle');
  headings.forEach((heading) => {
    gsap.fromTo(heading, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: heading, start: 'top 85%' } }
    );
  });

  gsap.fromTo('.feature-card',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.about__features', start: 'top 80%' } }
  );

  gsap.fromTo('.flavor-card',
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.flavors', start: 'top 75%' } }
  );

  gsap.fromTo('.product-item',
    { y: 50, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.availability__grid', start: 'top 80%' } }
  );
};