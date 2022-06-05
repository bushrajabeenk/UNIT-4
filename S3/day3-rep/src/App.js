import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import Posts from "./pages/Posts";
import Careers from "./pages/Careers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/feed"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
