export const initAnimations = (lenis) => {
  const { gsap } = window;
  const { ScrollTrigger } = window;

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  gsap.set('.global-bottle', {
    xPercent: -50,
    rotation: 0,
    scale: 0.2,
    opacity: 0,
  });
  gsap.set('#js-hero-mascot', {
    rotation: -30,
    scale: 0.1,
    opacity: 0,
  });

  const heroTl = gsap.timeline();

  heroTl
    .to('#js-hero-mascot', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
    })
    .to(
      '.global-bottle',
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.4'
    )
    .from(
      '.header__cta',
      {
        xPercent: 200,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.2'
    );

  gsap.to('.global-bottle', {
    rotation: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top top',
      end: () => `+=${window.innerHeight * 4.16}`,
      scrub: true,
    },
  });

  const availabilityTarget = document.querySelector('#js-availability-bottle');
  const globalBottle = document.querySelector('.global-bottle');

  gsap.set('#js-availability-bottle', { opacity: 0 });

  const flyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#js-availability-bottle',
      start: 'center 80%',
      end: 'center center',
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  flyTl
    .to('.global-bottle', {
      ease: 'none',
      x: () => {
        const tR = availabilityTarget.getBoundingClientRect();
        const bR = globalBottle.getBoundingClientRect();
        const targetCenterX = tR.left + tR.width / 2;
        const bottleCenterX = bR.left + bR.width / 2;
        return targetCenterX - bottleCenterX;
      },
      y: () => {
        const bR = globalBottle.getBoundingClientRect();
        const bottleCenterY = bR.top + bR.height / 2;
        return window.innerHeight / 2 - bottleCenterY;
      },
      scale: () => availabilityTarget.offsetHeight / globalBottle.offsetHeight,
      rotation: -5,
      opacity: 0,
    })
    .to('#js-availability-bottle', { opacity: 1, ease: 'none' }, '<');

  ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: { className: 'is-scrolled', targets: '.header' },
  });

  gsap.from('.about__cta', {
    xPercent: -300,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about__cta',
      start: 'top 70%',
    },
  });

  gsap.from('.recipes__cta', {
    xPercent: 600,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.recipes__cta',
      start: 'top 70%',
    },
  });

  const revealHeadings = gsap.utils.toArray([
    '.about__title',
    '.mouthfeel__title',
    '.availability__title',
    '.recipes__title',
  ]);

  revealHeadings.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }
    );
  });

  gsap.fromTo(
    '.feature-card',
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.about__features', start: 'top 80%' },
    }
  );

  gsap.fromTo(
    '.flavor-card',
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.flavors', start: 'top 75%' },
    }
  );

  gsap.fromTo(
    '.product-item',
    { y: 50, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '.availability__grid', start: 'top 80%' },
    }
  );

  ScrollTrigger.refresh();
  window.addEventListener('load', () => ScrollTrigger.refresh());
};
