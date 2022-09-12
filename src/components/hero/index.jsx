import React from "react";
import {
  Grid,
  Stack,
  Button,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { FacebookRounded, GitHub, Twitter } from "@mui/icons-material";

export const Title = () => {
  return (
      <Stack spacing={1} textAlign={{xs : 'center', sm : 'center', md : 'left'}}>
        <Typography fontSize={{xs : 35, sm : 35, md : '2vw'}} fontWeight="medium" color="secondary">
          👋Hi, I'm
        </Typography>
        <Typography fontSize={{xs : 40, sm : 58, md : '5vw'}} color="primary" fontWeight="bold">
          Lioncio Morcilla
        </Typography>
        <Typography fontSize={{xs : 23, sm : 25, md : '2vw'}} color="primary" fontWeight="bold">
          IT Fresh Graduate
        </Typography>
        <Typography fontSize={{xs : 20, sm : 23, md : '1.5vw'}} color="primary" fontWeight="regular">
          Passionate about making web applications and games
        </Typography>

        <Stack direction="row" spacing={2} justifyContent={{xs : 'center', sm : 'center', md : 'left'}}>
          <Button variant="contained" color="selected">
            <Typography fontSize={23} fontWeight="bold">
              Contact Me
            </Typography>
          </Button>
          <Button variant="outlined" color="primary">
            <Typography fontSize={23} fontWeight="bold">
              My Projects
            </Typography>
          </Button>
        </Stack>
      </Stack>
  );
};

const Hero = () => {
  return (
    <Container>
     <Grid container>

      <Grid item mt={{xs : 5, md : 10}} sm={12} md={6}>
        <Title />
      </Grid>
      
      <Grid item xs={12} md={6}>
        <img width='100%' height='auto' src='/lioncio.png' alt="" />
        <Stack direction="row" justifyContent="center" spacing={1}>
          <IconButton color="primary">
            <FacebookRounded fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <Twitter fontSize="large" />
          </IconButton>
        </Stack>
      </Grid>

     </Grid>
    </Container>
  );
};

export default Hero;
