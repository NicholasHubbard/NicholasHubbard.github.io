import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

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
            <Paper style={styles.main}>
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
            </Paper>
          );
        });
        this.setState({ spells: spells });
        console.log("state", this.state.spells);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.spells}</div>
      </div>
    );
  }
}

export default Spells;

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
