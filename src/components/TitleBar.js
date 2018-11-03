import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

export class TitleBar extends Component {
  state = {
    admin: true
  };

  handleChange = event => {
    this.setState({ admin: event.target.checked });
  };

  render() {
    const { admin } = this.state;
    return (
      <div style={{ flexGrow: 1, margin: "5px 5px", padding: "2px 3px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={admin}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
                color="primary"
              />
            }
            label={`${admin ? "Admin" : "User"} view`}
          />
        </FormGroup>
      </div>
    );
  }
}

export default TitleBar;
