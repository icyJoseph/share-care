import React, { Component } from "react";
import TopMenu from "./components/TopMenu";
import TitleBar from "./components/TitleBar";
import CommunityCard from "./components/CommunityCard";
import Mock from "./mock";

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <TitleBar />
        {Mock.map(community => (
          <CommunityCard key={community.id} {...community} />
        ))}
      </div>
    );
  }
}

export default App;
