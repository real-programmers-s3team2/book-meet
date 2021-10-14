import React from "react";
import styled from "styled-components";

const UpperContainer = styled.div`
  padding-top: 48px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 24px;
`;
const Text = styled.span`
  font-size: 48px;
  color: black;
  font-weight: bold;
  margin-top: 40px;
  margin-left: 27%;
`;
const Upperbar = styled.span`
  position: absolute;
  width: 818px;
  height: 5px;
  margin-top: 70px;
  margin-left: -550px;
  background-color: #9296be;
`;

function HeadContainer() {
  return (
    <UpperContainer>
      <Text>비밀번호 입력</Text>
      <Upperbar />
    </UpperContainer>
  );
}

export default HeadContainer;
