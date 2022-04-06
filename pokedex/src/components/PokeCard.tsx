import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pokemon from "../helpers/pokemon";
import PokeReq from "../helpers/pokemonRequest";
import Stat from "./Stat";
import Type from "./Type";

let api = `https://pokeapi.co/api/v2/pokemon/`;
const Pokecard: React.FC = (props) => {
  const [currentPokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState<string>("");
  const { pokemon } = useParams<string>();
  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon: PokeReq = await axios.get(`${api}${pokemon}`);
      setPokemon({
        id: fetchPokemon.data.id,
        picture: fetchPokemon.data.sprites.front_default,
        types: fetchPokemon.data.types,
        name: pokemon,
        stats: fetchPokemon.data.stats,
      });
      fetchPokemon.data.id < 10
        ? setId(`#00${fetchPokemon.data.id}`)
        : fetchPokemon.data.id < 100
        ? setId(`#0${fetchPokemon.data.id}`)
        : setId(`#${fetchPokemon.data.id}`);
    }
    getPokemon();
  }, []);

  const Wrapper = styled.div`
    background-color: #f0f8ff;
    border: 2px solid #424242;
    border-radius: 5px;
    text-align: left;
    width: 40%;
    margin-left: 30%;
    margin-top: 10%;
    font-family: "Monaco", monospace;
  `;

  const Id = styled.h4`
    text-align: left;
    color: #0033cc;
    font-family: "Monaco", monospace;
    font-size: 100%;
  `;
  const Name = styled(Id)`
    text-align: left;
    margin-left: 7%;
    font-size: 150%;
    margin-top: 1%;
  `;
  const Picture = styled.img`
    width: 200px;
  `;

  const Stats = styled.ul`
    list-style: none;
    text-align: right;
    font-family: "Monaco", monospace;
    font-size: 100%;
  `;

  const Info = styled(Wrapper)`
    border: red;
    margin: 0px;
  `;
  return (
    <>
      {currentPokemon ? (
        <Wrapper>
          <Info>
            <Id>{id} </Id>
            <Picture src={currentPokemon.picture} alt="pokemon.data" />
            <Name>{currentPokemon.name}</Name>
            <Name>
              {currentPokemon.types.map((type) => {
                return <Type key={type.type.name} type={type.type.name} />;
              })}
            </Name>
          </Info>
          <Stats>
            {currentPokemon.stats.map((stat) => {
              return (
                <Stat
                  key={stat.stat.name}
                  name={stat.stat.name}
                  value={stat.base_stat}
                />
              );
            })}
          </Stats>
        </Wrapper>
      ) : (
        <div>{currentPokemon}</div>
      )}
    </>
  );
};
export default Pokecard;
