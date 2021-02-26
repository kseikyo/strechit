import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import styles from "./styles";

interface CompletedChallengesProps {}

export const CompletedChallenges: React.FC<CompletedChallengesProps> = ({}) => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Flex sx={{ ...styles.container }}>
      <Text sx={{ ...styles.firstText }} as="span">
        Completed challenges
      </Text>
      <Text sx={{ ...styles.secondText }} as="span">
        {challengesCompleted}
      </Text>
    </Flex>
  );
};
