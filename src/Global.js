import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  color: ${(props) => (props.primary ? "white" : "black" )};
  background-color: ${(props) => (props.primary ? "rgb(38, 87, 138)" : "#F4B85D" )};
}`;