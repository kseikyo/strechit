import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <Flex {...styles.container}>
      <Image {...styles.profilePicture} />
      <Box {...styles.textContainer}>
        <Text {...styles.text}>Lucas Sierota</Text>
        <Text {...styles.levelText}>
          <Image {...styles.levelImage} />
          Level 1
        </Text>
      </Box>
    </Flex>
  );
};
