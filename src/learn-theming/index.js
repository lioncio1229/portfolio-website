import * as React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
import { Checkbox } from "@mui/material";
import App from "./App";

const theme = createTheme({
    status : {
        primary : green['A700'],
        secondary : green['A200'],
        danger : orange['500'],
    }
});

const CustomCheckbox = styled(Checkbox)(({theme}) => ({
    color : theme.status.primary,
    '&.Mui-checked' : {
        color : theme.status.primary
    }
}));

const LearnTheming = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
      <App/>
    </ThemeProvider>
  );
};

export default LearnTheming;