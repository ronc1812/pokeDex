import styled from "styled-components";

const Card = styled.li`
  background-color: #f7f7f9;
  border: 2px solid #f7f7f9;
  border-radius: 5px;
  display: block;
  float: left;
  position: relative;
  margin: 3% 2.78125% 20px;
  padding: 1px 2%;
  text-align: center;
  font-family: "Monaco", monospace;
  @media (max-width: 768px) {
    padding: 2% 20%;
  }
`;

const Id = styled.h4`
  text-align: left;
  color: #373299;
  font-family: "Monaco", monospace;
`;
const Name = styled(Id)`
  text-align: center;
`;
const Picture = styled.img`
  padding: 3px;
  width: 150px;
`;
export { Card, Id, Name, Picture };
