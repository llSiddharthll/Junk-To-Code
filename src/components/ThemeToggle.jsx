import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') !== 'false';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-black/10 dark:bg-white/10 hover-lift"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <Sun className={`absolute inset-0 w-full h-full transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`} />
        <Moon className={`absolute inset-0 w-full h-full transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;