import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type ThemeMode = 'leapmile' | 'qikpod';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('leapmile');
  const location = useLocation();

  const switchToQikpod = () => {
    setTheme('qikpod');
    // #FEDD3D converted to HSL: hsl(49, 100%, 62%)
    document.documentElement.style.setProperty('--primary', '49 100% 62%');
    // #FFF4C6 converted to HSL: hsl(54, 75%, 91%)
    document.documentElement.style.setProperty('--background', '54 75% 91%');
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
    // Apply theme based on current route
    if (location.pathname.includes('qikpod')) {
      switchToQikpod();
    } else {
      switchToLeapmile();
    }
  }, [location.pathname]);

  return {
    theme,
    switchToQikpod,
    switchToLeapmile
  };
};