import styled from "styled-components";

const Stat: React.FC<{ name: string; value: number }> = (props) => {
  return (
    <>
      <li>
        {props.name}: {props.value}
      </li>
    </>
  );
};
export default Stat;
