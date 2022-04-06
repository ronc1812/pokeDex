import axios from "axios";
import { useEffect, useState } from "react";
import GeneralReq from "../helpers/generalRequest";
import Pokemon from "./Pokemon";
const server: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6";
const Board: React.FC = (props) => {
  const [data, setData] = useState<{ name: string; url: string }[] | null>(
    null
  );
  let [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    async function fetchData() {
      const fetchPokemons: GeneralReq = await axios.get(server);
      const results = fetchPokemons.data.results;
      setData(results);
    }
    fetchData();
  }, []);
  const nextHandler = async () => {
    setCurrentPage(++currentPage);
    const fetchPokemons: GeneralReq = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${currentPage * 6}&limit=6`
    );
    const results = fetchPokemons.data.results;
    setData(results);
  };
  const prevHandler = async () => {
    if (currentPage === 0) return;
    setCurrentPage(--currentPage);
    const fetchPokemons: GeneralReq = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${currentPage * 6}&limit=6`
    );
    const results = fetchPokemons.data.results;
    setData(results);
  };
  return (
    <>
      {data ? (
        <>
          {data.map((pokemon: { name: string; url: string }) => (
            <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
          <button onClick={nextHandler}>next</button>
          <button onClick={prevHandler}>prev</button>
        </>
      ) : (
        <h3>loading....</h3>
      )}
    </>
  );
};
export default Board;
