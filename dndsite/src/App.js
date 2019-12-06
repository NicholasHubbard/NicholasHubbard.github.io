import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Races from "./components/races/Races";
import Race from "./components/races/Race";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Nav from "./components/nav/Nav";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";

function App() {
  return (
    <Router>
      <Header />
      <section>
        <Switch>
          <Route path="/Race">
            <Paper style={styles.main}>
              <Race />
            </Paper>
          </Route>

          <Route path="/">
            <Paper style={styles.main}>
              <Search />
              <Races />
            </Paper>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "white"
  },

  main: {
    display: "flex",
    justifyContent: "center",
    //gridGap: '1em',
    //gridTemplateColumns: 'auto 800px 15%',
    margin: "2em",
    padding: "2em",
    boxShadow: "0 .25em .25em grey"
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
