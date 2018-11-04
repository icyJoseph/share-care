import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./index.css";
import { register } from "./serviceWorker";
import Routes from "./routes";
import Mock from "./mock";

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

class Index extends React.Component {
  state = {
    communities: Mock
  };

  addCommunity = data => {
    return this.setState(prev => ({
      communities: [data].concat(prev.communities)
    }));
  };

  render() {
    const { communities } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Routes communities={communities} addCommunity={this.addCommunity} />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

register();
