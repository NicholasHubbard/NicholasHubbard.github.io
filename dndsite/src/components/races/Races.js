import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
          );
        });
        this.setState({ races: races });
        console.log("state", this.state.races);
      });
  }

  render() {
    return (
      <div className="container2">
        <h1>Dungeons and Dragons List of Races</h1>
        <div className="container1">{this.state.races}</div>
      </div>
    );
  }
}

export default Races;

const styles = {
  anchor: {
    fontSize: "1em",
    color: "#16A085",
    textDecoration: "none"
  }
};
