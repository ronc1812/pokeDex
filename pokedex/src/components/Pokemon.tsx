import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeReq from "../helpers/pokemonRequest";
import styled from "styled-components";
let api = `https://pokeapi.co/api/v2/pokemon/`;
const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  const [picture, setPicture] = useState<string>("picture");
  const navigator = useNavigate();
  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon: PokeReq = await axios.get(`${api}${props.name}`);
      const currentPokemon = fetchPokemon.data;

      setPicture(currentPokemon.sprites.front_default);
    }
    getPokemon();
  }, []);
  const moreInfoHandler = () => {
    navigator(`/pokemons/${props.name}`);
  };

  const Card = styled.li`
    background-color: #f1e888;
    border: 2px solid #424242;
    border-radius: 5px;
    display: block;
    float: left;
    position: relative;
    margin: 6% 8.78125% 50px;
    width: 15%;
    height: 12%;
    text-align: center;
    font-family: "Monaco", monospace;
  `;
  return (
    <Card onClick={moreInfoHandler}>
      <h5>{props.name}</h5>
      <img src={picture} alt="pokemon"></img>
      <br />
    </Card>
  );
};
export default Pokemon;
