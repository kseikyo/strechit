import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import styles from "./styles";

interface CompletedChallengesProps {}

export const CompletedChallenges: React.FC<CompletedChallengesProps> = ({}) => {
  return (
    <Flex {...styles.container}>
      <Text {...styles.firstText}>Desafios completos</Text>
      <Text {...styles.secondText}>5</Text>
    </Flex>
  );
};
