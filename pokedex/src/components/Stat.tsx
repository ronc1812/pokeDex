import styled from "styled-components";
const StyledStat = styled.div`
  display: grid;
  grid-template-areas: "a b";
  font-size: 30%;
  margin-top: 50%;
  margin-right: 10%;
  color: #373299;
  @media (max-width: 768px) {
  text-align : left;
  margin-left : 40px;
  font-size : 80%;
  margin-top: -10px;
  grid-template-areas: 
  "a"
  "b";
`;
const First = styled.div`
  grid-area: a;
`;
const Second = styled.div`
  grid-area: b;
`;
const Stat: React.FC<{
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}> = (props) => {
  const stats = props.stats;

  return (
    <>
      <StyledStat>
        <First>
          {stats[0].stat.name} : {stats[0].base_stat}
          <br />
          {stats[1].stat.name} : {stats[1].base_stat}
          <br />
          {stats[2].stat.name} : {stats[2].base_stat}
        </First>
        <Second>
          {stats[3].stat.name} : {stats[3].base_stat}
          <br />
          {stats[4].stat.name} : {stats[4].base_stat}
          <br />
          {stats[5].stat.name} : {stats[5].base_stat}
        </Second>
      </StyledStat>
    </>
  );
};
export default Stat;
