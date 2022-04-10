import axios from "axios";
import PokeReq from "../types/pokemonRequest";
let api = `https://pokeapi.co/api/v2/pokemon/`;
const getPokemonByName = async (name: string | undefined) => {
  const fetchPokemon: PokeReq = await axios.get(`${api}${name}`);
  const currentPokemon = fetchPokemon.data;
  return currentPokemon;
};
export default getPokemonByName;
