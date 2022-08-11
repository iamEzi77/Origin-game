import React from 'react'
import { Router } from 'react-router'
import{BrowserRouter as Routes ,Route} from "react-router-dom"
import Home from "../Home/HomeComponent"
const Routercomponent = () => {
  return (
    <>
     <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
     </Router>
    </>
  )
}

export default Routercomponent
