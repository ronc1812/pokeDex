import axios from "axios";
import { useEffect, useState } from "react";
import GeneralReq from "../types.ts/generalRequest";
import Pokemon from "./Pokemon";
import styled from "styled-components";
const server: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";
const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "a"
    "b";
`;
const ButtonDiv = styled.div`
  grid-area: b;
`;
const Results = styled.ul`
  grid-area: a;
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-left: 7%;
    @media (max-width: 768px) {
    margin-left: -34px;
    width: 125px;;
`;
const Button = styled.button`
  border-radius: 5px;
  border: 2px solid #f7f7f9;
  color: black;
  padding: 1% 3%;
  background-color: #f7f7f9;
  &:hover {
    background-color: white;
  }
`;
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
      `https://pokeapi.co/api/v2/pokemon/?offset=${currentPage * 12}&limit=12`
    );
    const results = fetchPokemons.data.results;
    setData(results);
  };
  const prevHandler = async () => {
    if (currentPage === 0) return;
    setCurrentPage(--currentPage);
    const fetchPokemons: GeneralReq = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${currentPage * 12}&limit=12`
    );
    const results = fetchPokemons.data.results;
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
