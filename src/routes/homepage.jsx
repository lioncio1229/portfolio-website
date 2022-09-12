import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import { Stack } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Header/>
      <Stack spacing={30}>
        <Hero/>
        <AboutMe/>
      </Stack>
    </>
  );
};

export default Homepage;
