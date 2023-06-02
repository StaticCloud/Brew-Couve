import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import HeaderComponent from './components/Header'
import styled from 'styled-components'; 
import './App.css'

const MainComponent = styled.main`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </MainComponent>
    </BrowserRouter>
  )
}

export default App
