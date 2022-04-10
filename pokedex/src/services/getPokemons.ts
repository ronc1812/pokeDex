import axios from "axios";
import GeneralReq from "../types/generalRequest";
const server: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";
const getPokemon = async (page: number) => {
  const fetchPokemons: GeneralReq = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${page * 12}&limit=12`
  );
  const results = fetchPokemons.data.results;
  return results;
};
export default getPokemon;
