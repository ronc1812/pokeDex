import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const navigator = useNavigate();
  const searchPokemon = () => {
    navigator(`/pokemons/${input}`);
  };
  return (
    <>
      <input
        type={"text"}
        placeholder="enter pokemon name or id"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={searchPokemon}>search!</button>
    </>
  );
};
export default SearchBar;
