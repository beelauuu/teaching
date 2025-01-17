import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // On initialization, get darkMode local storage if it exists, otherwise it is false
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  // Everytime isDarkMode changes, set darkMode to whatever isDarkMode is curretnly
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // For setting dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;