import logo from './logo.svg';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Styles from './App.module.css';

function App() {
  return (
    <div className={Styles.app}>
      <Comp2/>
      <Comp1/>
    </div>
  );
}

export default App;
