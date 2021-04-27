import "./App.css";

import { PokedexSearch } from "./pokeapi/PokedexSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/pokeball.svg" className="App-logo" alt="logo" />
        <h1>Welcome to the Pokeapi</h1>
        <PokedexSearch></PokedexSearch>
      </header>
    </div>
  );
}

export default App;
