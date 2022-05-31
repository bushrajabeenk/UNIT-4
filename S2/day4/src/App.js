import logo from "./logo.svg";
import { AppStyled, AppHeader, AppLogo, FlexBox } from "./App.styled";

function App() {
  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <FlexBox flexDirection="row">
          <div>A</div>
          <div>B</div>
        </FlexBox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
