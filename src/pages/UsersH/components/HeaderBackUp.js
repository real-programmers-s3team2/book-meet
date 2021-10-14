import styled from "styled-components";
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>

const HeaderDiv=styled.div`
    background-color:#344551;
    height:150px;
    width:auto;

`;

const HeaderLogo=styled.div`
    position:absolute;
    width: auto;
    margin-top:55px;
    margin-left:25px;
    font-size:35px;
    color:#fff;
`

const HeaderNav=styled.nav`
    display:flex;
    justify-content: right;
    margin-right: 50px;
    width: auto;
    font-size:25px;
    color:#fff;
`;

const HeaderNavUl=styled.ul`
    display:flex;
    margin-top:60px;
`;

const HeaderNavli=styled.li`
margin-left:50px;
`

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <HeaderLogo>
                    회의 관리 시스템
                </HeaderLogo>
                <HeaderNav>

                    <HeaderNavUl>
                        <HeaderNavli>
                            마이페이지
                        </HeaderNavli>
                        <HeaderNavli>
                            회의실
                        </HeaderNavli>
                        <HeaderNavli>
                            회의록 
                        </HeaderNavli>
                        <HeaderNavli>
                            로그아웃
                        </HeaderNavli>
                    </HeaderNavUl>
                </HeaderNav>
            </HeaderDiv>
        </>
    )
}

export default Header;