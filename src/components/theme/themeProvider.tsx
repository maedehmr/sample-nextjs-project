"use client";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/globalStyles";
import { useThemeStore } from "@/hooks/useThemeStore";
import "@/styles/fonts/font.css";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";

interface ThemeProviderProps {
  children: ReactNode;
}

const ClientThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
