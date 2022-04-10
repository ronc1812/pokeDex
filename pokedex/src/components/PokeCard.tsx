import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemonByName from "../services/getPokemonByName";
import setFormedId from "../services/setIdForm";
import Pokemon from "../types/pokemon";
import Stat from "./Stat";
import Type from "./Type";
import {
  Wrapper,
  Id,
  Name,
  Border,
  Stats,
  StatsHeader,
  Info,
  Picture,
  Types,
} from "../styles/CardStyle";

const Pokecard: React.FC = (props) => {
  const [currentPokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState<string>("");
  const { pokemon } = useParams<string>();
  useEffect(() => {
    async function getPokemon() {
      const fetchPokemon = await getPokemonByName(pokemon);
      setPokemon(fetchPokemon);
      setId(setFormedId(fetchPokemon.id));
    }
    getPokemon();
  }, []);

  return (
    <>
      {currentPokemon ? (
        <Wrapper>
          <Info>
            <Id>{id}</Id>
            <Picture
              src={currentPokemon.sprites.front_default}
              alt="pokemon.data"
            />
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
