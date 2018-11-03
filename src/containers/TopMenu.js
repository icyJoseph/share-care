import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertical from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export class TopMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  goToAndClose = path => () => {
    this.props.history.push(path);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              onClick={this.goToAndClose("/")}
              style={{ cursor: "pointer" }}
            >
              Share Care
            </Typography>
            <IconButton color="inherit" onClick={this.handleClick}>
              <MoreVertical />
            </IconButton>
          </Toolbar>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>User View</MenuItem>
            <MenuItem onClick={this.goToAndClose("/newCommunity")}>
              New Community
            </MenuItem>
            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            <MenuItem onClick={this.handleClose}>Share Care</MenuItem>
          </Menu>
        </AppBar>
      </div>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopMenu);
