import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { PhoneAndroid, Email, LocationCity } from "@mui/icons-material";
import Form from "./form";

const contactInfos = [
  {
    label: "Call Me",
    value: "0936-503-8758",
    icon: (
      <PhoneAndroid
        color="secondary"
        sx={{ fontSize: { xs: 50, md: "3.8vw", lg: 55 } }}
      />
    ),
  },
  {
    label: "Email",
    value: "lionciomorcilla12@gmail.com",
    icon: (
      <Email color="secondary" sx={{ fontSize: { xs: 50, md: "3.8vw", lg: 55 } }} />
    ),
  },
  {
    label: "Location",
    value: "Brgy. Bukal Tiaong Quezon Philippines",
    icon: (
      <LocationCity
        color="secondary"
        sx={{ fontSize: { xs: 50, md: "3.8vw", lg: 55 } }}
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
              sx={{ fontSize: { xs: 20, md: "2vw", lg: 27 } }}
              color="primary"
              fontWeight="medium"
            >
              {v.label}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 17, md: "1.4vw", lg: 20 } }}
              noWrap={false}
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
