import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";

function Spell() {
  const spellURL = useLocation().state.spellURL;
  const [spell, setSpell] = useState(false);
  const [url, setURL] = useState(spellURL);

  useEffect(() => {
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setSpell(data);
      });
  }, []);

  return (
    <>
      {spell && (
        <div>
          <h1>{spell.name}</h1>
          <p>
            <b>Spell Description: </b> {spell.desc}
          </p>
        </div>
      )}

      {!spell && <Spinner />}
    </>
  );
}

export default Spell;

const styles = {};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
