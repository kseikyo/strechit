import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme";
import { ExperienceBar } from "./components/ExperienceBar";
import { Container } from "./components/Container";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <ExperienceBar />
      </Container>
    </ChakraProvider>
  );
}

export default App;
