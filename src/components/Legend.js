import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import People from "@material-ui/icons/PeopleOutlined";
import Requests from "@material-ui/icons/LiveHelpOutlined";
import NewAds from "@material-ui/icons/WhatshotOutlined";
import Transactions from "@material-ui/icons/Repeat";
import Report from "@material-ui/icons/ReportOutlined";
import Typography from "@material-ui/core/Typography";

const BottomContainer = styled(Paper)`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9;
`;

const LegendContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

const StyledLabel = styled(Typography).attrs({
  style: () => ({ fontSize: "12pt" })
})``;

function Legend(props) {
  return (
    <BottomContainer elevation={20}>
      <LegendContainer>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <People />
            <StyledLabel variant="h5" component="p">
              Members
            </StyledLabel>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Requests />
            <StyledLabel variant="h5" component="p">
              Requests
            </StyledLabel>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <NewAds />
            <StyledLabel variant="h5" component="p">
              New Ads
            </StyledLabel>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Transactions />
            <StyledLabel variant="h5" component="p">
              Transactions
            </StyledLabel>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Report />
            <StyledLabel variant="h5" component="p">
              Reports
            </StyledLabel>
          </div>
        </div>
      </LegendContainer>
    </BottomContainer>
  );
}

export default Legend;
