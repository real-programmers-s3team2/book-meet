import React from "react";
// import MyPage from "./MyPage"

import HeadContainer from "./components/HeadContainer";
import InputContainer from "./components/InputContainer";
import MainContainer from "./components/MainContainer";
import TemplateContainer from "./components/TemplateContainer";
import Header from "../../components/Header";

const EnterMyPage = () => {
  return (
    <>
      <Header />
      <TemplateContainer>
        <HeadContainer />
        <MainContainer />
        <InputContainer />
      </TemplateContainer>
    </>
  );
};
export default EnterMyPage;
