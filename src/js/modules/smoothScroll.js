// ==========================================================================
// SMOOTH SCROLL (LENIS)
// ==========================================================================

export const initScroll = () => {
  // Инициализируем Lenis с более отзывчивыми настройками
  const lenis = new window.Lenis({
    lerp: 0.1, // Отзывчивый скролл (убрали вязкий duration)
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  return lenis;
};