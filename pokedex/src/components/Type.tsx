import styled from "styled-components";

const Type: React.FC<{ type: string }> = (props) => {
  const types = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  const colors = [
    "#A8A77A",
    "#EE8130",
    "#6390F0",
    "#F7D02C",
    "#7AC74C",
    "#96D9D6",
    "#C22E28",
    "#A33EA1",
    "#E2BF65",
    "#A98FF3",
    "#F95587",
    "#A6B91A",
    "#B6A136",
    "#735797",
    "#6F35FC",
    "#705746",
    "#B7B7CE",
    "#D685AD",
  ];
  const type: number = types.indexOf(props.type);
  const StyleType = styled.label`
    background-color: ${colors[type]};
    border: 2px solid ${colors[type]};
    border-radius: 5px;
    width: 20%;
    color: white;
  `;

  return (
    <>
      <StyleType>{props.type}</StyleType>
    </>
  );
};
export default Type;
