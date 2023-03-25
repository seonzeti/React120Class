import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ButtonGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Join from "./components/Join";
import Login from "./components/Login";
import MemberList from "./components/MemberList";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <ButtonGroup aria-label="Basic example">
        <Link to="/join">
          <Button variant="secondary">회원가입</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">로그인</Button>
        </Link>
        <Link to="/list">
          <Button variant="secondary">회원리스트</Button>
        </Link>
      </ButtonGroup>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/list" element={<MemberList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
