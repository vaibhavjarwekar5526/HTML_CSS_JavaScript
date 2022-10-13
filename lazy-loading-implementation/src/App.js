import React,{Suspense, lazy} from 'react';
import './App.css';

const Name = lazy(()=> import('./Components/Name'));
const Image = lazy(()=> import('./Components/Image'));

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Name />
      </Suspense>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Image />
      </Suspense>
    </div>
  );
}

export default App;
