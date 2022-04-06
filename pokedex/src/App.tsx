import Board from "./components/Board";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokecard from "./components/PokeCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center" }}>
              <Header />
              <Board />
            </div>
          }
        />
        <Route
          path="pokemons/:pokemon"
          element={
            <div style={{ textAlign: "center" }}>
              <Header />
              <Pokecard />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
