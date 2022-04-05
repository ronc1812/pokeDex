import { url } from "inspector";

const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  return (
    <>
      <br />
      {props.name}
      {props.url}
    </>
  );
};
export default Pokemon;
