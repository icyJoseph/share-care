import React, { Fragment } from "react";
import Badge from "@material-ui/core/Badge";

export const WithBadgeHOC = ({ icon, count, plus = false }) => (
  <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
    {count === 0 ? (
      <Fragment>{icon}</Fragment>
    ) : (
      <Badge
        badgeContent={`${plus ? "+" : ""}${count > 99 ? "+99" : count}`}
        color="primary"
      >
        {icon}
      </Badge>
    )}
  </div>
);

export default WithBadgeHOC;
