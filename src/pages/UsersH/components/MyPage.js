import styled from "styled-components";

const Wrapper=styled.div `

width:auto;
margin-left:250px;
height:100vh;
`

const MainWrapper=styled.div `
width:80%;
max-width: 1000px;
margin:0 auto;
height:100vh;
`

const MainContainer=styled.div `
display:flex;
justify-content: space-between;
width: 100%;
`

const DateDiv=styled.div `
font-size:35px;
`

const OverviewContainer=styled.div `
width: 48%;
height: 170px;
background-color: lightgray;
border-radius: 10px;
margin-top: 40px;
font-size:25px;
`

const Paragraph=styled.p `
margin-top:5px;
padding:15px;
`
const ParagraphDetailedSidebar=styled.p `
width:100%;
margin-bottom:10px;
`

const ParagraphDetailed=styled.p `
margin-bottom:10px;
width:100%;
`

const DetailedContainer=styled.div `
display:flex;
width: 100%;
border-radius: 10px;
margin-top: 40px;
font-size:25px;
background-color:#344551;
height:310px;
`

const DetailedSecondContainer=styled.div `
width:70%;
`

const DetailedContainerChangeDeleteClose=styled.div `
text-align:right;
height: 60px;
line-height: 60px;
color:#fff;
background-color:#344551;
border-radius:10px;
`

const DetailedContainerSidebar=styled.div `

width: 30%;
border-radius:10px;
background-color:#162936;
color:#fff;
text-align:center;
`

const DetailedContainerSidebarDiv=styled.div `
margin-top:60px;
`

const DetailedContainerInfo=styled.div `
text-align:center;
color:#fff;
border-radius:10px;
`

const MyPage = () => {
    return (
    <>
        <Wrapper>
            <MainWrapper>
                <DateDiv>9.20</DateDiv>
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
                <DetailedContainer>
                    <DetailedContainerSidebar>
                        <DetailedContainerSidebarDiv>
                            <ParagraphDetailedSidebar>제목</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>회의실명</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>회의실 위치</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>예약자</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>예약시간</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>참석인원</ParagraphDetailedSidebar>
                            <ParagraphDetailedSidebar>회의 내용</ParagraphDetailedSidebar>
                        </DetailedContainerSidebarDiv>
                    </DetailedContainerSidebar>
                        <DetailedSecondContainer>
                            <DetailedContainerChangeDeleteClose>
                                수정 삭제 닫기
                            </DetailedContainerChangeDeleteClose>
                            <DetailedContainerInfo>
                                <ParagraphDetailed>내부회의</ParagraphDetailed>
                                <ParagraphDetailed>2회의실</ParagraphDetailed>
                                <ParagraphDetailed>지하 1층</ParagraphDetailed>
                                <ParagraphDetailed>일반회원</ParagraphDetailed>
                                <ParagraphDetailed>2021-09-28 10:00 ~ 12:00</ParagraphDetailed>
                                <ParagraphDetailed>5명</ParagraphDetailed>
                                <ParagraphDetailed>배열에 대한 지식공유</ParagraphDetailed>
                            </DetailedContainerInfo>
                        </DetailedSecondContainer>
                </DetailedContainer>
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
    )
}



export default MyPage;