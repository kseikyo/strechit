import {
  FlexProps,
  HeadingProps,
  GridProps,
  ImageProps,
  ButtonProps,
  TextProps,
} from "@chakra-ui/react";

import { theme } from "../../theme";

const { brand } = theme.colors;

const challengeBoxContainer = {
  height: "100%",
  bg: "white",
  borderRadius: "5px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  py: 6,
  px: 8,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as FlexProps;

const challengeNotActive = {
  flexDir: "column",
  alignItems: "center",
} as FlexProps;

const strongText = {
  textAlign: "center",
  maxW: "25ch",
  fontSize: "2xl",
  fontWeight: "medium",
  lineHeight: "short",
} as TextProps;

const flexText = {
  flexDir: "row",
  alignItems: "center",
  lineHeight: "short",
  textAlign: "left",
  fontSize: "md",
  maxW: "80%",
  mt: 12,
} as FlexProps;

const textIcon = {
  w: 8,
  mr: 4,
} as ImageProps;

const challengeActive = {
  height: "100%",
  flexDir: "column",
  alignItems: "center",
} as FlexProps;

const activeHeader = {
  color: "brand.blue",
  fontWeight: "semibold",
  textAlign: "center",
  w: "100%",
  fontSize: "xl",
  px: 8,
  pt: 0,
  pb: 6,
  borderBottom: `1px solid ${brand.grayLine}`,
} as TextProps;

const activeMain = {
  flex: "1",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
} as FlexProps;

const mainImage = {} as ImageProps;

const mainHeading = {
  fontSize: "2rem",
  fontWeight: "semibold",
  color: brand.title,
  margin: "1.5rem 0 1rem",
} as HeadingProps;

const mainText = {
  lineHeight: "short",
  textAlign: "center",
} as TextProps;

const footer = {
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
} as GridProps;

const button = {
  color: "white",
  fontSize: "md",
  fontWeight: "semibold",
  h: "3rem",
  _hover: { filter: "brightness(0.9)" },
} as ButtonProps;

const failedButton = {
  ...button,
  bg: brand.red,
} as ButtonProps;

const succeededButton = {
  ...button,
  bg: brand.green,
} as ButtonProps;

const styles = {
  challengeBoxContainer,
  challengeNotActive,
  strongText,
  flexText,
  textIcon,
  challengeActive,
  activeHeader,
  activeMain,
  mainHeading,
  mainText,
  mainImage,
  footer,
  failedButton,
  succeededButton,
};

export default styles;
