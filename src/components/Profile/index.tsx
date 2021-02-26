import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  const { level } = useContext(ChallengesContext);

  return (
    <Flex sx={{ ...styles.container }}>
      <Image {...styles.profilePicture} />
      <Box sx={{ ...styles.textContainer }}>
        <Text sx={{ ...styles.text }} as="strong">
          Lucas Sierota
        </Text>
        <Text sx={{ ...styles.levelText }}>
          <Image {...styles.levelImage} />
          Level {level}
        </Text>
      </Box>
    </Flex>
  );
};
