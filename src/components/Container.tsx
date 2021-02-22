import { Flex } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      maxWidth="992px"
      mx={["auto"]}
      py={[10]}
      px={[8]}
    >
      {children}
    </Flex>
  );
};
