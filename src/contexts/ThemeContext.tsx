import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);

    if (theme === "dark") {
      root.style.setProperty("--background-primary", "#1A1A1A");
      root.style.setProperty("--background-secondary", "#262626");
      root.style.setProperty("--background-tertiary", "#333333");
      root.style.setProperty("--text-primary", "#F2F2F2");
      root.style.setProperty("--text-secondary", "#D9D9D9");
      root.style.setProperty("--text-tertiary", "#808080");
      root.style.setProperty("--border-primary", "#333333");
      root.style.setProperty("--border-secondary", "#262626");
      root.style.setProperty("--card-background", "#262626");
      root.style.setProperty("--card-border", "#333333");
    } else {
      root.style.setProperty("--background-primary", "#FFFFFF");
      root.style.setProperty("--background-secondary", "#F8F9FA");
      root.style.setProperty("--background-tertiary", "#E9ECEF");
      root.style.setProperty("--text-primary", "#212529");
      root.style.setProperty("--text-secondary", "#495057");
      root.style.setProperty("--text-tertiary", "#6C757D");
      root.style.setProperty("--border-primary", "#DEE2E6");
      root.style.setProperty("--border-secondary", "#CED4DA");
      root.style.setProperty("--card-background", "#FFFFFF");
      root.style.setProperty("--card-border", "#DEE2E6");
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
