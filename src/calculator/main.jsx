import { Grid, Container } from "@mui/material";
import Header from "./components/header";
import OperationList from './components/operation.list';
import Basic from "./components/basic";

const Main = () => {
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={0} md={3}>
                    <OperationList />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Container sx={{padding : {xs : '0 60px', sm : '0 10px', md : '0 20px'}}}>
                        <Basic />
                    </Container>
                </Grid>
            </Grid>
        </>
     );
}

export default Main;