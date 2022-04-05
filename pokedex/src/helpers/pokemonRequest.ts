import { type } from "os";

type PokeReq = {
  data: {
    id: number;
    types: { type: { name: string } }[];
    sprites: {
      front_default: string;
    };
  };
};
export default PokeReq;
