import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import Protected from './Components/Protected'
import Profile from './Components/Profile';




function App() {


  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/AboutUs" element={<Protected Component={AboutUs}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
