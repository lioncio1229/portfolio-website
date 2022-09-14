import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
    palette : {
        primary : {
            main : "#0076B4"
        },
        secondary : {
            main : "#FF9A00"
        },
        selected : {
            main : "#FF9A00",
            contrastText : "#fff"
        },
        background : {
            default : "#F8FCFF"
        },
    },
    typography : {
        fontFamily : "Poppins"
    },
    shadows : {
        1 : "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.05),0px 1px 3px 0px rgba(0,0,0,0.02)"
    }
});

const MyTheme = ({children}) => {
    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
     );
}
 
export default MyTheme;