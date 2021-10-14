import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  text-align: center;
  background-color: #162936;
  width: 250px;
  height: 100vh;
  color: #fff;
  font-size: 25px;
`;

const SideBarDiv = styled.div``;

const SideBarUl = styled.ul`
  align-items: center;
  justify-content: center;
`;

const SideBarLi = styled.li`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

const SideBar = () => {
  return (
    <>
      <Container>
        <SideBarDiv>
          <SideBarUl>
            <SideBarLi>회의 예약 현황</SideBarLi>
            <SideBarLi>
              <Link to="/check">개인정보 수정</Link>
            </SideBarLi>
          </SideBarUl>
        </SideBarDiv>
      </Container>
    </>
  );
};

export default SideBar;
