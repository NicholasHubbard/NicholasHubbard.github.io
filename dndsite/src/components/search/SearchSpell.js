import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";
//import Input from "../input/Input";

function Spell() {
  const [keyword, setKeyword] = useState("");
  const [spellData, setSpellData] = useState([]);

  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        setSpellData(data.results);
      });
  }, []);

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  console.log(spellData);

  return (
    <div>
      {spellData && (
        <div>
          <h1>D&D Spell Search</h1>
          <TextField
            id="outlined-full-width"
            label="Search Spells"
            style={{ margin: 8 }}
            placeholder="Search..."
            fullWidth
            margin="normal"
            value={keyword}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />

          <ul>
            {keyword &&
              spellData.map(spell => {
                return spell.name
                  .toUpperCase()
                  .startsWith(keyword.toUpperCase()) ? (
                  <li>
                    <NavLink
                      to={{
                        pathname: "/Spell/" + spell.name,
                        state: {
                          spellURL: spell.url
                        }
                      }}
                      key={spell.name}
                      style={{ textDecoration: "none" }}
                    >
                      <p>{spell.name}</p>
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      )}

      {!spellData && <Spinner />}
    </div>
  );
}

export default Spell;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto"
  }
}));

const styles = {
  input: {
    height: "40px",
    width: "100%",
    border: "1px solid white",
    backgroundColor: "rgba(0,0,0,.8)",
    color: "white",
    marginTop: "0.5em",
    fontSize: "1.0em"
  }
};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
