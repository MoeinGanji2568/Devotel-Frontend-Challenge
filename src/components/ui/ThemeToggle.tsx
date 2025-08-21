import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-10 h-10 rounded-lg
        transition-all duration-200 ease-in-out
        bg-background-secondary hover:bg-background-tertiary
        text-text-primary hover:text-text-secondary
        border border-border-primary hover:border-border-secondary
        focus:outline-none focus:ring-2 focus:ring-C_primary-100 focus:ring-offset-2
        dark:focus:ring-offset-C_gray-500
        ${className}
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        className={`w-5 h-5 transition-transform duration-200 ${
          theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute w-5 h-5 transition-transform duration-200 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
    </button>
  );
};
