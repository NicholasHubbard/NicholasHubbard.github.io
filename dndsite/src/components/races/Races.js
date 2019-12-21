import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

class Races extends Component {
  constructor() {
    super();
    this.state = {
      races: []
    };
  }

  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/races/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let races = data.results.map(race => {
          return (
            <Paper style={styles.main}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/Race/" + race.name,
                  state: {
                    raceURL: race.url
                  }
                }}
                key={race.name}
              >
                <p style={styles.anchor}>{race.name}</p>
              </NavLink>
            </Paper>
          );
        });
        this.setState({ races: races });

        console.log("state", this.state.races);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.races}</div>
      </div>
    );
  }
}

export default Races;

const styles = {
  anchor: {
    fontSize: "2em",
    color: "black",
    textDecoration: "none",
    paddingLeft: "2em"
  },
  main: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
    margin: "1em 8em 1em 8em",
    padding: "0.5em",
    borderColor: "grey",
    borderStyle: "groove",
    boxShadow: "10px 5px 5px grey"
  }
};
