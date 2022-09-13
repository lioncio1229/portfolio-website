import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import SkillLevels from "../components/skill_levels";
import { Stack, Container } from "@mui/material";
import { ClientProjects, ExerciseProjects } from "../components/projects";

const Homepage = () => {
  return (
    <>
      <Header/>
      <Container>
        <Stack spacing={24}>
          <Hero/>
          <AboutMe/>
          <SkillLevels/>
          <ClientProjects/>
          <ExerciseProjects/>
        </Stack>
      </Container>
    </>
  );
};

export default Homepage;
