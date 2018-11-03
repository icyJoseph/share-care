import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TitleBar from "./TitleBar";
import CommunityCard from "./CommunityCard";
import Legend from "./Legend";

class Dashboard extends Component {
  navigateTo = id => () => {
    return this.props.history.push(`/community/${id}`);
  };

  render() {
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
            <TitleBar title="Admin Dashboard" />
          </Paper>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "50px"
          }}
        >
          {this.props.communities.map(community => (
            <CommunityCard
              key={community.id}
              {...community}
              navigateTo={this.navigateTo(community.id)}
            />
          ))}
        </div>
        <Legend />
      </div>
    );
  }
}

export default Dashboard;
