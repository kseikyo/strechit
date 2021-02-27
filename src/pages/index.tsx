import Head from "next/head";
import { GetServerSideProps } from "next";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Index: React.FC<HomeProps> = (props) => (
  <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    <Head>
      <title>Start | stretch.it</title>
    </Head>
    <Container>
      <ExperienceBar />
      <Content />
    </Container>
  </ChallengesProvider>
);

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  // ?? is from ES2020
  // ?? operator returns the right operand if the left operand is null or undefined
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
};
