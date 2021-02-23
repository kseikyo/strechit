import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./styles";
interface ExperienceBarProps {}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({}) => {
  return (
    <Flex {...styles.container}>
      <Text>0 xp</Text>
      <Box {...styles.bar}>
        <Box {...styles.barCompleted} />
        <Text {...styles.barText}>300 xp</Text>
      </Box>
      <Text>600 xp</Text>
    </Flex>
  );
};
