import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pokemon from "../types.ts/pokemon";
import PokeReq from "../types.ts/pokemonRequest";
import Stat from "./Stat";
import Type from "./Type";

let api = `https://pokeapi.co/api/v2/pokemon/`;
const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "a b c c"
    "a b d d"
    "a b d d";
  background-color: #f7f7f9;
  border: 2px solid #f7f7f9;
  border-radius: 5px;
  text-align: left;
  width: 40%;
  margin-left: 30%;
  margin-top: 10%;
  font-family: "Monaco", monospace;
  @media (max-width: 768px) {
  padding: 2% 20%; 
  margin : 40px;
  display: grid;
  grid-template-areas:
    "a a"
    "b b"
    "c c"
    "d d";
    margin-left: -66px;
  
`;

const Id = styled.h4`
  text-align: left;
  color: #373299;
  font-family: "Monaco", monospace;
  font-size: 100%;
  margin: 0;
  @media (max-width: 768px) {
  margin-left: 50px;
`;
const Name = styled.h4`
  text-align: center;
  color: #373299;
  font-family: "Monaco", monospace;
  margin-left: 7%;
  font-size: 100%;
  margin-top: 1%;
  @media (max-width: 768px) {
  font-size : 150%;
  margin-left : 5px;
  margin-top : -80px;
`;
const Types = styled.h4`
  text-align: center;
  color: #373299;
  font-family: "Monaco", monospace;
  margin-left: 7%;
  font-size: 100%;
  margin-top: 1%;
  @media (max-width: 768px) {
  font-size : 150%;
  margin-left : 5px;
  margin-top : -30px;
`;
const Picture = styled.img`
  width: 100px;
  margin-left: 20%;
  margin-top: 20%;
  @media (max-width: 768px) {
  width: 300px;
  margin :5px;
  margin-top: -70px;
`;

const Stats = styled.div`
  grid-area: d;
  list-style: none;
  text-align: right;
  font-family: "Monaco", monospace;
  font-size: 100%;
  height: 250px;
  @media (max-width: 768px) {
  margin-left: -15px

    
    
`;

const Info = styled.div`
  grid-area: a;
  margin: 0px;
  float: left;
      @media (max-width: 768px) {
        grid-area: a;
    margin: -10px;
    margin-left : -70px;
   
`;

const StatsHeader = styled.h4`
  grid-area: c;
  font-size: 100%;
  text-align: center;
  color: #373299;
        @media (max-width: 768px) {
margin-left : -175px;
`;
const Border = styled.div`
  grid-area: b;
  border-left: 1px solid #d7d7d7;
       float: left;
      @media (max-width: 768px) {
border-top: 1px solid #d7d7d7;
margin-left : -15px;
width: 200px;
  
`;
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
        name: fetchPokemon.data.name,
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

  return (
    <>
      {currentPokemon ? (
        <Wrapper>
          <Info>
            <Id>{id}</Id>
            <Picture src={currentPokemon.picture} alt="pokemon.data" />
            <Name>{currentPokemon.name}</Name>
            <Types>
              {currentPokemon.types.map((type) => {
                return <Type key={type.type.name} type={type.type.name} />;
              })}
            </Types>
          </Info>
          <Border></Border>
          <Stats>
            <StatsHeader>stats</StatsHeader>
            <Stat stats={currentPokemon.stats} />
          </Stats>
        </Wrapper>
      ) : (
        <div>oops...something went wrong!</div>
      )}
    </>
  );
};
export default Pokecard;
