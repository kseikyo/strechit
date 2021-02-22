import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Webfont from "webfontloader";

Webfont.load({
  google: {
    families: ["Inter: 400, 500, 600", "Rajdhani: 600"],
  },
});

// Add custom breakpoints
const breakpoints = createBreakpoints({
  sm: "30em", // 480px
  md: "45em", // 720px
  lg: "67.5em", // 1080px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
});

// Add custom fonts to theme
const fonts = {
  body: "Inter, sans-serif",
  mono: `'Menlo', monospace`,
};

// Creating brand colors as object
const brand = {
  white: "#fff",
  background: "#f2f3f5",
  "gray-line": "#dcdde0",
  text: "#666666",
  "text-highlight": "#b3b9ff",
  title: "#2e384d",
  red: "#e83f5b",
  green: "#4cd62b",
  blue: "#5965e0",
  "blue-dark": "#4953b8",
  "blue-twitter": "#2aa9e0",
};

// Appending colors, fonts and default global styles to the new theme
export const theme = extendTheme({
  colors: {
    brand,
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      html: {
        // Adding responsive font-sizing on whole app depending on breakpoint
        fontSize: { sm: "81.25%", md: "87.5%", lg: "93.75%" },
      },
      body: {
        bg: "brand.background",
        color: "brand.text",
      },
      a: {
        color: "inherit",
      },
    },
  },
});
