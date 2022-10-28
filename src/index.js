import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/root.css";
import "./styles/Animation.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 850,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            light: "#1B95E0",
            main: "#1B95E0",
            dark: " #0057B7",
            contrastText: "#fff",
        },
        secondary02: {
            light: "#5DC948",
            main: "#5DC948",
            dark: " #5DC948",
            contrastText: "#5DC948",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
