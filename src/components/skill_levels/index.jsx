import Chart from "react-apexcharts";
import { Box, Typography, Container } from "@mui/material";
import { skills } from "../aboutme";
import { useEffect } from "react";
import { useState } from "react";

const skillLevels = {
  names : [...skills.frontend.split(','), ...skills.backend.split(','), ...skills.gameDev.split(',')],
  values : [90, 80, 75, 70, 30, 40, 25, 25, 24, 30, 60, 70, 60, 70]
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
        <Typography variant='h4' fontWeight='bold' color='primary'>Skills</Typography>
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
