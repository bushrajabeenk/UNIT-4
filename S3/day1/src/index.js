import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Appp from "./Appp";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthProvider>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </AuthProvider>

  // the below way of defining will give error, as information flows in one direction
  // this is called Composition : information never flows from child to parent, always flows from parent to child
  // somewhat like inheritance, accessible to only children not outside it

  //   <CartProvider>
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </CartProvider>
);

reportWebVitals();
