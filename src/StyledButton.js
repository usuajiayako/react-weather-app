import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  font-family: 'Ubuntu', sans-serif;
  margin-top: 20px;
  background: ${(props) => (props.primary ? "#F4B85D" : "#3AA4EA" )};
  `;

export default StyledButton;


