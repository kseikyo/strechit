import { BoxProps, FlexProps, TextProps } from "@chakra-ui/react";

const styles = {
  container: {
    align: "center",
    as: "header",
    fontSize: ["md"],
  } as FlexProps,
  bar: {
    flex: "1",
    h: 1,
    borderRadius: 1,
    bg: "brand.grayLine",
    mx: { base: 6 },
    pos: "relative",
  } as BoxProps,
  barCompleted: {
    w: ["50%"],
    h: 1,
    borderRadius: 4,
    bg: "brand.green",
  } as BoxProps,
  barText: {
    pos: "absolute",
    left: ["50%"],
    top: [3],
    transform: "translateX(-50%)",
  } as TextProps,
};

export default styles;
