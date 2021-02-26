import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  SmallCloseIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import styles from "./styles";
import { CountdownContext } from "../../contexts/CountdownContext";

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = ({}) => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <Flex sx={{ ...styles.container }}>
        <Flex sx={{ ...styles.timerContainer }}>
          <Text
            sx={{ ...styles.spanTimer }}
            as="span"
            borderRight="1px solid #f0f1f3"
          >
            {minuteLeft}
          </Text>
          <Text sx={{ ...styles.spanTimer }} as="span">
            {minuteRight}
          </Text>
        </Flex>
        <Box sx={{ ...styles.separator }}>:</Box>
        <Flex sx={{ ...styles.timerContainer }}>
          <Text sx={{ ...styles.spanTimer }} as="span">
            {secondLeft}
          </Text>
          <Text
            sx={{ ...styles.spanTimer }}
            as="span"
            borderLeft="1px solid #f0f1f3"
          >
            {secondRight}
          </Text>
        </Flex>
      </Flex>
      {!isActive && !hasFinished && (
        <Button
          rightIcon={<ChevronRightIcon w={6} h={6} />}
          onClick={startCountdown}
          sx={{ ...styles.button }}
        >
          Start a new cicle
        </Button>
      )}
      {isActive && (
        <Button
          rightIcon={<SmallCloseIcon w={6} h={6} />}
          onClick={resetCountdown}
          sx={{ ...styles.buttonActive }}
        >
          Cancel cicle
        </Button>
      )}
      {hasFinished && (
        <Button
          rightIcon={<CheckCircleIcon color="brand.green" w={5} h={5} />}
          disabled
          sx={{ ...styles.buttonCompleted }}
        >
          Cicle finished
        </Button>
      )}
    </>
  );
};
