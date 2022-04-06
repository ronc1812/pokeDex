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
            <div>
              <Header />
              <Board />
            </div>
          }
        />
        <Route
          path="pokemons/:pokemon"
          element={
            <div>
              <Header />
              <Pokecard />
            </div>
          }
        />
        <Route
          path="page/:page"
          element={
            <div>
              <Header />
              <Board />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
