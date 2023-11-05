import React from 'react'
import * as ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home.tsx"
import FlightsScreen from "./pages/FlightsScreen.tsx"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Home/>} /> 
        <Route path="/flights/screen" element = {<FlightsScreen/>} /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App