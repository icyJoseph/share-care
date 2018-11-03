import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import People from "@material-ui/icons/PeopleOutlined";
import Requests from "@material-ui/icons/LiveHelpOutlined";
import NewAds from "@material-ui/icons/WhatshotOutlined";
import Transactions from "@material-ui/icons/Repeat";
import Report from "@material-ui/icons/ReportOutlined";

import Typography from "@material-ui/core/Typography";

import WithBadgeHOC from "./WithBadgeHOC";

export const CommunityCard = props => (
  <Paper
    elevation={10}
    style={{
      margin: "15px 15px",
      minWidth: "300px",
      maxWidth: "300px",
      cursor: "pointer"
    }}
  >
    <div style={{ padding: "10px", display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 3 }}>
        <div style={{ flex: 2, display: "flex" }}>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <div
            style={{
              display: "flex",
              flex: 2,
              justifyContent: "flex-end",
              padding: "5px"
            }}
          >
            {props.members}
            {props.newMembers === 0 ? (
              <People />
            ) : (
              <Badge
                badgeContent={`+${
                  props.newMembers > 99 ? "+99" : props.newMembers
                }`}
                color="primary"
              >
                <People />
              </Badge>
            )}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flex: 3,
            flexWrap: "wrap",
            padding: "15px"
          }}
        >
          <WithBadgeHOC icon={<Requests />} count={props.requests} />
          <WithBadgeHOC icon={<NewAds />} count={props.ads} />
          <WithBadgeHOC icon={<Transactions />} count={props.transactions} />
          <WithBadgeHOC icon={<Report />} count={props.reports} />
        </div>
        <div style={{ flex: 3, display: "flex", flexWrap: "wrap" }}>
          {props.keywords.map(keyword => (
            <Chip key={keyword} label={keyword} />
          ))}
        </div>
      </div>
    </div>
  </Paper>
);

export default CommunityCard;
