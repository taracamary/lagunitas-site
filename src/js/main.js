import '../scss/style.scss';
import 'lenis/dist/lenis.css';

import { initScroll } from './modules/smoothScroll.js';
import { initAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  const lenis = initScroll();

  initAnimations(lenis);
});
