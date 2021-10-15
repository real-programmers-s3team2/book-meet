import React from "react";
import styled from "styled-components";

const MiddleContainer = styled.div`
  position: absolute;
  left: 55%;
  top: 43%;
  width: 634px;
  height: 428px;
  background-color: #1a384e;
  border-radius: 30px;
  transform: translate(-50%, -50%);
`;
const InputContainer1 = styled.div`
  position: absolute;
  left: 40%;
  top: 15%;
  width: 307px;
  height: 39px;
  background-color: #a7a4a4;
  border-radius: 30px;
`;
const InputContainer2 = styled.div`
  position: absolute;
  left: 40%;
  top: 29%;
  width: 307px;
  height: 39px;
  background-color: #a7a4a4;
  border-radius: 30px;
`;
const InputContainer3 = styled.div`
  position: absolute;
  left: 40%;
  top: 43%;
  width: 307px;
  height: 39px;
  background-color: #a7a4a4;
  border-radius: 30px;
`;
const InputContainer4 = styled.input`
  position: absolute;
  left: 40%;
  top: 57%;
  width: 307px;
  height: 39px;
  background-color: #ffffff;
  border-radius: 30px;
`;
const InputContainer5 = styled.input`
  position: absolute;
  left: 40%;
  top: 71%;
  width: 307px;
  height: 39px;
  background-color: #ffffff;
  border-radius: 30px;
  /* contenteditable = true */
`;
const Email = styled.span`
  position: absolute;
  left: -21%;
  top: 16%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;
const Name = styled.span`
  position: absolute;
  left: -20%;
  top: 32%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;
const Department = styled.span`
  position: absolute;
  left: -20%;
  top: 45%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;
const Pw = styled.span`
  position: absolute;
  left: -24%;
  top: 59%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;
const ConfirmPw = styled.span`
  position: absolute;
  left: -27%;
  top: 74%;
  font-size: 25px;
  font-weight: bold;
  margin-left: 230px;
  color: white;
`;
function MyInfoMainContainer() {
  return (
    <MiddleContainer>
      <Email>이메일</Email>
      <InputContainer1></InputContainer1>
      <Name>소속</Name>
      <InputContainer2></InputContainer2>
      <Department>부서</Department>
      <InputContainer3></InputContainer3>
      <Pw>비밀번호</Pw>
      <InputContainer4 type="password" />
      <ConfirmPw>비밀번호 확인</ConfirmPw>
      <InputContainer5 type="password" />
    </MiddleContainer>
  );
}

export default MyInfoMainContainer;
