import React, { Component } from "react";
import TitleBar from "./TitleBar";
import CommunityCard from "./CommunityCard";
import Legend from "./Legend";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <TitleBar title="Admin Dashboard" />
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
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
        <Legend />
      </div>
    );
  }
}

export default Dashboard;
