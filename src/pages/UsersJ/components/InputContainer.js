import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const RouteContainer = styled.div`
  position: absolute;
  left: 52%;
  top: 60%;
  width: 548px;
  height: 60px;
  background-color: #344551;
  border-radius: 30px;
  transform: translate(-50%, -50%);
`;
const InputText = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;

function InputContainer() {
  return (
    <RouteContainer>
      <Link to="/myInfo">
        <InputText>확인</InputText>
      </Link>
    </RouteContainer>
  );
}

export default InputContainer;
