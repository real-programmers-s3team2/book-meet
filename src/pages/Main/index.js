import styled from "styled-components";
import Footer from "../../components/Footer";
import img from "../../img/01.jpeg";

const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 90vh;
`;

const MainLeft = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position-x: right 20%;
  width: 60%;
  height: 100%;
  position: relative;
`;

const MainRight = styled.div`
  width: 40%;
  height: 100%;
`;

const MainBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(000, 000, 000, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainTxt = styled.p`
  font-size: 50px;
  color: white;
  text-align: center;
  margin: 120px auto 70px;
`;
const MainTxt_ = styled.p`
  font-size: 50px;
  color: #f27630;
  text-align: center;
`;

const SideBox = styled.div`
  box-sizing: border-box;
  padding: 5px 10px;
  width: 100%;
  height: 110px;
  background-color: #ccc;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const SideText = styled.p`
  margin-top: 15px;
`;

const SideTitle = styled.p`
  width: 100%;
  font-size: 20px;
  span {
    float: right;
    color: blue;
    font-size: 15px;
  }
`;

const SideCard = styled.div`
  width: 80%;
`;

const SideContainer = styled.div`
  margin: 200px auto;
`;

const SideNoP = styled.p`
  font-size: 30px;
  margin-top: 35px;
  margin-left: 150px;
`;

const Main = () => {
  return (
    <>
      <Container>
        <MainLeft>
          <MainBox>
            <MainTxt>회의실의 문화를</MainTxt>
            <MainTxt_>바꾼다.</MainTxt_>
          </MainBox>
        </MainLeft>
        <MainRight>
          <SideContainer>
            <SideCard>
              <SideTitle>
                오늘의 회의<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideText>데일리 스탠드업</SideText>
                <SideText>10시 30분 ~ 10시 40분</SideText>
                <SideText>알렉스줌</SideText>
              </SideBox>
            </SideCard>
            <SideCard>
              <SideTitle>
                이번주 회의<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideNoP>이번주 회의가 없습니다.</SideNoP>
              </SideBox>
            </SideCard>
            <SideCard>
              <SideTitle>
                공지사항<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideText>서비스 점검</SideText>
                <SideText>10시 30분 ~ 10시 40분 점검</SideText>
              </SideBox>
            </SideCard>
          </SideContainer>
        </MainRight>
      </Container>
    </>
  );
};

export default Main;
