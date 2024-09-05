import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Router>
          <DrawerAppBar />
          <Box sx={{ flex: 1 }}>
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
