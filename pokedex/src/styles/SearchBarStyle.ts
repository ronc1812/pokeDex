import styled from "styled-components";

const Search = styled.input`
  border-radius: 5px;
  border: 1px solid #373299;
  background-color: #f7f7f9;
  width: 341px;
  height: 36px;
  margin-top: 2%;
    @media (max-width: 768px) {
    margin-left: -232px;
    width: 157px;
    height: 36px;
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
    @media (max-width: 768px) {
    margin-left: 1px;
    width: 60px;
    height: 40px;
`;
export { Button, Search };
