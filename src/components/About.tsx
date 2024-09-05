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
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Helper function to render star ratings
const renderStars = (filledStars: number, totalStars: number = 5) => {
  return Array.from({ length: totalStars }, (_, index) =>
    index < filledStars ? (
      <StarIcon key={index} color="primary" />
    ) : (
      <StarBorderIcon key={index} color="primary" />
    )
  );
};

const About: React.FC = () => {
  return (
    <Container
      sx={{
        p: 3,
        maxWidth: "lg",
        marginX: "auto",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        About Me
      </Typography>
      <Toolbar />

      {/* Education Section */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="primaryAccent"
        sx={{ fontSize: 29, fontStyle: "italic", fontWeight: "bold" }}
      >
        Education
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontSize: 24, textAlign: "justify" }}
        color="primary"
      >
        Ironhack
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: 18, marginTop: 2, marginBottom: 2 }}
        color="primary"
      >
        Berlin, Germany - Intensive 11-week courses in Web Development - June
        2024
        <br />
        Technologies: MERN Stack, TypeScript, SQL
      </Typography>

      {/* Languages Section */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="primaryAccent"
        sx={{
          fontSize: 29,
          fontStyle: "italic",
          fontWeight: "bold",
          marginTop: 4,
        }}
      >
        Languages
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" color="primary" gutterBottom>
            Italian
          </Typography>
          <Box>{renderStars(5)}</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" color="primary" gutterBottom>
            English
          </Typography>
          <Box>{renderStars(4)}</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" color="primary" gutterBottom>
            Spanish
          </Typography>
          <Box>{renderStars(3)}</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1" color="primary" gutterBottom>
            German
          </Typography>
          <Box>{renderStars(3)}</Box>
        </Grid>
        {/* Add more languages as needed */}
      </Grid>
    </Container>
  );
};

export default About;
