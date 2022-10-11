import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import ElectronicsPage from './Pages/ElectronicsPage';
import Home from './Pages/Home';
import BakeryPage from './Pages/BakeryPage';
import PageNotFound from './Pages/PageNotFound';
import Profile from './Pages/Profile';
import styled from 'styled-components';


const WrapperLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 30px 10px 10px 10px;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: -.3px;
  background-color: grey;
  color: white;
  border-radius: 10px;
  padding: 10px;
`

const Nav = styled.nav`
  background: rgb(235, 94, 52);
  height: 40px;
  
`



function App() {
  return (
    <div className="App">
        <Nav>
          <WrapperLink to={'/'}>Home</WrapperLink>
          <WrapperLink to={'/ElectronicsPage'}>ElectronicsPage</WrapperLink>
          <WrapperLink to={'/BakeryPage'}>BakeryPage</WrapperLink>
          <WrapperLink to={'/Profile'}>Profile</WrapperLink>
        </Nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ElectronicsPage" element={<ElectronicsPage/>}/>
          <Route path="/BakeryPage" element={<BakeryPage/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Profile/:userName/:userId" element={<Profile/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
