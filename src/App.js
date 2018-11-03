import React, { Component } from "react";
import TopMenu from "./components/TopMenu";
import TitleBar from "./components/TitleBar";
import CommunityCard from "./components/CommunityCard";
import Legend from "./components/Legend";

import Mock from "./mock";

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <TitleBar title="Admin Dashboard" />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          {Mock.map(community => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
        <Legend />
      </div>
    );
  }
}

export default App;
