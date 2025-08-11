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
    // Already on homepage, just scroll
    scrollToContact();
  } else {
    // Navigate to homepage first, then scroll
    navigate('/');
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
    // Already on Qikpod page, just scroll
    scrollToContact();
  } else {
    // Navigate to Qikpod page first, then scroll
    navigate('/qikpod');
    scrollToContact();
  }
};