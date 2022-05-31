import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Body />
      </CartProvider>
    </div>
  );
}

export default App;
