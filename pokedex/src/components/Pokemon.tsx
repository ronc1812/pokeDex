import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeReq from "../helpers/pokemonRequest";
import styled from "styled-components";
let api = `https://pokeapi.co/api/v2/pokemon/`;
const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  const [picture, setPicture] = useState<string>("picture");
  const [id, setId] = useState<string>("");
  const navigator = useNavigate();
  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon: PokeReq = await axios.get(`${api}${props.name}`);
      const currentPokemon = fetchPokemon.data;

      currentPokemon.id < 10
        ? setId(`#00${currentPokemon.id}`)
        : currentPokemon.id < 100
        ? setId(`#0${currentPokemon.id}`)
        : setId(`#${currentPokemon.id}`);

      setPicture(currentPokemon.sprites.front_default);
    }
    getPokemon();
  }, []);
  const moreInfoHandler = () => {
    navigator(`/pokemons/${props.name}`);
  };

  const Card = styled.li`
    background-color: #f0f8ff;
    border: 2px solid #424242;
    border-radius: 5px;
    display: block;
    float: left;
    position: relative;
    margin: 3% 2.78125% 20px;
    padding: 1px 2%;
    text-align: center;
    font-family: "Monaco", monospace;
  `;

  const Id = styled.h4`
    text-align: left;
    color: #0033cc;
    font-family: "Monaco", monospace;
  `;
  const Name = styled(Id)`
    text-align: center;
  `;
  const Picture = styled.img`
    padding: 3px;
    width: 150px;
  `;
  return (
    <Card onClick={moreInfoHandler}>
      <Id>{id}</Id>
      <Picture src={picture} alt="pokemon"></Picture>
      <Name>{props.name}</Name>
    </Card>
  );
};
export default Pokemon;
