import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeReq from "../helpers/pokemonRequest";

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
  return (
    <div onClick={moreInfoHandler}>
      {props.name}
      <img src={picture} alt="pokemon"></img>
    </div>
  );
};
export default Pokemon;
