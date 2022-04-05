import Pokemon from "./Pokemon";
const Board: React.FC<{ info: { name: string; url: string }[] | null }> = (
  props
) => {
  return (
    <>
      {props.info ? (
        props.info.map((pokemon: { name: string; url: string }) => (
          <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))
      ) : (
        <h3>loading....</h3>
      )}
    </>
  );
};
export default Board;
