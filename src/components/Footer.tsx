import React from "react";
import { Box, Grid, Typography, Avatar, Link } from "@mui/material";
import GitHubIcon from "../images/Github.svg";
import LinkedInIcon from "../images/LinkedIn.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone"; // Import Phone Icon

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        px: 2,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: "nowrap" }}
      >
        {/* GitHub Icon */}
        <Grid item>
          <Link
            href="https://github.com/mirkoeffe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="GitHub"
              src={GitHubIcon}
              sx={{ width: 32, height: 32 }}
            />
          </Link>
        </Grid>

        {/* LinkedIn Icon */}
        <Grid item>
          <Link
            href="https://linkedin.com/in/mirko-fede"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="LinkedIn"
              src={LinkedInIcon}
              sx={{ width: 32, height: 32 }}
            />
          </Link>
        </Grid>

        {/* Copyright and Year */}
        <Grid item>
          <Typography variant="body2" sx={{ ml: 2, color: "black" }}>
            &copy; {currentYear} Mirko Fede. All rights reserved.
          </Typography>
        </Grid>

        {/* Email Icon */}
        <Grid item>
          <Link href="mailto:mirkoeffe91@gmail.com">
            <EmailIcon
              sx={{
                fontSize: 32,
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            />
          </Link>
        </Grid>

        {/* Phone Number with Phone Icon */}
        <Grid item>
          <Link href="tel:+4917663619554">
            <PhoneIcon sx={{ fontSize: 32, color: "black" }} />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
