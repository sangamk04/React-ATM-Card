// import logo from './logo.svg';
import React, {useState } from "react";
import "./App.css";
// import { Route, Routes, useNavigate } from "react-router-dom";
import CreditCard from "./Components/CreditCard/CreditCard";
import CreditCardForm from "./Components/CreditCard/CreditCardForm";


function App() {
  const [data,setData] = useState({});
  return (
    <>
    <div className="App">
      <CreditCard data={data} setData={setData}/>
      <CreditCardForm data={data} setData={setData}/>
    </div>

      
    </>
  );
}

export default App;
