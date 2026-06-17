import '../scss/style.scss';
import 'lenis/dist/lenis.css';

import { initScroll } from './modules/smoothScroll.js';
import { initAnimations } from './modules/animations.js';

const initMobileNavigation = () => {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');

  if (!menuToggle || !mobileNav) {
    return;
  }

  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileNav.classList.toggle('is-open', isOpen);
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    setMenuState(!isOpen);
  });

  mobileNav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) {
      return;
    }

    setMenuState(false);
  });

  document.addEventListener('keydown', (event) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    if (event.key !== 'Escape' || !isOpen) {
      return;
    }

    setMenuState(false);
    menuToggle.focus();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  const lenis = initScroll();

  initAnimations(lenis);
});
