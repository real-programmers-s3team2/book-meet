import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterWrap = styled.div`
  background-image: url("/assets/image/room2.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 1080px;
  background-position: center center;
  position: relative;
`;
const RegisterBox = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 500px;
  max-width: 600px;
  min-width: 500px;
  background: rgba(000, 000, 000, 0.7);
  border-radius: 20px;
`;
const FormTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  margin: 40px 0 0px;
`;
const FormSt = styled.form`
  margin-top: 15px;
  width: 100%;
  display: inline-block;
  text-align: center;
`;
const InputSt = styled.input`
  margin-top: 18px;
  width: 80%;
  border-radius: 30px;
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  border: none;
`;
const FormBtn = styled.button`
  width: 80%;
  background: #5a7fc3;
  color: #fff;
  font-size: 25px;
  padding: 5px 0;
  border-radius: 30px;
  border: none;
  margin-top: 15px;
`;
const LinkCon = styled.div`
  width: 80%;
  margin: 23px auto;
  a {
    width: 50%;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
  }
  a:nth-child(1) {
    text-align: left;
  }
  a:nth-child(2) {
    text-align: right;
  }
`;
const ErrMs = styled.span`
  color: red;
  width: 100%;
  text-align: center;
  display: inline-block;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 300;
`;
const Register = () => {
  return (
    <RegisterWrap>
      <RegisterBox>
        <FormTitle>회원가입</FormTitle>
        <FormSt>
          <InputSt type="email" placeholder="이메일"></InputSt>
          <InputSt type="text" placeholder="성함"></InputSt>
          <InputSt type="password" placeholder="비밀번호"></InputSt>
          <InputSt type="password" placeholder="비밀번호 확인"></InputSt>
          <ErrMs>비밀번호 형식이 맞지 않습니다.</ErrMs>
          <FormBtn>가입하기</FormBtn>
          <LinkCon>
            <Link to="/">돌아가기</Link>
          </LinkCon>
        </FormSt>
      </RegisterBox>
    </RegisterWrap>
  );
};
export default Register;
