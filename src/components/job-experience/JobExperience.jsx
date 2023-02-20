import { Stack, Typography, Chip, Box, Divider } from "@mui/material";
import { Business, LocationOn, CalendarMonth, CropOriginal } from "@mui/icons-material";
import { getWorkDuration } from "./utils";

const TextWithIcon = ({ text, icon, isActive }) => (
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
      sx={{ fontSize: 12, color: (isActive ? "green" : "#b4b9cc") }}
      marginRight={2}
    >
      {text}
    </Typography>
  </Stack>
);

const Item = ({ title, description, company, location, jobType, workDuration, logo, isActive }) => (
  <Stack rowGap={2}>
    <Stack
      direction="row"
      justifyContent="space-between"
      height={65}
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
        {workDuration && <TextWithIcon text={workDuration} isActive={isActive} icon={<CalendarMonth />} />}
      </Stack>
    </Stack>
    {
        description && 
        <Box sx={{bgcolor: 'white', ml:'80px', borderRadius: 3, p: 2}}>
            <Typography color="primary" sx={{ fontSize: 15 }}>
                {description}
            </Typography>
        </Box>
    }
    <Divider />
  </Stack>
);

const JobExperience = ({items}) => {
    return (
        <Box>
            <Typography variant='h4' fontWeight='bold' color='primary'>Work Experience</Typography>
            <Stack>
                {
                    items.map(item => <Item
                        title={item.title}
                        description={item.description}
                        company={item.company}
                        location={item.location}
                        jobType={item.jobType}
                        workDuration={getWorkDuration(item.startDate, item.endDate)}
                        isActive={!item.endDate}
                        logo={item.logo}
                    />)
                }
            </Stack>
        </Box>
    );
}
 
export default JobExperience;