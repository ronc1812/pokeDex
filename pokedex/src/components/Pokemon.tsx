import { url } from "inspector";

const Pokemon: React.FC<{ name: string; url: string }> = (props) => {
  return (
    <>
      {props.name}
      {props.url}
    </>
  );
};
export default Pokemon;
