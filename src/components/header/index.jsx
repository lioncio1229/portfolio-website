import { Stack, AppBar, Toolbar, Container, Typography, Button } from "@mui/material";

const buttons = ['Home', 'About Me', 'Skills', 'My Projects']

const Header = ({toolbarIndex=0, setToolbarIndex, onHireMeClick}) => {
  return (
    <AppBar sx={{ bgcolor: "white" }} elevation={0} position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Typography
            color="primary"
            fontWeight="bold"
            fontSize={33}
            sx={{ flexGrow: { xs: 1, md: 0 } }}
          >
            MORCILLA
          </Typography>

          <Stack direction='row' gap={1} flexGrow={1} ml={2} sx={{display: { xs: 'none', md: 'flex' }}}>
            {buttons.map((v, i) =>
              i === toolbarIndex ? 
                <Button
                  key={i}
                  onClick={() => setToolbarIndex(i)}
                  variant="contained"
                  color="selected"
                > {v} </Button>
               : <Button key={i} onClick={() => setToolbarIndex(i)} variant="text">{v}</Button>
            )}
          </Stack>

          <Button onClick={onHireMeClick} variant="contained" size="large" sx={{ width: 150 }}>
            Hire Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
