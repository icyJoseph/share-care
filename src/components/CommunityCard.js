import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  chip: {
    margin: "4px"
  }
};

function CommunityCard(props) {
  const { classes } = props;
  console.log(props);
  return (
    <Paper
      className={classes.root}
      elevation={10}
      style={{ margin: "15px auto", width: "80%" }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.members} members, {props.newMembers} new
          </Typography>
          <div style={{ flex: 1, display: "flex", flexWrap: "wrap" }}>
            {props.keywords.map(keyword => (
              <Chip key={keyword} label={keyword} className={classes.chip} />
            ))}
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

CommunityCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommunityCard);
