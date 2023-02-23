import React from "react";
import {
  Grid,
  Stack,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";

export const Title = ({onContactmeClick, onMyProjectClick}) => {
  return (
      <Stack spacing={1} textAlign={{xs : 'center', sm : 'center', md : 'left'}}>
        <Typography fontSize={{xs : 35, sm : 35, md : '2vw'}} fontWeight="medium" color="secondary">
          👋Hi, I'm
        </Typography>
        <Typography fontSize={{xs : 40, sm : 58, md : '5vw', lg : 65}} color="primary" fontWeight="bold">
          Lioncio Morcilla
        </Typography>
        <Typography fontSize={{xs : 23, sm : 25, md : '2vw', lg: 30}} color="primary" fontWeight="bold">
          Aspiring Full-Stack Developer
        </Typography>
        <Typography fontSize={{xs : 20, sm : 23, md : '1.5vw', lg: 22}} color="primary" fontWeight="regular">
          Passionate about making webapps and games
        </Typography>

        <Stack direction="row" spacing={2} justifyContent={{xs : 'center', sm : 'center', md : 'left'}}>
          <Button variant="contained" color="selected" onClick={onContactmeClick}>
            <Typography fontSize={{xs : '4vw', sm : 23}} fontWeight="bold">
              Contact Me
            </Typography>
          </Button>
          <Button variant="outlined" color="primary" onClick={onMyProjectClick}>
            <Typography fontSize={{xs : '4vw', sm : 23}} fontWeight="bold">
              My Projects
            </Typography>
          </Button>
        </Stack>
      </Stack>
  );
};

const openRoute = (path) => {
  window.open(path, '_blank');
}

const Hero = ({onContactmeClick, onMyProjectClick}) => {
  return (
     <Grid container>

      <Grid item mt={{xs : 5, md : 17}} sm={12} md={6}>
        <Title onContactmeClick={onContactmeClick} onMyProjectClick={onMyProjectClick}/>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <img width='100%' height='auto' src='/lioncio.png' alt="" />
        <Stack direction="row" justifyContent="center" spacing={1}>
          <IconButton color="primary" onClick={() => openRoute('/facebook')}>
            <FacebookRounded fontSize="large" />
          </IconButton>
          <IconButton color="primary" onClick={() => openRoute('/linkedin')}>
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton color="primary" onClick={() => openRoute('/github')}>
            <GitHub fontSize="large" />
          </IconButton>
        </Stack>
      </Grid>

     </Grid>
  );
};

export default Hero;
