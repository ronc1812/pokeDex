type Pokemon = {
  id: number;
  sprites: {
    front_default: string;
  };
  name: string | undefined;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
};
export default Pokemon;
