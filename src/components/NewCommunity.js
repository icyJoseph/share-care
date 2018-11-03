import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Slider from "./Slider";

const NewCommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const NewCommunityForm = styled.form`
  flex-direction: column;
  display: flex;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 320px) {
    width: 200px;
  }
`;

export class NewCommunity extends React.Component {
  state = {
    name: "",
    description: "",
    tags: "",
    isPublic: true,
    distance: 35,
    min: 1
  };

  componentDidMount() {
    const slider = document.getElementsByClassName("rc-slider-track")[0];
    const knob = document.getElementsByClassName("rc-slider-handle")[0];

    slider.style["background-color"] = "#1e90ff";
    knob.style["border"] = "solid 2px #1e90ff";
    return null;
  }

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  changeHandler = value => {
    return this.setState({ distance: value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleTagsChange = name => event => {
    const shouldReject = event.target.value.split(" ").length > 3;
    if (shouldReject) {
      return null;
    }
    this.setState({
      [name]: event.target.value
    });
  };

  id;
  name;
  members;
  newMembers;
  requests;
  ads;
  transactions;
  reports;
  keywords;

  submit = () => {
    const { name, description, tags, isPublic, distance } = this.state;

    const newCommunity = {
      id: new Date().getTime(),
      name,
      description,
      keywords: tags.split(" "),
      newMembers: 0,
      requests: 0,
      ads: 0,
      transactions: 0,
      reports: 0,
      distance,
      isPublic
    };

    this.props.addCommunity({ ...newCommunity });
    return this.props.history.push("/");
  };

  render() {
    return (
      <NewCommunityContainer>
        <NewCommunityForm onSubmit={this.submit}>
          <Typography
            variant="h5"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Let's share something convenient!
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ textAlign: "left", marginTop: "10px" }}
          >
            Name and Description
          </Typography>
          <TextField
            id="standard-name"
            label="Community Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
          <TextField
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.description}
            onChange={this.handleChange("description")}
            margin="normal"
          />
          <Typography
            variant="subtitle1"
            component="p"
            style={{ textAlign: "left", marginTop: "10px" }}
          >
            How far away should it expand?
          </Typography>
          <FormControlLabel
            control={
              <Slider
                key="slider"
                min={this.state.min}
                max={100}
                value={this.state.distance}
                onChange={this.changeHandler}
              />
            }
            label={`${this.state.distance} Kms from current location`}
            style={{
              justifyContent: "center",
              flexDirection: "column",
              margin: 0
            }}
          />

          <TextField
            label="Tags"
            value={this.state.tags}
            onChange={this.handleTagsChange("tags")}
            margin="normal"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {this.state.tags.length > 0 ? (
              this.state.tags
                .split(" ")
                .reduce((prev, word) => prev.concat(word.split("#")), [])
                .filter(e => e)
                .map(tag => <Chip key={tag} label={`#${tag.trim()}`} />)
            ) : (
              <Typography
                variant="caption"
                component="p"
                style={{ textAlign: "center" }}
              >
                Add 3 tags
              </Typography>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <Typography
              variant="subtitle1"
              component="p"
              style={{ textAlign: "left" }}
            >
              Should it a be a public community?
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.isPublic}
                  onChange={this.handleSwitchChange("isPublic")}
                  value="isPublic"
                  color="primary"
                />
              }
              label={this.state.public ? "Public" : "Private"}
              style={{ justifyContent: "center" }}
            />
          </div>

          <Button
            color="primary"
            variant="outlined"
            style={{ marginTop: "20px" }}
            onClick={this.submit}
          >
            Create
          </Button>
        </NewCommunityForm>
      </NewCommunityContainer>
    );
  }
}

export default NewCommunity;
