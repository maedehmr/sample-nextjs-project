const baseTheme = {
  fontSize: {
    headLine: "3.875rem",
    subHeadLine: "2rem",
    body: "1.125rem",
    lables: "1rem",
    codeSnippets: "0.875rem",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    mainBackground: "#FFFFFF",
    mainColor: "#000000",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    mainBackground: "#011627",
    mainColor: "#E5E9F0",
  },
};
