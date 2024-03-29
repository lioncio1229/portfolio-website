import ProjectCard from "./project.card";
import { GitHub, Shop} from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";

const clientProjects = [
  {
    title: "Olinsterg Unlock",
    description: `This is an admin monitoring system for my client's capstone project.
        Their project is a door-lock system using RFID for their 
        crime laboratory where they need to record each access
        information to the database where can be manage by
        admin.`,
    bgcolor : '#CCD6FF',
    imageURL : "/projects/olinsterg.png",
    visitIcon : <GitHub sx={{ fontSize: 45 }} />,
    tools : ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
    path : '/olinsterg-unlock',
    titleButtonPath : 'https://github.com/lioncio1229/Unlock.git',
    viewAbout : '/olinsterg_unlock_video'
  },

  {
    title: "Spider Gagambattle",
    description: `I also makes games. This is a 3D mobile game base on spiders.
                You can buy and upgrade your spider to fight with other spider
                with realistic animation and good graphics!`,
    bgcolor : '#E5FEFF',
    imageURL : "/projects/spider.png",
    visitIcon : <Shop sx={{ fontSize: 45 }} />,
    tools : ["Unity Engine", "C#", "Blender", "Photoshop", "Audacity"],
    path : '/spider-gagambattle',
    titleButtonPath : '/spider-gagambattle',
    viewAbout : '/spidergagambattle_video'
  }
];

const exerciseProjects = [
  {
    title: "My Notepad",
    description: `Notepad for website with built-in content reader`,
    bgcolor : '#FFFDE2',
    imageURL : "/projects/my-notepad.png",
    visitIcon : <GitHub sx={{ fontSize: 45 }} />,
    tools : ["HTML", "CSS", "Javascript", "React", "Express", "MongoDB"],
    path : '/mynotepad',
    titleButtonPath : 'https://github.com/lioncio1229/exercise-projects.git',
    viewAbout : null
  },

  {
    title: "Simple Calculator",
    description: `The purpose of this simple project is to practice MUI.`,
    bgcolor : '#96C8FB',
    imageURL : "/projects/simple-calculator.png",
    visitIcon : <GitHub sx={{ fontSize: 45 }} />,
    tools : ["Javascript", "React", "MUI"],
    path : '/calculator',
    titleButtonPath : 'https://github.com/lioncio1229/exercise-projects.git',
    viewAbout : null
  },

  {
    title: "Resistor Color Coding",
    description: `Handy tool for calculating the value you want to get from
        resistor.`,
    bgcolor : '#AAD6EC',
    imageURL : "/projects/resistor-color-coding.png",
    visitIcon : <GitHub sx={{ fontSize: 45 }} />,
    tools : ["Javascript", "React", "MUI"],
    path : '/resistor-color-coding',
    titleButtonPath : 'https://github.com/lioncio1229/exercise-projects.git',
    viewAbout : null
  },

  {
    title: "Cypher Cryptography Illustrator",
    description: `I created this for my discussion about Cypher cryptography.
        This tool makes explanation easy.`,
    bgcolor : '#F8FFB7',
    imageURL : "/projects/CCI.png",
    visitIcon : <GitHub sx={{ fontSize: 45 }} />,
    tools :  ["HTML", "CSS", "Javascript", "PHP"],
    path : '/cci',
    titleButtonPath : 'https://github.com/lioncio1229/Cipher-Cryptography-Illustrator.git',
    viewAbout : null
  },
];

const Projects = ({title, projects}) => (
  <Box>

    <Typography variant='h4' fontWeight='bold' color='primary' pb={3}>{title}</Typography>

    <Grid container rowSpacing={10}>
      {
        projects.map((p) => (
          <Grid item xs={12} sm={6} display='flex' justifyContent='center' key={p.title}>

            <ProjectCard 
                title={p.title}
                description={p.description}
                bgcolor={p.bgcolor}

                imageURL={p.imageURL}
                visitIcon={p.visitIcon}
                tools={p.tools}
                width={{xs : '90vw', sm : '38vw', lg: 500}}
                height={{xs : '60vw', sm : '25vw', lg: 330}}

                onViewClick={() => window.open(p.path, '_blank')}
                onViewAboutClick={p.viewAbout ? () => window.open(p.viewAbout, '_blank') : null}
                onTitleButtonClick = {() => window.open(p.titleButtonPath, '_blank')}
            />

          </Grid>
        ))
      }
    </Grid>

  </Box>
);

export const ClientProjects = () => <Projects title='Client Projects' projects={clientProjects}/>

export const ExerciseProjects = () => <Projects title='Exercise Projects I did' projects={exerciseProjects}/>