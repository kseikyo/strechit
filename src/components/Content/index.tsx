import { Box, Button, Grid } from "@chakra-ui/react";
import React from "react";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { ChallengeBox } from "../ChallengeBox";
import { CompletedChallenges } from "../CompletedChallenges";
import { Countdown } from "../Countdown";
import { Profile } from "../Profile";

import styles from "./styles";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <Grid as="section" sx={{ ...styles.grid }}>
      <CountdownProvider>
        <Box>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </Box>
        <Box>
          <ChallengeBox />
        </Box>
      </CountdownProvider>
    </Grid>
  );
};
