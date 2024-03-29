import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux"; // this is react-redux
import { store } from "./store/store"; // this is redux

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // the below one is react
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

reportWebVitals();
