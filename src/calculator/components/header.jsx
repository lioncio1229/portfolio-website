import { Box, AppBar, IconButton, Toolbar, Stack, Typography, Button } from "@mui/material";
import { Calculate, Build, Menu } from "@mui/icons-material";

const Header = ({onMenuClick}) => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={onMenuClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display : {sm : 'block', md : 'none'}}}
          >
            <Menu />
          </IconButton>

          <Calculate fontSize='large' sx={{paddingRight : '3px'}}/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calculator
          </Typography>

          <Button sx={{color : 'white'}} startIcon={<Build/>} disableElevation>
            <Typography fontFamily={'Poppins'} fontWeight='500'> More Tools </Typography>
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
