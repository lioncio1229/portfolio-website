import { useTheme } from "@mui/material/styles";

const App = () => {
    const theme = useTheme();
    return ( <div> The color is {theme.status.danger}</div> );
}
 
export default App;