import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import CountUp from "react-countup";
import Typography from "@material-ui/core/Typography";

import TitleBar from "./TitleBar";

export class Detail extends Component {
  render() {
    const {
      match: {
        params: { id }
      },
      communities
    } = this.props;
    const [community] = communities.filter(
      community => community.id === parseInt(id, 10)
    );

    return (
      <div>
        <div
          style={{
            margin: "15px auto 5px",
            display: "flex"
          }}
        >
          <Paper
            elevation={10}
            style={{
              justifyContent: "flex-start",
              margin: "0 15px",
              width: "auto"
            }}
          >
            <TitleBar title={community.name} />
          </Paper>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Paper
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              flexDirection: "column"
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{ textAlign: "center" }}
            >
              <CountUp end={community.members} duration={2} />
            </Typography>
            Members
          </Paper>
          <Paper
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              margin: "10px"
            }}
          >
            Members:
            {community.members}
          </Paper>
          <Paper
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              margin: "10px"
            }}
          >
            Members:
            {community.members}
          </Paper>
        </div>
      </div>
    );
  }
}

export default Detail;
