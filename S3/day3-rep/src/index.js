import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";

const coatainer = document.getElementById("root");
const root = createRoot(coatainer);
root.render(
  
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  
);

reportWebVitals();
