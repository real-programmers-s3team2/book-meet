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

function MyInfoHeadContainer() {
  return (
    <UpperContainer>
      <Text>개인정보 수정</Text>
      <Upperbar />
    </UpperContainer>
  );
}

export default MyInfoHeadContainer;
