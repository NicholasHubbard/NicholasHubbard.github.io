import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

class Monsters extends Component {
  // Class constuctor for the creation of an array of objects pulled from an API
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  // componentDidMount that fetches data from an API
  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/monsters/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let monsters = data.results.map(monster => {
          return (
            <Paper style={styles.main}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/Monster/" + monster.name,
                  state: {
                    monsterURL: monster.url
                  }
                }}
                key={monster.name}
              >
                <p style={styles.anchor}>{monster.name}</p>
              </NavLink>
            </Paper>
          );
        });
        this.setState({ monsters: monsters });

        console.log("state", this.state.monsters);
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <div>{this.state.monsters}</div>
      </div>
    );
  }
}

export default Monsters;

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
  },
  container: {
    marginBottom: "10px"
  }
};
