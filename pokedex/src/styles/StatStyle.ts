import styled from "styled-components";

const StyledStat = styled.div`
  display: grid;
  grid-template-areas: "a b";
  font-size: 30%;
  margin-top: 50%;
  margin-right: 10%;
  color: #373299;
  @media (max-width: 768px) {
  text-align : left;
  margin-left : 40px;
  font-size : 80%;
  margin-top: -10px;
  grid-template-areas: 
  "a"
  "b";
`;
const First = styled.div`
  grid-area: a;
`;
const Second = styled.div`
  grid-area: b;
`;
export { StyledStat, First, Second };
