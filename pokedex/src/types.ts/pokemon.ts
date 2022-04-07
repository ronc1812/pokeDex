type Pokemon = {
  id: number;
  picture: string;
  name: string | undefined;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
};
export default Pokemon;
