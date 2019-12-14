// Name: Nicholas Hubbard (Class: P&P V: 1219)

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageCarousel from "./components/pageCarousel/PageCarousel";
import Races from "./components/races/Races";
import Race from "./components/races/Race";
import Spells from "./components/spells/Spells";
import Spell from "./components/spells/Spell";
import Monsters from "./components/monsters/Monsters";
import Monster from "./components/monsters/Monster";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import SearchSpell from "./components/search/SearchSpell";
import SearchMonster from "./components/search/SearchMonster";
import Paper from "@material-ui/core/Paper";
import BackgroundImg1 from "./images/critRole.jpg";
import BackgroundImg2 from "./images/monster.jpeg";
import { makeStyles, Container } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <Router style={styles.container}>
      <Header />
      <main>
        <Switch>
          <Route path="/Home">
            <PageCarousel />
          </Route>
          <Route path="/Races">
            <Paper style={styles.mainSearch1}>
              <h1 style={styles.anchor2}>Dungeons and Dragons Races</h1>
            </Paper>
            <Search />
            <Races />
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

          <Route path="/Monsters">
            <Paper style={styles.mainSearch2}>
              <h1 style={styles.anchor2}>Dungeons and Dragons Monsters</h1>
            </Paper>
            <SearchMonster />
            <Monsters />
          </Route>

          <Route path="/Monster">
            <Paper style={styles.main}>
              <Monster />
            </Paper>
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "#F6F6F6"
  },

  main: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    margin: "2em 8em 2em 8em",
    padding: "2em",
    boxShadow: "10px 5px 5px grey"
  },

  mainSearch1: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "4em",
    backgroundImage: `url(${BackgroundImg1})`
  },

  mainSearch2: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "4em",
    backgroundImage: `url(${BackgroundImg2})`
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
  },
  anchor2: {
    fontSize: "2em",
    color: "white",
    fontStyle: "bold",
    paddingLeft: "2em"
  }
};
