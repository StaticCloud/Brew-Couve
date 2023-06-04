import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import HeaderComponent from './components/Header'
import styled from 'styled-components'; 
import './App.css'

const MainComponent = styled.main`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  background-color: black;
`;

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </MainComponent>
    </BrowserRouter>
  )
}

export default App
