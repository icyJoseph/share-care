import React from "react";
import Typography from "@material-ui/core/Typography";

export const TitleBar = ({ title }) => (
  <div style={{ padding: "15px" }}>
    <Typography variant="h4" component="h1">
      {title}
    </Typography>
  </div>
);

export default TitleBar;
