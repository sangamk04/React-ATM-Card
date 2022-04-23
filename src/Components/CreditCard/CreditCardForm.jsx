import React, { useState } from "react";
import {InputBox,Ptag} from "./CreditCard.styled";
import styled from "./Styled.module.css";

function CreditCardForm({data, setData}) {
  const [formData, setformData] = useState({});

  const handleChange=(e)=>{
      const key_name = e.target.name;
      setformData({...formData, [key_name]:e.target.value})

  }
  const handleSubmit=(e)=>{
      e.preventDefault();
    //   console.log(formData)
    setData({...data,...formData})
  }
  return (
    <div style={{ width:"45%"}}>
      <h2>Card Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Ptag>CARD HOLDER NAME</Ptag>
          <div>
          <InputBox style={{width:"70%"}} type="text" name="cardHolderName" onChange={handleChange}/>
          </div>
         
        </div>
        <div>
          <Ptag>CARD NUMBER</Ptag>
          <InputBox style={{width:"70%"}} type="number" name="cardNumber" onChange={handleChange}/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", width:"73%"}}>
          <div>
            <Ptag>EXPIRY MONTH</Ptag>

            <InputBox type="number" name="month" style={{width:"40px"}} onChange={handleChange}/>
          </div>
          <div>
            <Ptag>EXPIRY YEAR</Ptag>
            <InputBox type="number" name="year" style={{width:"70px"}}onChange={handleChange}/>
          </div>
          <div>
            <Ptag>CVV</Ptag>
            <InputBox type="number" name="cvv" style={{width:"50px"}} onChange={handleChange}/>
          </div>
        </div>
        {/* <div style={{margin:"18px"}}><label>Payment Ammount:</label><input type="number" style={{width:"100px", border:"none", borderBottom:"solid red 1px"}}/> </div> */}
        <div style={{display:"flex",margin:"18px", justifyContent:"center"}}><button id={styled.paybtn} type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default CreditCardForm;
