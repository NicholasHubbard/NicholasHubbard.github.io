import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Spells extends Component {
  constructor() {
    super();
    this.state = {
      spells: []
    };
  }

  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/spells/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let spells = data.results.map(spell => {
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/Spell/" + spell.name,
                state: {
                  spellURL: spell.url
                }
              }}
              key={spell.name}
            >
              <p style={styles.anchor}>{spell.name}</p>
            </NavLink>
          );
        });
        this.setState({ spells: spells });
        console.log("state", this.state.spells);
      });
  }

  render() {
    return (
      <div className="container2">
        <h1>Dungeons and Dragons List of Spells</h1>
        <div className="container1">{this.state.spells}</div>
      </div>
    );
  }
}

export default Spells;

const styles = {
  anchor: {
    fontSize: "1em",
    color: "#16A085",
    textDecoration: "none"
  }
};
