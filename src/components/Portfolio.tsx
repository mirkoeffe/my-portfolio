import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  CircularProgress,
  Container,
  Toolbar,
} from "@mui/material";

import ResponsiveWebDesignImage from "../images/RWD.png";
import JavaScriptAlgorithmsImage from "../images/LJS.png";

const certificates = [
  {
    title: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/mirko_effe/responsive-web-design",
    image: ResponsiveWebDesignImage,
    description: "FreeCodeCamp.",
  },
  {
    title: "JS Algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/mirko_effe/javascript-algorithms-and-data-structures",
    image: JavaScriptAlgorithmsImage,
    description: "FreeCodeCamp.",
  },
  {
    title: "Full-Stack Web Development",
    link: "https://www.credential.net/2da0cf94-5176-4eb9-9f4c-301504c93314#gs.dy2ul9",
    image:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/113678661",
    description: "Ironhack Bootcamp.",
  },
];

// Array to hold project information
const projects = [
  {
    title: "Project 1",
    link: "https://github.com/yourusername/project1", // Placeholder link
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "A brief description of Project 1.",
  },
  {
    title: "Project 2",
    link: "https://github.com/yourusername/project2", // Placeholder link
    image: "https://via.placeholder.com/150", // Placeholder image
    description: "A brief description of Project 2.",
  },
  // Add more projects here as needed
];

const Portfolio: React.FC = () => {
  return (
    <Container
      sx={{
        p: 3,
        maxWidth: "calc(100% - 100px)",
        marginX: "auto",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        Portfolio
      </Typography>

      {/* Certificates Section */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="primaryAccent"
        sx={{ fontStyle: "italic" }}
      >
        Certificates
      </Typography>
      <Grid container spacing={3}>
        {certificates.map((certificate, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={certificate.link} target="_blank" underline="none">
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={certificate.image}
                  alt={certificate.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {certificate.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {certificate.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Toolbar />

      {/* Projects Section */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="primaryAccent"
        sx={{ fontStyle: "italic" }}
      >
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={project.link} target="_blank" underline="none">
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
