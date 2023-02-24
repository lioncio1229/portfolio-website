import { Stack, Box, Grid, Typography, Chip, Button } from "@mui/material";
import {Person, Smartphone, Email} from '@mui/icons-material';

const myInfos = [
    {label : 'Name', value : 'Lioncio Bayes Morcilla', icon : <Person color='secondary' fontSize="large"/>},
    {label : 'Contact Number', value : '0936-503-8758', icon : <Smartphone color='secondary' fontSize="large"/>},
    {label : 'Email', value : 'lionciomorcilla12@gmail.com', icon : <Email color='secondary' fontSize="large"/>},
];

export const skills = {
    frontend : 'HTML,CSS,Javascript,Reactjs,MUI,Adobe XD',
    backend : 'Expressjs,MongoDB,Mysql,PHP',
    gameDev : 'UnityEngine,C#,Adobe Photoshop,Blender 3D',
    others : 'Git,Github'
}

export const CustomChip = ({label}) => {
    return <Chip sx={{boxShadow : '0 2px 2px rgb(0,0,0, 0.5)'}} label={label} variant='contained' color='selected'/>
}

const SkillInfo = ({title, skills}) => {
    return (
        <Box>
            <Typography variant='h6' color='primary' fontWeight='bold'>{title}</Typography>
            <Stack direction='row' flexWrap='wrap' gap={1}>
            {
                skills.split(',').map(item => (
                    <CustomChip key={item} label={item}/>
                ))
            }
            </Stack>
        </Box>
    );
}

const Info = () => {

    return (
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          About Me
        </Typography>

        <Typography color="primary" fontSize={16}>
          I am a passionate full-stack developer with 4 years of experience in
          programming. I have a strong foundation in both frontend and backend
          development, with proficiency in MERN development (MongoDB, Express,
          React, and Node).
        </Typography>

        <Typography color="primary" fontSize={16}>
          I possess the adaptability and willingness to work on projects outside
          of my core expertise, utilizing my strong problem-solving and
          collaboration skills to quickly learn and become proficient in new
          technologies and domains. As a team player, I enjoy collaborating with
          others to create innovative and impactful products. I am constantly
          learning and growing my skillset with the technologies in the industry.
        </Typography>

        {myInfos.map((info) => (
          <Grid container alignItems="center" key={info.label}>
            <Grid item xs={1} sx={{ mr: { xs: "10px" } }}>
              {info.icon}
            </Grid>
            <Grid item xs={3}>
              <Typography fontSize={{ xs: "3.5vw", sm: 18 }} color="primary">
                {info.label}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography fontSize={{ xs: "3.5vw", sm: 18 }} color="primary">
                :
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={{ xs: "3.5vw", sm: 18 }} color="primary">
                {info.value}
              </Typography>
            </Grid>
          </Grid>
        ))}

        <SkillInfo title="Frontend Skills" skills={skills.frontend} />
        <SkillInfo title="Backend Skills" skills={skills.backend} />
        <SkillInfo title="Gamedev Skills" skills={skills.gameDev} />
        <SkillInfo title="Others" skills={skills.others} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent={{ xs: "center", sm: "left" }}
        >
          {/* <Button variant="contained" color="primary" size='large'>More About Me</Button> */}
          <Button
            onClick={() => window.open("/my_resume", "_blank")}
            variant="contained"
            color="primary"
            size="large"
          >
            View My Resume
          </Button>
        </Stack>
      </Stack>
    );
}

const AboutMe = () => {
    return (
      <Grid container>
        <Grid item xs={0} lg={6} display={{ xs: "none", lg: "flex" }}>
          <img width="100%" height={650} src="/lioncio.png" alt="" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Info />
        </Grid>
      </Grid>
    );
}
 
export default AboutMe;