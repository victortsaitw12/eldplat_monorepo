const color = {
  // Blue
  B50: "#F8FAFF",
  B100: "#E2EDFF",
  B200: "#AAC7FF",
  B300: "#679DEF",
  B400: "#3670C9",
  B500: "#1952A8",
  B600: "#104BA4",
  // Green
  G50: "#F5FBF8",
  G100: "#EEF8F4",
  G200: "#DCF2EA",
  G300: "#A3E6CD",
  G400: "#52BD94",
  G500: "#429777",
  G600: "#317159",
  // Yellow
  Y50: "#FFFAF1",
  Y100: "#FFEFD2",
  Y200: "#FFDFA6",
  Y300: "#FFD079",
  Y400: "#FFB020",
  Y500: "#996A13",
  Y600: "#66460D",
  // Red
  R50: "#FDF4F4",
  R100: "#F9DADA",
  R200: "#F4B6B6",
  R300: "#EE9191",
  R400: "#D14343",
  R500: "#A73636",
  R600: "#7D2828",
  // Violet
  V50: "#F8F7FD",
  V100: "#E7E4F9",
  V200: "#D0CAF4",
  V300: "#B8AFEE",
  V400: "#897AE3",
  V500: "#6E62B6",
  V600: "#524988",
  // Teal
  T50: "#D3F5F7",
  T100: "#D3F5F7",
  T200: "#A8EAEF",
  T300: "#7CE0E6",
  T400: "#25CBD6",
  T500: "#10899E",
  T600: "#0F5156",
  // Pink
  P50: "#FEF5FB",
  P100: "#FBDDF3",
  P200: "#F8BBE7",
  P300: "#F499DA",
  P400: "#ED55C2",
  P500: "#BE449B",
  P600: "#8E3374",
  //
  O50: "#FDF7F4",
  O100: "#F8E3DA",
  O200: "#F2C8B6",
  O300: "#EBAC91",
  O400: "#DE7548",
  O500: "#B25E3A",
  O600: "#85462B",
  // Neutral
  N0: "#FFFFFF",
  N50: "#FBFDFF",
  N75: "#F6FAFF",
  N100: "#F1F6FD",
  N200: "#E2ECF7",
  N300: "#D5E2F1",
  N400: "#AFC3DA",
  N500: "#8EA8C7",
  N600: "#718BAA",
  N700: "#567190",
  N800: "#3A5779",
  N900: "#223F65",
  // Chart
  ChartPink: "#FD8ADC",
  ChartRed: "#F53630",
  ChartOrange: "#FF9D66",
  ChartYellow: "#FAC86B",
  ChartGreen: "#6BDAAE",
  ChartTeal: "#74DDE5",
  ChartAqua: "#70B0FF",
  ChartBlue: "#678AF7",
  ChartViolet: "#678AF7"
};

const fontSize = {
  CodeDefault: "1rem",
  CodeMinimal: "rem",
  Paragraph100: "0.86rem",
  Paragraph200: "1rem",
  Paragraph300: "1.14rem",
  Heading100: "1rem",
  Heading200: "0.86rem",
  Heading300: "0.86rem",
  Heading400: "1rem",
  Heading500: "1.14rem",
  Heading600: "1.28rem",
  Heading700: "1.43rem",
  Heading800: "1.71rem",
  Heading900: "2.28rem"
};

const fontWeight = {
  CodeDefault: "400",
  CodeMinimal: "400",
  Paragraph100: "400",
  Paragraph200: "400",
  Paragraph300: "400",
  Heading100: "500",
  Heading200: "600",
  Heading300: "500",
  Heading400: "600",
  Heading500: "600",
  Heading600: "600",
  Heading700: "600",
  Heading800: "600",
  Heading900: "600"
};

const theme = {
  screen: {
    phone: "320px", // 手機
    tablet: "768px", // 平板
    laptop: "980px", // 筆電、桌機
    desktop: "1280px" // 較大桌機
  },
  color,
  primaryPalette: {
    Blue: color.B400,
    Neutral: color.N800
  },
  fontSize,
  fontWeight
};

export default theme;
export type ThemeType = typeof theme;
