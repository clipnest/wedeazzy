import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-2 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#2A101B] border-[#C59A58]/50 text-[#E4C896] hover:bg-[#381624] shadow-sm'
          : 'bg-white border-[#EADBD2] text-[#6B1124] hover:bg-[#F6ECE6] shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#E4C896] rotate-0 scale-100 transition-all duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-[#6B1124] rotate-0 scale-100 transition-all duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-bold pr-1">
          {isDark ? 'Day' : 'Night'}
        </span>
      )}
    </button>
  );
};
