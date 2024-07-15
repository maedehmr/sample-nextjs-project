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
    primaryBackground: "#F8F8FF",
    secondryBackground: "#F0F4F8",
    darkBakground: "#FFFFFF",
    primaryText: "#011627",
    greenText: "#00796B",
    purpleText: "#3F51B5",
    lightText: "#607B96",
    orangeAccent: "#FF7043",
    greenAccent: "#4CAF50",
    pinkAccent: "#E57373",
    purpleAccent: "#BA68C8",
    stroke: "#B0BEC5",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primaryBackground: "#011627",
    secondryBackground: "#011221",
    darkBakground: "#01080E",
    primaryText: "#607B96",
    greenText: "#3C9D93",
    purpleText: "#4D5BCE",
    lightText: "#FFFFFF",
    orangeAccent: "#FEA55F",
    greenAccent: "#43D9AD",
    pinkAccent: "#E99287",
    purpleAccent: "#C98BDF",
    stroke: "#1E2D3D",
  },
};
