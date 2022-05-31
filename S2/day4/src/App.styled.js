import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

const AppStyled = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
height: 40vmin;
pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
`;

export { AppStyled, AppHeader, AppLogo, FlexBox };
