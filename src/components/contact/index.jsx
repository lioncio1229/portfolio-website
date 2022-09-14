import { styled, Container, Box, Grid, Stack, TextField, Button, Typography } from "@mui/material";
// import { CustomButton } from "../customs";
import { PhoneAndroid, Email, LocationCity} from "@mui/icons-material";

const CustomTextField = styled(TextField)(() => ({
    width : '100%'
}));

const Form = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField variant="outlined" label="Name" />
        </Grid>
        <Grid item xs={6}>
            <CustomTextField variant="outlined" label="Email" />
        </Grid>
        <Grid item xs={12}>
            <CustomTextField variant="outlined" label="Subject" />
        </Grid>
        <Grid item xs={12}>
            <CustomTextField label="Message" multiline maxRows={5} rows={5} />
        </Grid>
        <Grid item>
            <Button sx={{padding : '10px 40px'}} variant='contained' color='primary' size="large">
                <Typography variant='h6' fontWeight='bold' color='white'>Send Message</Typography>
            </Button>
        </Grid>
      </Grid>
    );
}

const contactInfos = [
    {label : 'Call Me', value : '0936-503-8758', icon : <PhoneAndroid color='secondary' sx={{ fontSize : {xs : 50,md : '3.8vw'}}} /> },
    {label : 'Email', value : 'lionciomorcilla12@gmail.com', icon : <Email color='secondary' sx={{ fontSize : {xs : 50,md : '3.8vw'}}} /> },
    {label : 'Location', value : 'Brgy. Bukal Tiaong Quezon Philippines', icon : <LocationCity color='secondary' sx={{ fontSize : {xs : 50,md : '3.8vw'}}} /> },
]

const ContactInfos = () => {
    return (
        <Stack spacing={2}>
            {
                contactInfos.map(v => (
                    <Stack direction='row' columnGap={3} alignItems='center' key={v.label}>
                        {v.icon}
                        <Stack>
                            <Typography sx={{fontSize : {xs : 20, md : '2vw'}}} color='primary' fontWeight='medium'>{v.label}</Typography>
                            <Typography sx={{fontSize : {xs : 17, md : '1.4vw'}}} nowrap={false} color='primary'>{v.value}</Typography>
                        </Stack>
                    </Stack>
                ))
            }
        </Stack>
    );
}

const Contact = () => {
    return (
        <Box>
            <Grid container justifyContent='space-between' spacing={5}>
                <Grid item xs={12}>
                    <Typography textAlign='center' variant='h4' fontWeight='bold' color='secondary' pb={3}>Contact Me</Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Form/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ContactInfos/>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Contact;