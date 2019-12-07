// Name: Nicholas Hubbard (Class: P&P V: 1219)

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Races from "./components/races/Races";
import Race from "./components/races/Race";
import Home from "./components/home/Home";
import Spells from "./components/spells/Spells";
import Spell from "./components/spells/Spell";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import SearchSpell from "./components/search/SearchSpell";
import Nav from "./components/nav/Nav";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/Races">
            <Paper style={styles.main}>
              <Search />
            </Paper>

            <Paper style={styles.main}>
              <Races />
            </Paper>
          </Route>

          <Route path="/Race">
            <Paper style={styles.main}>
              <Race />
            </Paper>
          </Route>

          <Route path="/Spells">
            <Paper style={styles.main}>
              <SearchSpell />
            </Paper>
            <Paper style={styles.main}>
              <Spells />
            </Paper>
          </Route>

          <Route path="/Spell">
            <Paper style={styles.main}>
              <Spell />
            </Paper>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "grey"
  },

  main: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    margin: "2em 8em 2em 8em",
    padding: "2em",
    boxShadow: "10px 5px 5px grey"
  },

  nav: {
    color: "black",
    width: "100%",
    marginLeft: "2%",
    marginBottom: "2%"
  },

  ads: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  box: {
    backgroundColor: "grey",
    margin: "0 1em 1em 0.5em",
    wordWrap: "break-word",
    padding: "5em 1em 5em 1em"
  }
};
