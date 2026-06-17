export const initScroll = () => {
  const lenis = new window.Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  });

  return lenis;
};
