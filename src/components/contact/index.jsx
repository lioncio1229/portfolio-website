import {
  styled,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PhoneAndroid, Email, LocationCity } from "@mui/icons-material";
import { useState } from "react";
import useSendEmail from "./useSendEmail";
import React from "react";

const CustomTextField = styled(TextField)(() => ({
  width: "100%",
}));

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const [result, setResult] = useState('');

  const { send, sending } = useSendEmail(
    "service_lioncio1229",
    "template_8b7fs5z",
    "nEmSWQSF0ct99Bw9s",
    () => setResult('success'),
    () => setResult('error'),
  );

  const handleSendMessage = () => {
    send({
      from_name : name,
      from_email : email,
      subject,
      message,
    });
  }

  const SendResult = React.memo(() => 
    (
      result !== '' && <Snackbar
      open={result !== ''}
      autoHideDuration={5000}
      onClose={() => setResult('')}
    >
      <Alert severity={result} sx={{ width: "100%" }}>
        {result === "success"
          ? "Thankyou for sending me an email"
          : "Something went wrong"}
      </Alert>
      </Snackbar>
  ), [result]);

  return (
    <>
      <SendResult/>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            variant="outlined"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            label="Message"
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>

        <Grid item>
          <LoadingButton
            loading={sending}
            sx={{ padding: "10px 40px" }}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSendMessage}
          >
            <Typography variant="h6" fontWeight="bold" color="white">
              Send Message
            </Typography>
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
};

const contactInfos = [
  {
    label: "Call Me",
    value: "0936-503-8758",
    icon: (
      <PhoneAndroid
        color="secondary"
        sx={{ fontSize: { xs: 50, md: "3.8vw" } }}
      />
    ),
  },
  {
    label: "Email",
    value: "lionciomorcilla12@gmail.com",
    icon: (
      <Email color="secondary" sx={{ fontSize: { xs: 50, md: "3.8vw" } }} />
    ),
  },
  {
    label: "Location",
    value: "Brgy. Bukal Tiaong Quezon Philippines",
    icon: (
      <LocationCity
        color="secondary"
        sx={{ fontSize: { xs: 50, md: "3.8vw" } }}
      />
    ),
  },
];

const ContactInfos = () => {
  return (
    <Stack spacing={2}>
      {contactInfos.map((v) => (
        <Stack direction="row" columnGap={3} alignItems="center" key={v.label}>
          {v.icon}
          <Stack>
            <Typography
              sx={{ fontSize: { xs: 20, md: "2vw" } }}
              color="primary"
              fontWeight="medium"
            >
              {v.label}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 17, md: "1.4vw" } }}
              nowrap={false}
              color="primary"
            >
              {v.value}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const Contact = () => {
  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={5}>
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            variant="h4"
            fontWeight="bold"
            color="secondary"
            pb={3}
          >
            Contact Me
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Form />
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactInfos />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
