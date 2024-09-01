import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        The page you're looking for doesn't exist or an error occurred.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ mt: 2 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
