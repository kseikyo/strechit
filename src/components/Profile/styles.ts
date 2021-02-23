import { BoxProps, FlexProps, ImageProps, TextProps } from "@chakra-ui/react";

const styles = {
  container: {
    align: "center",
  } as FlexProps,
  profilePicture: {
    w: "5.5rem",
    h: "5.5rem",
    borderRadius: "50%",
    src: "https://github.com/kseikyo.png",
    loading: "lazy",
    alt: "User profile",
  } as ImageProps,
  textContainer: {
    ml: 6,
  } as BoxProps,
  text: {
    fontSize: "2xl",
    fontWeight: "semibold",
    color: "brand.title",
    as: "strong",
  } as TextProps,
  levelText: {
    d: "flex",
    fontSize: "md",
    mt: 2,
  } as TextProps,
  levelImage: {
    mr: 2,
    d: "inline-block",
    src: "icons/level.svg",
    alt: "Level up arrow",
  } as ImageProps,
};

export default styles;
