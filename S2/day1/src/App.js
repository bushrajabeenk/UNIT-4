import "./App.css";
import Todos from "./components/Todos";
import React from "react";

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;

//const [count, setCount] = useState(0);

// console.log(1);
// useEffect(() => {
//   console.log(2);
// });
// console.log(3);

// in the above case, the order of output display will be determined be
// 1 3 2
// because, it first executes 1, 3, then renders the/executes the
// return function and then executes the useEffect function
