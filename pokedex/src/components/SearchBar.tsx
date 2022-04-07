import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Search = styled.input`
  border-radius: 5px;
  border: 1px solid #373299;
  background-color: #f7f7f9;
  width: 341px;
  height: 36px;
  margin-top: 2%;
`;
const Button = styled.button`
  border-radius: 5px;
  border: 1px solid #373299;
  background-color: #373299;
  position: absolute;
  width: 87px;
  height: 40px;
  color: white;
  margin-top: 2%;
  margin-left: 0.3%;
`;
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
