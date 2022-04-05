import axios from "axios";
import { useEffect, useState } from "react";
import PokeReq from "../helpers/pokemonRequest";

let api = `https://pokeapi.co/api/v2/pokemon/`;
const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  const [id, setId] = useState<number>(0);
  const [picture, setPicture] = useState<string>("picture");
  const [types, setTypes] = useState<{ type: { name: string } }[]>([]);

  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon: PokeReq = await axios.get(`${api}${props.name}`);
      const currentPokemon = fetchPokemon.data;
      setId(currentPokemon.id);
      setPicture(currentPokemon.sprites.front_default);
      setTypes(currentPokemon.types);
    }
    getPokemon();
  }, []);
  return (
    <div>
      {props.name}
      {id}
      <img src={picture} alt="pokemon"></img>
      {types.map((type) => (
        <h5 key={type.type.name}>{type.type.name}</h5>
      ))}
    </div>
  );
};
export default Pokemon;
