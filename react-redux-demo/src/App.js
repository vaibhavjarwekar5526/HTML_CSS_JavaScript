import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './Actions/counter';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch= useDispatch();

  const inc=()=>{
    dispatch(increment())
  }

  const dec=()=>{
    dispatch(decrement())
  }

  


  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <h2>Counter :{counter} </h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
