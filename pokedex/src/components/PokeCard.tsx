import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  return (
    <>
      {currentPokemon ? (
        <div>
          {currentPokemon.name}
          {currentPokemon?.id}
          <img src={currentPokemon?.picture} alt="pokemon.data"></img>
          {currentPokemon?.types.map((type) => {
            <label key={type.type.name}>{type.type.name}</label>;
          })}
        </div>
      ) : (
        <div>{currentPokemon}</div>
      )}
    </>
  );
};
export default Pokecard;
