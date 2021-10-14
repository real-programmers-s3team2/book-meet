import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginWrap = styled.div`
  background-image: url("/assets/image/room2.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 1080px;
  background-position: center center;
  position: relative;
`;
const LoginBox = styled.div`
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
  margin: 40px 0 20px;
`;
const FormSpan = styled.span`
  color: #ed884f;
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 25px;
`;
const FormSt = styled.form`
  margin-top: 15px;
  width: 100%;
  display: inline-block;
  text-align: center;
`;
const InputId = styled.input`
  margin-top: 25px;
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
  margin-top: 25px;
`;
const LinkCon = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
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
const Login = () => {
  return (
    <LoginWrap>
      <LoginBox>
        <FormTitle>회의 관리 시스템</FormTitle>
        <FormSpan>conference management</FormSpan>
        <FormSpan>system</FormSpan>
        <FormSt>
          <InputId type="text" placeholder="ID"></InputId>
          <InputId type="password" placeholder="Password"></InputId>
          <Link to="/main">
            <FormBtn>로그인</FormBtn>
          </Link>

          <LinkCon>
            <Link to="/register">회원가입</Link>
            <Link to="/">비밀번호 찾기</Link>
          </LinkCon>
        </FormSt>
      </LoginBox>
    </LoginWrap>
  );
};
export default Login;
