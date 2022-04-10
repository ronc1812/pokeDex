import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "a"
    "b";
`;
const ButtonDiv = styled.div`
  grid-area: b;
`;
const Results = styled.ul`
  grid-area: a;
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-left: 7%;
    @media (max-width: 768px) {
    margin-left: -34px;
    width: 125px;;
`;
const Button = styled.button`
  border-radius: 5px;
  border: 2px solid #f7f7f9;
  color: black;
  padding: 1% 3%;
  background-color: #f7f7f9;
  &:hover {
    background-color: white;
  }
`;
export { Wrapper, ButtonDiv, Results, Button };
