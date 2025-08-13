import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFavicon = () => {
  const location = useLocation();

  useEffect(() => {
    const updateFavicon = () => {
      // Check if current path is QikPod related
      const isQikPodPage = location.pathname.includes('/qikpod') || 
                           location.pathname.includes('/qikpod/solutions/');
      
      if (isQikPodPage) {
        // Set QikPod favicon
        const qikpodFavicon = 'https://leapmile-website.blr1.cdn.digitaloceanspaces.com/favicon_new_q.png';
        
        // Update or create favicon link
        let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        
        link.href = qikpodFavicon;
        link.type = 'image/png';
        
        // Also update apple-touch-icon if it exists
        let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
        if (!appleTouchIcon) {
          appleTouchIcon = document.createElement('link');
          appleTouchIcon.rel = 'apple-touch-icon';
          document.head.appendChild(appleTouchIcon);
        }
        appleTouchIcon.href = qikpodFavicon;
        
      } else {
        // Set default Leapmile favicon
        const defaultFavicon = 'https://leapmile-website.blr1.cdn.digitaloceanspaces.com/favicon_new.png';
        
        // Update or create favicon link
        let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        
        link.href = defaultFavicon;
        link.type = 'image/png';
        
        // Also update apple-touch-icon if it exists
        let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
        if (!appleTouchIcon) {
          appleTouchIcon = document.createElement('link');
          appleTouchIcon.rel = 'apple-touch-icon';
          document.head.appendChild(appleTouchIcon);
        }
        appleTouchIcon.href = defaultFavicon;
      }
    };

    updateFavicon();
  }, [location.pathname]);
};

export default useFavicon;
