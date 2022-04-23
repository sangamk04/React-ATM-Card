import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  background-color: ${(props) => (props.Scolor ? "black" : "aquamarine")};
  padding: ${(props) => (props.Scolor ? "15px" : "20px")};
  color: ${({ Scolor }) => (Scolor ? "white" : "black")};
`;

export default function Button_Styled() {
  const [Scolor, setScolor] = useState(false);

  return (
    <>
      <StyledButton
        Scolor={Scolor}
        onClick={() => {
          Scolor ? setScolor(false) : setScolor(true);
        }}
      >
        Button_Styled
      </StyledButton>
    </>
  );
}
