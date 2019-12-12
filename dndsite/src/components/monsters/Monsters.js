import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/monsters/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let monsters = data.results.map(monster => {
          return (
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
          );
        });
        this.setState({ monsters: monsters });

        console.log("state", this.state.monsters);
      });
  }

  render() {
    return (
      <div className="container2">
        <h1>Dungeons and Dragons Monsters</h1>
        <div className="container1">{this.state.monsters}</div>
      </div>
    );
  }
}

export default Monsters;

const styles = {
  anchor: {
    fontSize: "1em",
    color: "#16A085",
    textDecoration: "none"
  }
};
