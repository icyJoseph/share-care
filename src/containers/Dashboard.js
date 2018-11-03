import React from "react";
import Paper from "@material-ui/core/Paper";
import TitleBar from "../components/TitleBar";
import CommunityCard from "../components/CommunityCard";
import Legend from "../components/Legend";

export const Dashboard = props => (
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
      {props.communities.map(({ id, ...rest }) => (
        <CommunityCard key={id} id={id} {...rest} />
      ))}
    </div>
    <Legend />
  </div>
);

export default Dashboard;
