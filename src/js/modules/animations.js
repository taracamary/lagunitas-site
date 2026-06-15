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
      '-=0.6'
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

  // 3. Класс для шапки при скролле (Sticky Header)
  ScrollTrigger.create({
    start: 'top -50', // Срабатывает, когда проскроллили 50px вниз
    end: 99999, // Действует до самого конца страницы
    toggleClass: { className: 'is-scrolled', targets: '.header' }
  });

  // 4. Сквозная анимация главной бутылки (.global-bottle)
  // Бутылка позиционирована абсолютно, поэтому мы анимируем её 'y' 
  // на высоту всего документа. Это создает эффект, будто она летит сквозь секции.
  gsap.to('#js-hero-bottle', {
    y: () => document.querySelector('.main-content').offsetHeight - window.innerHeight,
    rotation: -30, // Слегка поворачивается
    scale: 0.3, // Уменьшается к концу страницы
    ease: 'none', // Линейная анимация для идеального параллакса
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1 // Плавная привязка к скроллу (1 секунда задержки для мягкости)
    }
  });

  // 5. Появление контента (Reveal Animations)
  
  // Анимация всех заголовков секций
  const headings = gsap.utils.toArray('section h2, section .availability__subtitle');
  headings.forEach((heading) => {
    gsap.fromTo(heading, 
      { y: 40, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%', // Срабатывает, когда верх элемента достигает 85% высоты окна
        }
      }
    );
  });

  // Stagger-анимация для карточек характеристик (.feature-card)
  gsap.fromTo('.feature-card',
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15, // Задержка между появлением каждой следующей карточки
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about__features',
        start: 'top 80%',
      }
    }
  );

  // Stagger-анимация для карточек вкусов (.flavor-card)
  gsap.fromTo('.flavor-card',
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.flavors',
        start: 'top 75%',
      }
    }
  );

  // Анимация продуктовых элементов (.product-item)
  gsap.fromTo('.product-item',
    { y: 50, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)', // Эффект легкого "отскока" (bounce) для бутылок
      scrollTrigger: {
        trigger: '.availability__grid',
        start: 'top 80%',
      }
    }
  );
};