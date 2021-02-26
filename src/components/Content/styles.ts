import { ButtonProps, GridProps } from "@chakra-ui/react";

const styles = {
  grid: {
    flex: "1",
    gridTemplateColumns: [null, "1fr 1fr", "1fr 1fr"],
    gridTemplateRows: ["1fr 1fr .2fr", "auto", null, null],
    mt: ["3rem", "3rem", "0"],
    gap: "6.25rem",
    alignContent: ["center"],
  } as GridProps,
};

export default styles;
