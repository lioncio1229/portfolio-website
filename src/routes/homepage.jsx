import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import SkillLevels from "../components/skill_levels";
import JobExperience from '../components/job-experience';
import { ClientProjects, ExerciseProjects } from "../components/projects";
import Contact from "../components/contact";
import { Stack, Container, Box, IconButton, Typography } from "@mui/material";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { useState, useRef, useEffect} from "react";
import useScroll from "../useScroll";
import config from "../config";


const Homepage = () => {

  const [toolboxIndex, setToolboxIndex] = useState(0);

  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactMeRef = useRef(null);
  const workExpRef = useRef(null);

  const {to, getElementPos, getElementHeight, getScrollPos} = useScroll();

  const setToolbox = (index) => {
    switch(index)
    {
      case 0: to(heroRef); break;
      case 1: to(aboutMeRef); break;
      case 2: to(workExpRef); break;
      case 3: to(projectRef); break;
      case 4: to(skillRef); break;
      case 5: to(contactMeRef); break;
    }
    setToolboxIndex(index);
  }

  const updateSelectedButton = (e) => {
    const locations = [
      getElementHeight(heroRef) + getElementPos(heroRef),
      getElementHeight(aboutMeRef) + getElementPos(aboutMeRef),
      getElementHeight(workExpRef) + getElementPos(workExpRef),
      getElementHeight(projectRef) + getElementPos(projectRef),
      getElementHeight(skillRef) + getElementPos(skillRef),
      getElementHeight(contactMeRef) + getElementPos(contactMeRef),
    ];
    
    const scrollPos = getScrollPos();
    for (let i = 0; i < locations.length; i++) {
        if(scrollPos <= locations[i])
        {
          setToolboxIndex(i);
          break;
        }
    }
  }

  useEffect(() => {
    document.addEventListener('wheel', e => updateSelectedButton(e));
  });

  const openRoute = (path) => {
    window.open(path, '_blank');
  } 

  const nav = {
    scrollMarginTop : '80px'
  }

  return (
    <>
      <Header buttons={config.headerButtons} toolbarIndex={toolboxIndex} setToolbarIndex={setToolbox} onHireMeClick={() => setToolbox(5)} />
      <Box mt={7} mb={{xs : 10, md : 22}}>
        <Container>
          <Stack spacing={{xs : 10, sm : 15, md : 24}}>
            <div style={nav} ref={heroRef}> <Hero onContactmeClick={()=>setToolbox(5)} onMyProjectClick={()=>setToolbox(3)} /> </div>
            <div style={nav} ref={aboutMeRef}> <AboutMe/> </div>
            <div style={nav} ref={workExpRef}><JobExperience/></div>
            <div style={nav} ref={projectRef}>
              <div style={{marginBottom : '50px'}}>
                <ClientProjects/>
              </div>
              <ExerciseProjects/>
            </div>
            <div style={nav} ref={skillRef}><SkillLevels/></div>
            <div style={nav} ref={contactMeRef}>
              <Contact/>
            </div>
          </Stack>
        </Container>
      </Box>

      <Box sx={{height : 120, bgcolor : 'primary.main'}}>
        <Container maxWidth='sm' sx={{height : '100%'}}>
          <Stack sx={{height : '100%'}} justifyContent='center'>
            <Typography color='white' sx={{fontSize : 17}} textAlign='center'> Thanks for visiting my site ☺ </Typography>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <IconButton sx={{color : 'white'}} onClick={() => openRoute('/facebook')}>
                <FacebookRounded fontSize="large" />
              </IconButton>
              <IconButton sx={{color : 'white'}} onClick={() => openRoute('/linkedin')}>
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton sx={{color : 'white'}} onClick={() => openRoute('/github')}>
                <GitHub fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;
