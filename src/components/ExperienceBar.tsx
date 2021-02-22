import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface ExperienceBarProps {}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({}) => {
  return (
    <Flex align="center" as="header" fontSize={["md"]}>
      <Text>0 xp</Text>
      <Box
        flex="1"
        h={1}
        borderRadius={1}
        bg="brand.gray-line"
        mx={{ base: 6 }}
        pos="relative"
      >
        <Box w={["50%"]} h={1} borderRadius={4} bg="brand.green" />
        <Text
          pos="absolute"
          left={["50%"]}
          top={[3]}
          transform="translate(-50%)"
        >
          300 xp
        </Text>
      </Box>
      <Text>600 xp</Text>
    </Flex>
  );
};
