import { Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";

import styles from "./styles";

interface ChallengeBoxProps {}

export const ChallengeBox: React.FC<ChallengeBoxProps> = ({}) => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <>
      <Flex sx={{ ...styles.challengeBoxContainer }}>
        {activeChallenge.type && (
          <Flex sx={{ ...styles.challengeActive }}>
            <Text sx={{ ...styles.activeHeader }} as="header">
              Win {activeChallenge.amount} xp
            </Text>
            <Flex sx={{ ...styles.activeMain }} as="main">
              {activeChallenge.type === "body" ? (
                <Image
                  sx={{ ...styles.mainImage }}
                  src="icons/body.svg"
                  alt="Hand holding dumbells"
                />
              ) : (
                <Image
                  sx={{ ...styles.mainImage }}
                  src="icons/eye.svg"
                  alt="Eye exercise"
                />
              )}
              <Text sx={{ ...styles.mainHeading }}>New challenge</Text>

              <Text sx={{ ...styles.mainText }} as="strong">
                {activeChallenge.description}
              </Text>
            </Flex>
            <Grid sx={{ ...styles.footer }} as="footer">
              <Button
                onClick={handleChallengeFailed}
                sx={{ ...styles.failedButton }}
              >
                Failed
              </Button>
              <Button
                onClick={handleChallengeSucceeded}
                sx={{ ...styles.succeededButton }}
              >
                Completed
              </Button>
            </Grid>
          </Flex>
        )}

        {!activeChallenge.type ? (
          <Flex sx={{ ...styles.challengeNotActive }}>
            <Text sx={{ ...styles.strongText }} as="strong">
              Finish a cicle to receive a new challenge
            </Text>
            <Flex as="p" sx={{ ...styles.flexText }}>
              <Image
                sx={{ ...styles.textIcon }}
                src="icons/level-up.svg"
                alt="Level up"
              />
              Level up completing challenges.
            </Flex>
          </Flex>
        ) : null}
      </Flex>
    </>
  );
};
