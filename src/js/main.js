// Подключаем главный SCSS-файл. 
// Vite автоматически перехватит его, скомпилирует и добавит на страницу.
import '../scss/style.scss';

// Импортируем JS-модули
import { initScroll } from './modules/smoothScroll.js';
import { initAnimations } from './modules/animations.js';

// Инициализируем логику после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Запускаем Lenis и получаем его инстанс
    const lenis = initScroll();
    
    // Передаем Lenis в модуль анимаций для синхронизации с GSAP
    initAnimations(lenis);
    
    console.log('App initialized successfully!');
});