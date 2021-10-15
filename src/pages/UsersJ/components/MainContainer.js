import React from "react";
import styled from "styled-components";

const MiddleContainer = styled.div`
  position: absolute;
  left: 52%;
  top: 40%;
  width: 548px;
  height: 204px;
  background-color: #162936;
  border-radius: 30px;
  transform: translate(-50%, -50%);
`;
const InputContainer = styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 468px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 30px;
  transform: translate(-50%, -50%);
`;

function MainContainer() {
  return (
    <MiddleContainer>
      <InputContainer type="password"></InputContainer>
    </MiddleContainer>
  );
}

export default MainContainer;
