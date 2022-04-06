import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pokemon from "../helpers/pokemon";
import PokeReq from "../helpers/pokemonRequest";

let api = `https://pokeapi.co/api/v2/pokemon/`;
const Pokecard: React.FC = (props) => {
  const [currentPokemon, setPokemon] = useState<Pokemon | null>(null);
  const { pokemon } = useParams<string>();
  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon: PokeReq = await axios.get(`${api}${pokemon}`);
      setPokemon({
        id: fetchPokemon.data.id,
        picture: fetchPokemon.data.sprites.front_default,
        types: fetchPokemon.data.types,
        name: pokemon,
      });
    }
    getPokemon();
  }, []);

  const Info = styled.div`
    background-color: #f1e888;
    border: 2px solid #424242;
    border-radius: 5px;
    text-align: center;
    width: 20%;
    margin-left: 40%;
    margin-top: 10%;
    font-family: "Monaco", monospace;
  `;
  const Results = styled.ul`
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  `;
  return (
    <>
      {currentPokemon ? (
        <Info>
          <h4>{currentPokemon.name}</h4>
          <h4>#{currentPokemon.id} </h4>
          <img src={currentPokemon.picture} alt="pokemon.data"></img>
          <Results>
            <h4>types :</h4>
            {currentPokemon.types.map((type) => {
              return <li key={type.type.name}>{type.type.name}</li>;
            })}
          </Results>
        </Info>
      ) : (
        <div>{currentPokemon}</div>
      )}
    </>
  );
};
export default Pokecard;
