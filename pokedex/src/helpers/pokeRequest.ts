type PokeRequest = {
  data: {
    results: {
      name: string;
      url: string;
    };
  };
};

export default PokeRequest;
