import { FlexProps, TextProps } from "@chakra-ui/react";

const styles = {
  container: {
    align: "center",
    justify: "space-between",
    my: 14,
    mx: 0,
    pb: 4,
    borderBottom: "1px solid #d7d8da",
    fontWeight: "medium",
  } as FlexProps,
  firstText: {
    fontSize: "xl",
    as: "span",
  } as TextProps,
  secondText: {
    fontSize: "2xl",
    as: "span",
  } as TextProps,
};

export default styles;
