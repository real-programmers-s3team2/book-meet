import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Minutes from "../pages/Minutes/index";
import Register from "../pages/Register";
import MeetDetail from "../pages/UsersH";
import MinuteMain from "../pages/UsersH/MinuteMain";
import MyInfo from "../pages/UsersJ/MyInfo";
import EnterMyPage from "../pages/UsersJ/Mypage";
import Footer from "./Footer";
import Header from "./Header";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/main">
        <Header />
        <Main />
        <Footer />
      </Route>
      {/* <Route path="/login">
        <Login />
      </Route> */}
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/users">
        <MeetDetail />
      </Route>
      <Route path="/check">
        <EnterMyPage />
      </Route>
      <Route path="/rooms">
        <Header />
        회의실
      </Route>
      <Route path="/minutes">
        <MinuteMain />
      </Route>
      <Route path="/myInfo">
        <MyInfo />
      </Route>
      <Route path="/minuteTool">
        <Minutes />
      </Route>
    </Router>
  );
};

export default AppRouter;
