import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";
//import Input from "../input/Input";

function Monster() {
  const [keyword, setKeyword] = useState("");
  const [monsterData, setMonsterData] = useState([]);

  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/monsters/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        setMonsterData(data.results);
      });
  }, []);

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  console.log(monsterData);

  return (
    <div>
      {monsterData && (
        <div>
          <h1>
            D&D Monster Search
            <input
              value={keyword}
              onChange={handleChange}
              style={styles.input}
              placeholder="Search..."
            />
          </h1>

          <ul>
            {keyword &&
              monsterData.map(monster => {
                return monster.name
                  .toUpperCase()
                  .startsWith(keyword.toUpperCase()) ? (
                  <li>
                    <NavLink
                      to={{
                        pathname: "/Monster/" + monster.name,
                        state: {
                          monsterURL: monster.url
                        }
                      }}
                      key={monster.name}
                    >
                      <p>{monster.name}</p>
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      )}

      {!monsterData && <Spinner />}
    </div>
  );
}

export default Monster;

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
