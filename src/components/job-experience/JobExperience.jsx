import { Stack, Typography, Chip, Box, Divider } from "@mui/material";
import { Business, LocationOn, CalendarMonth, CropOriginal } from "@mui/icons-material";

const TextWithIcon = ({ text, icon }) => (
  <Stack direction="row" alignItems="center">
    <Box
      sx={{ mr: 0.5, color: "primary.main" }}
      display="flex"
      justifyContent="center"
    >
      {icon}
    </Box>
    <Typography
      color="primary"
      fontWeight="bold"
      sx={{ fontSize: 12, color: "#b4b9cc" }}
      marginRight={2}
    >
      {text}
    </Typography>
  </Stack>
);

const Item = ({ title, company, location, jobType, date, logo }) => (
  <Box>
    <Stack
      direction="row"
      justifyContent="space-between"
      height={65}
      marginBottom={2}
      marginTop={2}
    >
      <Stack direction="row">

        <Box
          sx={{
            width: 65,
            height: 65,
            bgcolor: "white",
            mr: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            {
                logo ? 
                <img src={logo} alt="" width='100%' height='100%' />:
                <CropOriginal color="primary" sx={{ width: "60%", height: "60%" }} />
            }
        </Box>

        <Stack justifyContent="space-between">
          <Typography color="primary" sx={{ fontSize: 23 }}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            {company && <TextWithIcon text={company} icon={<Business />} />}
            {location && <TextWithIcon text={location} icon={<LocationOn />} />}
          </Stack>
        </Stack>
      </Stack>

      <Stack justifyContent="space-between" alignItems="flex-end">
        {jobType && <Chip label={jobType} color="primary" sx={{ width: 120 }} />}
        {date && <TextWithIcon text={date} icon={<CalendarMonth />} />}
      </Stack>
    </Stack>
    <Divider />
  </Box>
);

const JobExperience = ({items}) => {
    return (
        <Box>
            <Typography variant='h4' fontWeight='bold' color='primary'>Work Experience</Typography>
            <Stack>
                {
                    items.map(item => <Item
                        title={item.title}
                        company={item.company}
                        location={item.location}
                        jobType={item.jobType}
                        date={item.date}
                        logo={item.logo}
                    />)
                }
            </Stack>
        </Box>
    );
}
 
export default JobExperience;