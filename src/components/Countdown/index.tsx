import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { CSSProperties, useEffect, useState } from "react";

import styles from "./styles";

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = ({}) => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    setActive(false);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return;
    }
    if (time > 0) {
      setTime(25 * 60);
      return;
    }
    if (time === 0) {
      setActive(false);
      setCompleted(true);
    }
  }, [active, time]);

  return (
    <>
      <Flex {...styles.container}>
        <Flex {...styles.timerContainer}>
          <Text {...styles.spanTimer} borderRight="1px solid #f0f1f3">
            {minuteLeft}
          </Text>
          <Text {...styles.spanTimer}>{minuteRight}</Text>
        </Flex>
        <Box {...styles.separator}>:</Box>
        <Flex {...styles.timerContainer}>
          <Text {...styles.spanTimer}>{secondLeft}</Text>
          <Text {...styles.spanTimer} borderLeft="1px solid #f0f1f3">
            {secondRight}
          </Text>
        </Flex>
      </Flex>
      {!active && !completed && (
        <Button onClick={startCountdown} {...styles.button}>
          Iniciar um ciclo
        </Button>
      )}
      {active && (
        <Button onClick={resetCountdown} {...styles.buttonActive}>
          Abandonar ciclo
        </Button>
      )}
      {completed && (
        <Button {...styles.buttonCompleted}>Ciclo encerrado</Button>
      )}
    </>
  );
};
