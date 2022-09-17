import { Stack, Box, Grid, Container, Typography, Chip, Button } from "@mui/material";
import {Person, Smartphone, Email} from '@mui/icons-material';

const myInfos = [
    {label : 'Name', value : 'Lioncio Bayes Morcilla', icon : <Person color='secondary' fontSize="large"/>},
    {label : 'Contact Number', value : '0936-503-8758', icon : <Smartphone color='secondary' fontSize="large"/>},
    {label : 'Email', value : 'lionciomorcilla12@gmail.com', icon : <Email color='secondary' fontSize="large"/>},
];

export const skills = {
    frontend : 'HTML,CSS,Javascript,Reactjs,MUI,Adobe XD',
    backend : 'Expressjs,MongoDB,Mysql,PHP',
    gameDev : 'UnityEngine,C#,Adobe Photoshop,Blender 3D'
}

export const CustomChip = ({label}) => {
    return <Chip sx={{boxShadow : '0 2px 2px rgb(0,0,0, 0.5)'}} label={label} variant='contained' color='selected'/>
}

const SkillInfo = ({title, skills}) => {
    return (
        <Box>
            <Typography variant='h6' color='primary' fontWeight='bold'>{title}</Typography>
            <Stack direction='row' spacing={1}>
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

        <Typography color='primary' fontSize={20}>
            I'm passionate about innovative technology because it can changes lives.
            Developing something that can help others is a great achievement to me.
        </Typography>

        <Typography color='primary' fontSize={20}>
            I'm graduated from Asian Institute of Technology and Education with the
            Bachelor of Science in Information Technology.
            Before I go to college, I started learning programming on my own.
            So now I have 4 years of programming experience.
        </Typography>
        
        {
            myInfos.map(info => (
                <Grid container alignItems='center' key={info.label}>
                    <Grid item xs={1}>
                        {info.icon}
                    </Grid>
                    <Grid item xs={3}>
                        <Typography  fontSize={18} color='primary'>{info.label}</Typography>
                    </Grid>
                    <Grid item xs={1}><Typography  fontSize={18} color='primary'>:</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography  fontSize={18} color='primary'>{info.value}</Typography>
                    </Grid>
                </Grid>
            ))
        }

        <SkillInfo title='Frontend Skills' skills={skills.frontend} />
        <SkillInfo title='Backend Skills' skills={skills.backend} />
        <SkillInfo title='Gamedev Skills' skills={skills.gameDev} />
        <Stack direction='row' spacing={2} justifyContent={{xs : 'center', sm : 'left'}}>
            {/* <Button variant="contained" color="primary" size='large'>More About Me</Button> */}
            <Button onClick={() => window.open('/my_resume', '_blank')} variant="contained" color="primary" size='large'>View My Resume</Button>
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