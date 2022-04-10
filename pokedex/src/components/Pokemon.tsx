import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPokemonByName from "../services/getPokemonByName";
import setFormedId from "../services/setIdForm";
import { Id, Picture, Card, Name } from "../styles/PokemonStyle";

const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  const [picture, setPicture] = useState<string>("picture");
  const [id, setId] = useState<string>("");

  const navigator = useNavigate();
  useEffect(() => {
    async function getPokemon() {
      const currentPokemon = await getPokemonByName(props.name);
      setId(setFormedId(currentPokemon.id));
      setPicture(currentPokemon.sprites.front_default);
    }
    getPokemon();
  }, []);
  const moreInfoHandler = () => {
    navigator(`/pokemons/${props.name}`);
  };
  return (
    <Card onClick={moreInfoHandler}>
      <Id>{id}</Id>
      <Picture src={picture} alt="pokemon"></Picture>
      <Name>{props.name}</Name>
    </Card>
  );
};
export default Pokemon;
