import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./styles";
import { ChallengesContext } from "../../contexts/ChallengesContext";
interface ExperienceBarProps {}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({}) => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = ~~(
    (currentExperience * 100) /
    experienceToNextLevel
  );

  return (
    <Flex sx={{ ...styles.container }} as="header">
      <Text>0 xp</Text>
      <Box sx={{ ...styles.bar }}>
        <Box sx={{ ...styles.barCompleted }} w={`${percentToNextLevel}%`} />
        <Text sx={{ ...styles.barText }} left={`${percentToNextLevel}%`}>
          {currentExperience} xp
        </Text>
      </Box>
      <Text>{experienceToNextLevel} xp</Text>
    </Flex>
  );
};
