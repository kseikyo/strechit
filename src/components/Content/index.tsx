import { Box, Button, Grid } from "@chakra-ui/react";
import React from "react";
import { CardContent } from "../CardContent";
import { CompletedChallenges } from "../CompletedChallenges";
import { Countdown } from "../Countdown";
import { Profile } from "../Profile";

import styles from "./styles";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <Grid {...styles.grid}>
      <Box>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </Box>
      <Box>
        <CardContent />
      </Box>
    </Grid>
  );
};
