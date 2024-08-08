import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import BLive from './pages/BLive'
import Body from './pages/Body'
import Error from './components/Error'
import Playground from './pages/Playground'
import TanishqPortfolio from './pages/TanishqPortfolio'
import Footer from './components/Footer'
import Brandshark from './pages/Brandshark'

import { createBrowserRouter,Link,Outlet } from "react-router-dom";
import { useState } from 'react'

const Redirect = ({ to }) => {
  window.location.href = to;

};



function App() {

  return (
    <>

      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/BLive",
        element: <BLive />,
      },
      {
        path: "/TanishqPortfolio",
        element: <TanishqPortfolio />,
      },
      {
        path: "/Brandshark",
        element: <Brandshark />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/pre-onboarding",
        element: <Redirect to="https://eejp1kkl8an.typeform.com/to/ZyWjcdcq" />,
      }
      
    ]
  }
  
]);

export default App
