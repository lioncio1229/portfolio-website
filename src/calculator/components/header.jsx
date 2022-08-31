import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Calculate, Build } from "@mui/icons-material";

const Header = () => {
    
  return (
    <Box bgcolor="primary.main">
      <Container maxWidth="xl">
        <Stack
          spacing={1}
          pt={1.5}
          pb={1.5}
          direction="row"
          justifyContent="space-between"
        >
          <Stack alignItems="center" direction="row" spacing={1}>
            <Calculate fontSize="large" sx={{ color: "white" }} />
            <Typography fontSize="20px" color="white" fontFamily={"Poppins"}>
              Calculator
            </Typography>
          </Stack>

          <Button sx={{color : 'white'}} startIcon={<Build/>} disableElevation>
            <Typography fontFamily={'Poppins'} fontWeight='500'> More Tools </Typography>
          </Button>

        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
