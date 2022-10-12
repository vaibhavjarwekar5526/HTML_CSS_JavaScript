import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, change} from './Actions/counter';


function App() {
  const counter = useSelector((state) => state.counter);
  const signin = useSelector((state) => state.signin);
  const dispatch= useDispatch();

  const inc=()=>{
    dispatch(increment())
  }

  const dec=()=>{
    dispatch(decrement())
  }

  const ch = ()=> {
    dispatch(change())
  }

  


  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <h2>Counter :{counter} </h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <h1>{signin}</h1>
      <button onClick={ch}>SignIn</button>
    </div>
  );
}

export default App;