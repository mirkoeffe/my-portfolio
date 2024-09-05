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
  { name: "TypeScript", src: TypeScriptIcon },
];

const Home: React.FC = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          p: 3,
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
            <Typography variant="h4" component="h2" gutterBottom>
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
                sx={{
                  width: { xs: 112, sm: 150, md: 200, lg: 224 },
                  height: { xs: 112, sm: 150, md: 200, lg: 224 },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          p: 2,
          maxWidth: "lg",
          marginX: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 17, textAlign: "justify" }}
          color="primary"
        >
          Passionate Full Stack Web Developer with expertise in the MERN stack
          and TypeScript. Having recently completed a rigorous bootcamp, I bring
          a fresh perspective and a strong foundation in modern web development
          technologies. My journey into tech is fueled by a lifelong fascination
          with computers and a diverse background in problem-solving and
          communication.
          <br />
          <br />
          While I am particularly interested in working for companies in the
          music, automotive, motorsport, and video game industries, I am also
          open to opportunities in other sectors where I can leverage my skills
          and creativity to drive impactful results. My experience includes
          developing a Minimum Viable Product (MVP) for a social app for
          developers, a project I’m committed to enhancing with my team.
          <br />
          <br />
          What sets me apart is my ability to infuse positive and contagious
          energy into any team, fostering a happy, productive work environment
          that drives timely delivery and innovative solutions. I’m excited to
          bring my fresh ideas, adaptability, and collaborative spirit to your
          organization, helping you build dynamic, user-centered web
          applications that make a real impact.
        </Typography>
      </Box>
      <Toolbar />

      <Box
        sx={{
          p: 2,
          maxWidth: "lg",
          marginX: "auto",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          color="primaryAccent"
          sx={{ fontStyle: "italic" }}
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
