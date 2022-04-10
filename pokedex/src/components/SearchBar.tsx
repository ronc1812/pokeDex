import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Search } from "../styles/SearchBarStyle";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const navigator = useNavigate();
  const searchPokemon = () => {
    navigator(`/pokemons/${input}`);
  };
  return (
    <>
      <Search
        type={"text"}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter pokemon name or id"
      />
      <Button onClick={searchPokemon}>search!</Button>
    </>
  );
};
export default SearchBar;
