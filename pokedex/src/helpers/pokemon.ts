type Pokemon = {
  id: number;
  picture: string;
  name: string | undefined;
  types: { type: { name: string } }[];
};
export default Pokemon;
