import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
    palette : {
        primary : {
            light : '#00a5fc',
            main : "#0076B4",
            dark : '#015987'
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
        0 : "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.05),0px 1px 3px 0px rgba(0,0,0,0.02)",
        16 : "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)"
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