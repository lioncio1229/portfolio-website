import { AppBar, Toolbar, Container, Typography, Box, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{bgcolor : 'white'}} elevation={1} position='static'>
        <Container>
            <Toolbar disableGutters>
                <Typography color='primary' fontWeight='bold' fontSize={33} sx={{flexGrow : {xs : 1, md : 0}}}>
                    MORCILLA
                </Typography>
                <Box sx={{flexGrow : 1, ml : 5, display: { xs: 'none', md: 'flex' }}}>
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
