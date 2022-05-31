import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <CartProvider>
        <Navbar />
        <Body />
      </CartProvider>
    </div>
  );
}

export default App;
