import React from "react";
import styled from "styled-components";

const Background = styled.div`
    position: relative;
    width: 700px;
    height: 1000px;
    background: none;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

`

function TemplateContainer({ children }) {
    return <Background>{children}</Background>;
}
  

export default TemplateContainer;