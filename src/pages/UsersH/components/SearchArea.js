import styled from "styled-components";

const Wrapper=styled.div `
display:flex;
margin-left:250px;
width:auto;
height:110px;
font-size:25px;
align-items:center;
justify-content:space-evenly;
`

const SecondWrapper=styled.div `
display:flex;
`

const SelectBox=styled.select `
border-radius:20px;
border:none;
text-align:center;
background-color:#ccc;
font-size:25px;
height:35px;
margin-right:20px;
width:120px;
`

const SearchBox=styled.input `
border:none;
border-radius:25px;
text-align:center;
background-color:#ccc;
font-size:25px;
height:35px;
margin-right:20px;
width:350px;
`

const SearchBtn=styled.button `
border-radius: 20px;
border: none;
background-color: #162936;
font-weight: lighter;
font-size:25px;
height:35px;
width:120px;
color:#fff;
`


const SearchArea = () => {
    return (
        <>
            <Wrapper>
                <SecondWrapper>
                    <SelectBox name="year">
                        <option value="2021" selected="selected">2021</option>
                        <option value="2022">2022</option>
                    </SelectBox>
                    <form>
                        <SearchBox placeholder="검색" active></SearchBox>
                        <SearchBtn>Search</SearchBtn>
                    </form>
                </SecondWrapper>
            </Wrapper>
        </>
    )
}

export default SearchArea
