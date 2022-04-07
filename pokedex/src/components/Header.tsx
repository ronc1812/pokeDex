import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigator = useNavigate();
  const backToMain = () => {
    navigator("/");
  };
  const Picture = styled.img`
  @media (max-width: 768px) {
    width: 150px;
    margin-right: 205px;
  `;
  return (
    <>
      <Picture
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="pokemon"
        onClick={backToMain}
      />
    </>
  );
};

export default Header;
