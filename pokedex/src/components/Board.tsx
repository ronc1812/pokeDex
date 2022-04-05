import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import PokeRequest from "../helpers/pokeRequest";
const Board: React.FC = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      const fetchPokemons: PokeRequest = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/"
      );
      const results = fetchPokemons.data.results;
      setData(results);
    }
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        data.map((pokemon: { name: string; url: string }) => (
          <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))
      ) : (
        <h3>loading....</h3>
      )}
    </>
  );
};
export default Board;
