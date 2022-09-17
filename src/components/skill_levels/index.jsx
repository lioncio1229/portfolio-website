import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";
import { skills } from "../aboutme";

const skillLevels = {
  names : [...skills.frontend.split(','), ...skills.backend.split(','), ...skills.gameDev.split(',')],
  values : [90, 80, 75, 70, 50, 60, 25, 25, 24, 35, 60, 65, 55, 60]
}

const options = {
  chart: {
    id: "apexchart",
  },
  colors : ["#0076B4"],
  plotOptions : {
    bar : {
        horizontal : true
    }
  },
  xaxis: {
    categories: skillLevels.names,
  },
};

const series = [
  {
    name: "Skill",
    data: skillLevels.values,
  },
];

const SkillLevels = () => {
  return (
    <Box>
        <Typography variant='h4' fontWeight='bold' color='primary'>Skill Level</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", width : '100%' }}>
          <Chart
              type="bar"
              options={options}
              series={series}
              width={450}
              height={400}
            />
        </Box>
    </Box>
  );
};

export default SkillLevels;
