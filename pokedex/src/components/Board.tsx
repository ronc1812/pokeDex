import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

import getPokemon from "../services/getPokemons";
import { Wrapper, Results, ButtonDiv, Button } from "../styles/BoardStyle";
const Board: React.FC = (props) => {
  const [data, setData] = useState<{ name: string; url: string }[] | null>(
    null
  );
  let [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    async function getPokemons() {
      const results = await getPokemon(0);
      setData(results);
    }
    getPokemons();
  }, []);
  const nextHandler = async () => {
    setCurrentPage(++currentPage);
    const results = await getPokemon(currentPage);
    setData(results);
  };
  const prevHandler = async () => {
    if (currentPage === 0) return;
    setCurrentPage(--currentPage);
    const results = await getPokemon(currentPage);
    setData(results);
  };

  return (
    <>
      {data ? (
        <>
          <Wrapper>
            <Results>
              {data.map((pokemon: { name: string; url: string }) => (
                <Pokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </Results>
            <ButtonDiv>
              <Button onClick={prevHandler}>prev</Button>
              <Button onClick={nextHandler}>next</Button>
            </ButtonDiv>
          </Wrapper>
        </>
      ) : (
        <h3>loading....</h3>
      )}
    </>
  );
};
export default Board;
