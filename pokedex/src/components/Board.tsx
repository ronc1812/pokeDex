import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
const Board: React.FC = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      const fetchPokemons: {
        data: { results: { name: string; url: string } };
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      const results = fetchPokemons.data.results;
      setData(results);
      console.log(fetchPokemons);
    }
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        data.map((pokemon: { name: string; url: string }) => (
          <div>
            <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            <br />
          </div>
        ))
      ) : (
        <h3>loading....</h3>
      )}
    </>
  );
};
export default Board;
