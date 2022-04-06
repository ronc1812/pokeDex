type PokeReq = {
  data: {
    id: number;
    types: { type: { name: string } }[];
    sprites: {
      front_default: string;
    };
    stats: { base_stat: number; stat: { name: string } }[];
  };
};
export default PokeReq;
