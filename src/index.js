import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import { register } from "./serviceWorker";

// colors
export const dodgerBlue = "#1E90FF";
export const white = "#ffffff";

const theme = createMuiTheme({
  palette: {
    primary: { main: dodgerBlue },
    secondary: { main: white }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
register();
