import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

const onSubmit = (event) => {
  event.preventDefault();
};

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  border-radius: 20px;
  width: 1120px;
  height: 630px;
  background-color: #162936;
  margin-top: 110px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: white;
  margin-right: 30px;
  font-size: 20px;
`;

const InputText = styled.input`
  line-height: 240px;
  width: 980px;
`;

const InputLeft = styled.input`
  width: 500px;
  height: 50px;
`;

const ContentDiv = styled.div`
  color: white;
  margin-bottom: 20px;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   width: 1120px;
//   justify-content: space-between;
// `;

// 320px iphone5

const SpanDiv = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
`;

const ButtonConfirm = styled.button`
  background-color: #344551;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 15px 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  :hover {
    background-color: blue;
  }
  font-size: 16px;
  margin-right: 30px;
`;

const ButtonCancel = styled.button`
  background-color: #344551;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 15px 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  :hover {
    background-color: red;
  }
  font-size: 16px;
  margin-right: 30px;
`;

const Label = styled.label`
  color: white;
  margin-right: 30px;
`;

const InputCheck = styled.input`
  margin-right: 15px;
`;

const Minutes = () => {
  return (
    <>
      <Header />
      <ContainerWrap>
        <Container>
          <form onSubmit={onSubmit}>
            <SpanDiv>
              <Span>제목</Span>
              <InputLeft
                placeholder="제목을 입력하세요"
                type="text"
                maxLength="10"
                required
              ></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <Span>회의 일자</Span>
              <InputLeft type="date" className="date"></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <Span>참여자</Span>
              <InputLeft type="text" className="member"></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <ContentDiv>내용</ContentDiv>
              <InputText type="text" className="content "></InputText>
            </SpanDiv>
            <SpanDiv>
              <Span>읽기 권한</Span>
              <InputCheck type="checkbox" name="name1"></InputCheck>
              <Label for="name1">회의참석자</Label>
              <InputCheck type="checkbox" name="name2"></InputCheck>
              <Label for="name2">비공개</Label>
              <InputCheck type="checkbox" name="name1"></InputCheck>
              <select name="team">
                <option value="경영지원팀">경영지원팀</option>
                <option value="영업팀">영업팀</option>
                <option value="인사팀">인사팀</option>
              </select>
            </SpanDiv>
          </form>
        </Container>
        <div>
          <Link to="/minutes">
            <ButtonConfirm type="submit">작성하기</ButtonConfirm>
          </Link>
          <Link to="/minutes">
            <ButtonCancel type="submit">취소</ButtonCancel>
          </Link>
        </div>
      </ContainerWrap>
    </>
  );
};

export default Minutes;
