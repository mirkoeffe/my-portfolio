import { Box, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        About Me
      </Typography>
    </Box>
  );
};

export default About;
