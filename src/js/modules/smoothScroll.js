// ==========================================================================
// SMOOTH SCROLL (LENIS)
// ==========================================================================

export const initScroll = () => {
  // Инициализируем Lenis (библиотека подключена глобально через CDN в index.html)
  const lenis = new window.Lenis({
    duration: 1.2, // Длительность скролла
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Кастомный easing для плавности
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Возвращаем инстанс, чтобы синхронизировать его с GSAP в другом модуле
  return lenis;
};