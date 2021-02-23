import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./styles";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex
      {...styles.container}
    >
      {children}
    </Flex>
  );
};
