type GeneralReq = {
  data: {
    results: {
      name: string;
      url: string;
    }[];
    next: string;
    previous: string;
  };
};

export default GeneralReq;
