import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  margin-left: 250px;
  height: 100vh;
`;

const MainWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateDiv = styled.div`
  font-size: 35px;
`;

const OverviewContainer = styled.div`
  width: 48%;
  height: 170px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 25px;
`;

const Paragraph = styled.p`
  margin-top: 5px;
  padding: 15px;
`;
const Minutes = () => {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <DateDiv>9.20</DateDiv>
          <MainContainer>
            <OverviewContainer>
              <Link to="/minuteTool">
                <Paragraph>데일리 스탠드업</Paragraph>
                <Paragraph>10시30분 ~ 10시40분</Paragraph>
                <Paragraph>알렉스줌</Paragraph>
              </Link>
            </OverviewContainer>
            <OverviewContainer>
              <Paragraph>데일리 스탠드업</Paragraph>
              <Paragraph>10시30분 ~ 10시40분</Paragraph>
              <Paragraph>알렉스줌</Paragraph>
            </OverviewContainer>
          </MainContainer>
          <MainContainer>
            <OverviewContainer>
              <Paragraph>데일리 스탠드업</Paragraph>
              <Paragraph>10시30분 ~ 10시40분</Paragraph>
              <Paragraph>알렉스줌</Paragraph>
            </OverviewContainer>
            <OverviewContainer>
              <Paragraph>데일리 스탠드업</Paragraph>
              <Paragraph>10시30분 ~ 10시40분</Paragraph>
              <Paragraph>알렉스줌</Paragraph>
            </OverviewContainer>
          </MainContainer>
          <MainContainer>
            <OverviewContainer>
              <Paragraph>데일리 스탠드업</Paragraph>
              <Paragraph>10시30분 ~ 10시40분</Paragraph>
              <Paragraph>알렉스줌</Paragraph>
            </OverviewContainer>
            <OverviewContainer>
              <Paragraph>데일리 스탠드업</Paragraph>
              <Paragraph>10시30분 ~ 10시40분</Paragraph>
              <Paragraph>알렉스줌</Paragraph>
            </OverviewContainer>
          </MainContainer>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default Minutes;
