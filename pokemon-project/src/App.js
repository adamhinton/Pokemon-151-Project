import React, { useState } from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";

//This is the original data of the 151 pokemon I'm displaying. It gets updated and passed to state based on what display options the user clicks.
import data from "./data";

//This isn't necessary right now but may be later
// import { useEffect } from "react/cjs/react.development";

function App() {
  //sets the pokemon data to state. It starts as the original data but my hope is that I can update it based on filters.
  const [pokemon, setPokemon] = useState(data);

  const setDisplay = (type = null, size = null) => {
    const newData = data.filter((item) => {
      if (type) {
        return item.type[0] === type || item.type[1] === type;
      } else if (size) {
        const weightInt = item.weight.split(" ")[0];
        return size === "small" ? weightInt < 5 : weightInt > 100;
      }
      return null;
    });
    setPokemon(newData);
  };
  //Ideas:
  //+Pass in multiple parameters:
  //  -One for type of change (type, size, etc) and one for, say, what type or size or whatever is desired. Maybe more.

  return (
    <div className="App">
      <Header setDisplay={setDisplay} />
      <AllPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
