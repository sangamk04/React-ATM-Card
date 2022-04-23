import React from "react";
import { Ptag } from "./CreditCard.styled";
import styled from "./Styled.module.css";
import visaImg from "./imagedata/symbols.png";
import chipImg from "./imagedata/chip.png";


function CreditCard({data}) {
    console.log(data)
    const {cardHolderName,cardNumber,cvv,month,year}=data
    
  return (
    <div id={styled.cardDiv}>
      <div id={styled.Card}>
        <div id={styled.Cardtype}>
        
          <img src={visaImg} alt="card type" style={{height:"60px",marginRight:"25px",}} />
        </div>
        <div style={{ paddingLeft: "30px", marginTop: "-5px" }}>
          <img src={chipImg} alt="chip" style={{height:"35px"}}/>
        </div>
        <div style={{ paddingLeft: "22px",margin: "8px" }}>{cardNumber?cardNumber:"XXXXXXXXXXXXXX"}</div>
        <div
          style={{
            paddingLeft: "22px",
            paddingRight:"10px",
            display: "flex",
            justifyContent: "space-between",
            margin: "-15px 12px",
          }}
        >
          <div>
            <Ptag>CARD HOLDER NAME</Ptag> <p>{cardHolderName?cardHolderName:"Name"}</p>
          </div>
          <div>
            <Ptag>EXPIRY</Ptag> <p>{month?month:"XX"}/{year?year:"YY"}</p>
          </div>
          <div>
            <Ptag>CVV</Ptag>
            <p>{cvv?cvv:"XXX"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
