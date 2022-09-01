import { Box, Card, Stack, TextField, Typography, Divider, Button} from "@mui/material";
import {Add, Remove, Close, Percent, Equalizer} from "@mui/icons-material";

const Operand = ({children}) => {
    return (
        <Stack>
            <TextField variant='filled' type='number'/>
            <Card>
                <Typography align='center' p={2} color='primary' fontFamily='Poppins'>
                    {children}
                </Typography>
            </Card>
        </Stack>
    )
}

const Result = ({children, result}) => {
    return (
        <Box minWidth={200}>
        <Card>
            <Typography align="center" p={2} color="primary" fontFamily="Poppins">
            {result}
            </Typography>
            <Divider/>
            <Typography align="center" p={2} color="primary" fontFamily="Poppins">
            {children}
            </Typography>
        </Card>
        </Box>
    );
}

const Basic = () => {
    return ( 
        <Stack spacing={1}>
            <Box>
                <Typography variant="h4" fontFamily='Poppins' fontWeight='600' color='primary'>
                    Addition
                </Typography>
            </Box>
            <Box width={{md : '100%', lg : '80%'}}>
                <Stack direction={{sx : 'column', sm : 'row'}} spacing={1} justifyContent={{sm : 'center', md : 'start'}}>
                    <Operand> Operand 1 </Operand>
                    <Box sx={{display : 'flex', alignItems : 'center'}} justifyContent='center'>
                        <Add color="primary" fontSize="large"/>
                    </Box>
                    <Operand> Operand 2 </Operand>
                    <Box sx={{display : 'flex', alignItems : 'center'}} justifyContent='center'>
                        <Typography fontSize={40} color='primary'>=</Typography>
                    </Box>
                    <Result result='100'> Sum </Result>
                </Stack>
                <Stack direction='row' spacing={1} justifyContent='center' pt={2}>
                    <Button variant="contained" color='primary' sx={{width : '120px'}}> ADD </Button>
                    <Button variant="contained" color='primary' sx={{width : '120px'}}> CLEAR </Button>
                </Stack>
            </Box>
        </Stack>
     );
}
 
export default Basic;