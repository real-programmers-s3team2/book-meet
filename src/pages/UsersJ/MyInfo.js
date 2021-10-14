import React from "react";
import Header from "../../components/Header";
import MyInfoHeadContainer from "./components/MyInfoHeadContainer";
import MyInfoInputContainer from "./components/MyInfoInputContainer";
import MyInfoMainContainer from "./components/MyInfoMainContainer";
import TemplateContainer from "./components/TemplateContainer";

const MyInfo = () => {
  return (
    <>
      <Header />
      <TemplateContainer>
        <MyInfoHeadContainer />
        <MyInfoMainContainer />
        <MyInfoInputContainer />
      </TemplateContainer>
    </>
  );
};
export default MyInfo;
