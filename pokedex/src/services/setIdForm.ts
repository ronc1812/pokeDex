const setFormedId = (id: number) => {
  let formedId: string = "";
  id < 10
    ? (formedId = `#00${id}`)
    : id < 100
    ? (formedId = `#0${id}`)
    : (formedId = `#${id}`);
  return formedId;
};
export default setFormedId;
