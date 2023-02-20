import { Stack, Typography, Chip, Box, Divider, Button } from "@mui/material";
import { Business, LocationOn, CalendarMonth, CropOriginal } from "@mui/icons-material";
import { getWorkDuration } from "./utils";
import { styled } from '@mui/material/styles';

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

const InlineButton = styled(Button)(({theme}) => ({
    backgroundColor: 'white',
    fontSize: 13,
    textTransform: 'none',
    padding: '2px 10px',
    '&:hover': {
        backgroundColor: 'white',
    },
}));

const Item = ({ title, description, company, location, jobType, workDuration, logo, isActive }) => (
  <Stack spacing={2.5}>
        <Stack direction="row" mt={2}>
            <Box
            sx={{
                width: 65,
                height: 65,
                bgcolor: "white",
                justifyContent: "center",
                alignItems: "center",
                display: {xs: 'none', sm: 'flex'}
            }}
            >
                {
                    logo ? 
                    <img src={logo} alt="" width='100%' height='100%' />:
                    <CropOriginal color="primary" sx={{ width: "60%", height: "60%" }} />
                }
            </Box>
            <Stack width='100%'>
                <Stack
                direction={{xs: 'column', sm: 'row'}}
                justifyContent="space-between"
                spacing={1}
                >
                    <Stack justifyContent="space-between">
                        <Typography color="primary" sx={{ fontSize: 23 }}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                            {company && <TextWithIcon text={company} icon={<Business />} />}
                            {location && <TextWithIcon text={location} icon={<LocationOn />} />}
                        </Stack>
                    </Stack>

                    <Stack justifyContent="space-between" alignItems={{xs: 'flex-start', sm: 'flex-end'}} spacing={1}>
                        {jobType && <Chip label={jobType} color="primary" sx={{ width: 120 }} />}
                        {workDuration && <TextWithIcon text={workDuration} isActive={isActive} icon={<CalendarMonth />} />}
                    </Stack>
                </Stack>
                {
                    description && 
                    <Box sx={{bgcolor: 'white', borderRadius: 3, p: 2, mt: 1.5, position: 'relative'}}>
                        <InlineButton sx={{position: 'absolute', bottom: 15, right: 10}}>...see more</InlineButton>
                        <Typography color="primary" sx={{ fontSize: 14, height: 45, overflow: 'hidden' }}>
                            {description}
                        </Typography>
                    </Box>
                }
            </Stack>
        </Stack>
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