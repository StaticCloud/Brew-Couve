import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import HeaderComponent from './components/Header'
import styled from 'styled-components'; 
import './App.css'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home/>
  }
])

const MainComponent = styled.main`
  position: absolute;
  z-index: -2;
`;

function App() {
  return (
    <>
      <HeaderComponent/>
      <MainComponent>
        <RouterProvider router={router} fallbackElement={<h1>Loading..</h1>}/>
      </MainComponent>
    </>
  )
}

export default App
