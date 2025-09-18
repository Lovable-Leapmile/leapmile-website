import { NavigateFunction } from 'react-router-dom';

/**
 * Navigate to home page and scroll to contact section
 * @param navigate - React Router navigate function
 * @param currentPath - Current location pathname
 */
export const navigateToContact = (navigate: NavigateFunction, currentPath: string) => {
  const scrollToContact = () => {
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  if (currentPath === '/') {
    // Already on homepage, update URL with hash and scroll
    navigate('/#contact', { replace: true });
    scrollToContact();
  } else {
    // Navigate to homepage with hash, then scroll
    navigate('/#contact');
    scrollToContact();
  }
};

/**
 * Navigate to Qikpod page and scroll to contact section
 * @param navigate - React Router navigate function
 * @param currentPath - Current location pathname
 */
export const navigateToQikpodContact = (navigate: NavigateFunction, currentPath: string) => {
  const scrollToContact = () => {
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  if (currentPath === '/qikpod') {
    // Already on Qikpod page, update URL with hash and scroll
    navigate('/qikpod#contact', { replace: true });
    scrollToContact();
  } else {
    // Navigate to Qikpod page with hash, then scroll
    navigate('/qikpod#contact');
    scrollToContact();
  }
};