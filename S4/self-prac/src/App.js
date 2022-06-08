import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, subtract } from './store/actions';

function App() {

const dispatch = useDispatch();

const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add())} >+</button>
        <button onClick={() => dispatch(subtract())} >-</button>
      </div>
    </div>
  );
}

export default App;
