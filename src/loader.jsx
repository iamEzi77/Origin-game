import React from "react"
import loader from "./loader/loader.gif" 
import "./loader.css"
const Loader = () => {
  return (
    <div className="loader">
    <img src={loader} alt="" srcset="" />
    </div>
  )
}

export default Loader
