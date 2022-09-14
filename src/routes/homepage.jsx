import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import SkillLevels from "../components/skill_levels";
import { ClientProjects, ExerciseProjects } from "../components/projects";
import Contact from "../components/contact";
import { Stack, Container, Box, IconButton, Typography } from "@mui/material";
import { FacebookRounded, GitHub, Twitter } from "@mui/icons-material";

const Homepage = () => {
  return (
    <>
      <Header/>
      <Box mb={{xs : 10, md : 22}}>
        <Container>
          <Stack spacing={{xs : 10, sm : 15, md : 24}}>
            <Hero/>
            <AboutMe/>
            <SkillLevels/>
            <ClientProjects/>
            <ExerciseProjects/>
            <Contact/>
          </Stack>
        </Container>
      </Box>

      <Box sx={{height : 120, bgcolor : 'primary.main'}}>
        <Container maxWidth='sm' sx={{height : '100%'}}>
          <Stack sx={{height : '100%'}} justifyContent='center'>
            <Typography color='white' sx={{fontSize : 17}} textAlign='center'> Thanks for visiting my site ☺ </Typography>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <IconButton sx={{color : 'white'}}>
                <FacebookRounded fontSize="large" />
              </IconButton>
              <IconButton sx={{color : 'white'}}>
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton sx={{color : 'white'}}>
                <Twitter fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;
