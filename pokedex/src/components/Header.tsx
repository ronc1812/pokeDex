import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();
  const backToMain = () => {
    navigator("/");
  };
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="pokemon"
        onClick={backToMain}
      />
    </>
  );
};

export default Header;
