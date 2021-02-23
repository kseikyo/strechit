import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

const Index = () => (
  <>
    <Head>
      <title>Start | stretch.it</title>
    </Head>
    <Container>
      <ExperienceBar />
      <Content />
    </Container>
  </>
);

export default Index;
