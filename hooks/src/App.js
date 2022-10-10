import './App.css';
import React from 'react';
import UseContext from './Components/UseContext';
//import UseEffectWithDependencies from './Components/UseEffectWithDependencies';
//import UseEffectWithEmptyArray from './Components/UseEffectWithEmptyArray';
//import UseEffectWithoutDependencies from './Components/UseEffectWithoutDependencies';
//import Counter from './Components/Counter';
//import String from './Components/String';
//import CounterWithObject from './Components/CounterWithObject';


function App() {
  return (
    <div className="App">
        {/*<Counter/>
        <String />
        <CounterWithObject/>*/}
        {/*<UseEffectWithoutDependencies />
        <UseEffectWithEmptyArray/>
        <UseEffectWithDependencies/>*/}
        <UseContext/>
    </div>
  );
}

export default App;
