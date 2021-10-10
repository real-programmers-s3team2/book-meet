import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        메인
      </Route>
      <Route path="/login">로그인</Route>
      <Route path="/register">회원가입</Route>
      <Route path="/users">정보</Route>
      <Route path="/rooms">회의실</Route>
      <Route path="/minutes">회의록</Route>
    </Router>
  );
};

export default AppRouter;
