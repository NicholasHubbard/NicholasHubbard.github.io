import React, { useState, useEffect } from "react";
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
          <h1>
            D&D Spell Search
            <input
              value={keyword}
              onChange={handleChange}
              style={styles.input}
              placeholder="Search..."
            />
          </h1>

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
