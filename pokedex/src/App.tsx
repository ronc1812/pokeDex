import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralReq from "./helpers/generalRequest";
import Pokecard from "./components/PokeCard";
function App() {
  const [data, setData] = useState<{ name: string; url: string }[] | null>(
    null
  );
  useEffect(() => {
    async function fetchData() {
      const fetchPokemons: GeneralReq = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/"
      );
      const results = fetchPokemons.data.results;
      setData(results);
    }
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Board info={data} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
