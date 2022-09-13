import { styled, Button } from "@mui/material";


export const CustomButton = styled(Button)(({theme}) => ({
    borderRadius : '20px',
    backgroundColor : theme.palette.primary.main,
    padding : '10px 50px'
}));