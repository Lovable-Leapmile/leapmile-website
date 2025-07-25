import { useEffect, useState } from 'react';

type ThemeMode = 'leapmile' | 'qikpod';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('leapmile');

  const switchToQikpod = () => {
    setTheme('qikpod');
    document.documentElement.style.setProperty('--primary', '49 100% 62%'); // #FEDD3D
    document.documentElement.style.setProperty('--background', '54 75% 91%'); // #FFF4C6
    document.documentElement.style.setProperty('--tech-gradient', 'linear-gradient(135deg, hsl(49 100% 62%), hsl(49 100% 75%))');
    document.documentElement.style.setProperty('--shadow-tech', '0 10px 40px hsl(49 100% 62% / 0.15)');
    document.documentElement.style.setProperty('--shadow-card-hover', '0 20px 50px hsl(49 100% 62% / 0.25)');
  };

  const switchToLeapmile = () => {
    setTheme('leapmile');
    document.documentElement.style.setProperty('--primary', '254 60% 29%');
    document.documentElement.style.setProperty('--background', '0 0% 100%');
    document.documentElement.style.setProperty('--tech-gradient', 'linear-gradient(135deg, hsl(254 60% 29%), hsl(254 46% 63%))');
    document.documentElement.style.setProperty('--shadow-tech', '0 10px 40px hsl(254 60% 29% / 0.15)');
    document.documentElement.style.setProperty('--shadow-card-hover', '0 20px 50px hsl(254 60% 29% / 0.25)');
  };

  useEffect(() => {
    // Initialize with default theme
    switchToLeapmile();
  }, []);

  return {
    theme,
    switchToQikpod,
    switchToLeapmile
  };
};