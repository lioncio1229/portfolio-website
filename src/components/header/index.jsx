import { Stack, AppBar, Toolbar, Container, Typography, Button, IconButton } from "@mui/material";
import { Menu, PersonAdd } from "@mui/icons-material";
import MenuDrawer from "./menu.drawer";
import { useState } from "react";

const buttons = ['Home', 'About Me', 'Skills', 'My Projects']

const Header = ({toolbarIndex=0, setToolbarIndex, onHireMeClick}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <MenuDrawer
        buttons={buttons}
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        index={toolbarIndex}
        setIndex={setToolbarIndex}
      />

      <AppBar sx={{ bgcolor: "white" }} elevation={0} position="fixed">
        <Container>
          <Toolbar disableGutters>

            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu />
            </IconButton>

            <Typography
              color="primary"
              fontWeight="bold"
              sx={{ flexGrow: { xs: 1, md: 0 }, fontSize : {xs : '5vw', sm : 33}, cursor : 'pointer', userSelect : 'none' }}
              onClick={() => setToolbarIndex(0)}
            >
              MORCILLA
            </Typography>

            <Stack
              direction="row"
              gap={1}
              flexGrow={1}
              ml={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {buttons.map((v, i) =>
                i === toolbarIndex ? (
                  <Button
                    key={i}
                    onClick={() => setToolbarIndex(i)}
                    variant="contained"
                    color="selected"
                  >
                    {v}
                  </Button>
                ) : (
                  <Button
                    key={i}
                    onClick={() => setToolbarIndex(i)}
                    variant="text"
                  >
                    {v}
                  </Button>
                )
              )}
            </Stack>

            <Button
              onClick={onHireMeClick}
              variant="contained"
              size="large"
              sx={{ width: 150 }}
              startIcon={<PersonAdd/>}
            >
              Hire Me
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
