import { BoxProps, ButtonProps, FlexProps, TextProps } from "@chakra-ui/react";

import { theme } from "../../theme";

const button = {
  bg: "brand.blue",
  _hover: { bg: "brand.blueDark" },
  _active: { bg: "brand.blueDark", opacity: 0.9 },
  color: "white",
  variant: "solid",
  w: "100%",
  h: 20,
  mt: 8,
  fontSize: "xl",
  fontWeight: "semibold",
};

const styles = {
  container: {
    alignItems: "center",
    fontFamily: "Rajdhani",
    fontWeight: "semibold",
    color: "brand.title",
  } as FlexProps,
  timerContainer: {
    flex: "1",
    alignItems: "center",
    justifyContent: "space-evenly",
    bg: "white",
    boxShadow: "0 0 60px rgba(0, 0, 0, 0.05)",
    borderRadius: "5px",
    fontSize: "8.5rem",
    textAlign: "center",
  } as FlexProps,
  spanTimer: {
    flex: "1",
  } as TextProps,
  separator: {
    fontSize: "6.25rem",
    mx: 2,
  } as BoxProps,
  button: button as ButtonProps,
  buttonActive: {
    ...button,
    bg: "white",
    _hover: { bg: "brand.red", color: "white" },
    _active: { bg: "brand.red", opacity: 0.9 },
    color: "brand.title",
  } as ButtonProps,
  buttonCompleted: {
    ...button,
    bg: "white",
    _hover: { bg: "white" },
    _active: {},
    color: "brand.text",
    borderBottom: `4px solid ${theme.colors.brand.green}`,
  } as ButtonProps,
};

export default styles;
