// import logo from './logo.svg';
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreditCard from "./sprint-3/day-1/assignments/CreditCard/CreditCard";
import CreditCardForm from "./sprint-3/day-1/assignments/CreditCard/CreditCardForm";


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
