import React, { useEffect, useState } from "react";
import Loader from "./loader";
import "./tours.css";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  const [loader, setloader] = useState(true)
  const [user, setuser] = useState([]);
  const getUser = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setuser(users);
      
      setloader(false)
    } catch (error) {
      setloader()
      console.log(error)
    }
  };
  useEffect(() => {
    const timer = setTimeout(()=>{
      getUser();
    },1000);
    return() => clearTimeout(timer)
    
  },
   []);
  if (loader) {
    return(
      <>
      <Loader/>
      </>
    )
  }

  return (
    <>
      <h1>Tour Project api</h1>
      <div className="main-container">
        {user.map((user) => {
          return (
            <>
            
              <div className="box-container">
                <div className="img-container">
                  <h4>{user.name} </h4>
                  <img src={user.image} key={user.id} alt="" />
                </div>
                <div className="info">{user.info}</div>
                <div className="price-box">
                  <h3>{user.price}</h3>
                  <button className="btn"> Delete</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tours;
