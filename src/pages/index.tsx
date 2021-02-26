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

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
