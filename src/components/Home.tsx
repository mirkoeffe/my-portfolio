import React from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  Container,
  Toolbar,
} from "@mui/material";
import profileImage from "../images/mirko.jpeg";
import HTMLicon from "../images/HTML.svg";
import MongoDbIcon from "../images/mongodb.svg";
import MongooseIcon from "../images/mongoose.png";
import CSSicon from "../images/CSS.svg";
import TailwindIcon from "../images/TailwindCSS.svg";
import JavaScriptIcon from "../images/JavaScript.svg";
import ReactIcon from "../images/React.svg";
import NodejsIcon from "../images/NodeJS.svg";
import ExpressIcon from "../images/ExpressJS.svg";
import TypeScriptIcon from "../images/TypeScript.svg";

// Placeholder for tech stack images
const techStack = [
  { name: "HTML", src: HTMLicon },
  { name: "CSS", src: CSSicon },
  { name: "Tailwind", src: TailwindIcon },
  { name: "JavaScript", src: JavaScriptIcon },
  { name: "React", src: ReactIcon },
  { name: "Node.js", src: NodejsIcon },
  { name: "Express", src: ExpressIcon },
  { name: "MongoDB", src: MongoDbIcon },
  { name: "Mongoose", src: MongooseIcon },
  { name: "TypeScript", src: TypeScriptIcon } /* 
  { name: "NoSQL", src: "/path/to/nosql-icon.png" },
  { name: "SQL", src: "/path/to/sql-icon.png" }, */,
];

const Home: React.FC = () => {
  return (
    <>
      <Container
        sx={{
          p: 3,
          maxWidth: "calc(100% - 100px)",
          marginX: "auto",
        }}
      >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Left Side: Typography */}
          <Grid item xs={12} sm={8} md={6} lg={6}>
            {/* First Line: Mirko Fede */}
            <Typography variant="h3" component="h1" gutterBottom>
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: "inherit" }}
              >
                Mirko{" "}
              </Box>
              <Box
                component="span"
                sx={{ color: "secondary.main", fontWeight: "inherit" }}
              >
                Fede
              </Box>
            </Typography>

            {/* Second Line: Full-stack Developer */}
            <Typography variant="h4" component="h2" gutterBottom>
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: "inherit" }}
              >
                Full-stack{" "}
              </Box>
              <Box
                component="span"
                sx={{ color: "primaryAccent.main", fontWeight: "inherit" }}
              >
                Developer
              </Box>
            </Typography>

            {/* Third Line: Mostly focused on Back-end */}
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ whiteSpace: "nowrap" }}
            >
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: "inherit" }}
              >
                Mostly focused on{" "}
              </Box>
              <Box
                component="span"
                sx={{ color: "primaryAccent.main", fontWeight: "inherit" }}
              >
                Back-end
              </Box>
            </Typography>
          </Grid>

          {/* Right Side: Avatar */}
          <Grid item xs={12} sm={4} md={6} lg={6}>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt="Mirko Fede"
                src={profileImage}
                sx={{ width: 180, height: 180 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Lorem Ipsum Paragraph Below the Container */}
      <Box
        sx={{
          p: 3,
          maxWidth: "calc(100% - 312px)", // Consistent with the top Container
          marginX: "auto", // Center the container horizontally
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
          urna a arcu lacinia laoreet. Maecenas scelerisque, mi ac varius
          tincidunt, lorem odio dictum nisl, sit amet facilisis mauris dolor sit
          amet justo. Integer nec odio. Praesent libero. Sed cursus ante dapibus
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
          sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
          porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Typography>
      </Box>

      {/* Tech Stack Section Aligned with the Rest */}
      <Box
        sx={{
          p: 3,
          maxWidth: "calc(100% - 312px)", // Consistent with the top Container
          marginX: "auto", // Center the container horizontally
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          color="primaryAccent"
        >
          Tech Stack
        </Typography>
        {/* Tech Stack Icons */}
        <Grid container spacing={2} justifyContent="start">
          {techStack.map((tech) => (
            <Grid item key={tech.name}>
              <br />
              <Avatar
                alt={tech.name}
                src={tech.src}
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="caption"
                display="block"
                align="center"
                color="primary"
              >
                {tech.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
