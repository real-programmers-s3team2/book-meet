import React from "react";
import styled from "styled-components";

const RouteContainer = styled.a`
    position: absolute;
    left: 5%;
    top: 70%;
    width: 694px;
    height: 58px;
    background-color: #162936;
    border-radius: 30px;
    
`
const InputText = styled.span`
    font-size: 35px;
    font-weight: bold;
    margin-left: 270px;
    margin-top: 300px;
    color: white;
`

function MyInfoInputContainer() {
    return(
        <RouteContainer>
            <InputText>수정하기</InputText>
        </RouteContainer>
    )
}

export default MyInfoInputContainer;