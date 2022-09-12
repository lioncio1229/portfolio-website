import { AppBar, Toolbar, Container, Typography, Box, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{bgcolor : 'white'}} elevation={1}>
        <Container>
            <Toolbar>
                <Typography color='primary' fontWeight='bold' fontSize={33}>
                    MORCILLA
                </Typography>
                <Box sx={{flexGrow : 1, ml : 5}} >
                    <Button variant='contained' color='selected'>About Me</Button>
                    <Button variant='text'>Skills</Button>
                    <Button variant='text'>My Projects</Button>
                </Box>
                <Button variant='contained' size='large' sx={{width : 150}}> Hire Me </Button>
            </Toolbar>
        </Container>
    </AppBar>
  )
};

export default Header;
