import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Watch from './Pages/Watch';
import MarketPlace from './Pages/MarketPlace';
import Groups from './Pages/Groups';
import Gaming from './Pages/Gaming';
import Home from './Pages/Home';
import { AiFillHome, AiFillYoutube, AiOutlinePlus } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { SiFacebookgaming, SiHomeassistantcommunitystore } from 'react-icons/si';
import styled from 'styled-components';
import facebook from './facebook.png';
import dp from './dp.png';
import {useState} from 'react';





const Nav = styled.nav`
  background-color: rgb(233, 245, 202);
  display: flex;
  padding: 10px;

  input {
    font-size: 18px;
    margin-left: 30px;
    border-radius: 6px;
  }

`

const Div3 = styled.div`
  margin-left: 105px;
`

const WrapperLink = styled(Link)`
  font-size: 40px;
  margin: 0px 20px;
  padding: 10px 20px;

  hover{
    background: green;
  }
`

const Sp = styled.span`
  font-size: 20px;
  border-radius: 10px;
  background: grey;
  padding: 10px 12px;
  margin-left: 30px;
`


function App() {
  const [view, setView] = useState(false);

  const change = ()=> {
    
    setView(!view);
  }

  return (
      view ? (
        <div className="App">
        <Nav>
          <div>
            <img src={facebook} alt="facebook"/>
          </div>
          <div className="div2">
            <input type="text" placeholder="Search..."/><span><BsSearch/></span>
          </div>
          <Div3>
            <WrapperLink to="/"><AiFillHome/></WrapperLink>
            <WrapperLink to="/Watch"><AiFillYoutube/></WrapperLink>
            <WrapperLink to="/MarketPlace"><SiHomeassistantcommunitystore/></WrapperLink>
            <WrapperLink to="/Groups"><MdGroups/></WrapperLink>
            <WrapperLink to="/Gaming"><SiFacebookgaming/></WrapperLink>
          </Div3>
          <div className="dpImg">
            <span><img src={dp} alt="dp"/></span>
          </div>
          <div className="dpName">Vaibhav</div>
          <div className="plus"><Sp><AiOutlinePlus/></Sp></div>
          <div className="logout"><button onClick={change}>Logout</button></div>
        </Nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Watch" element={<Watch/>}/>
          <Route path="/MarketPlace" element={<MarketPlace/>}/>
          <Route path="/Groups" element={<Groups/>}/>
          <Route path="/Gaming" element={<Gaming/>}/>
        </Routes>
        <footer><div>Copyright @ 2022 All Rights Reserved</div></footer>
      </div>
      
      ):(
        <div className="Effect">
          <h1>Facebook Login</h1>
          <div><button onClick={change}>Login</button></div>
        </div>
      )
    
  );
}

export default App;
