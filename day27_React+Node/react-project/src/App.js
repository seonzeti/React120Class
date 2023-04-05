import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ButtonGroup, Button, Card, Nav } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Join from "./components/Join";
import Login from "./components/Login";
import MemberList from "./components/MemberList";
import Main from "./components/Main";
import Board from "./components/Board";
import Write from "./components/Write";

function App() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("loginID");
    navigate("/");
  };

  return (
    <div className="container">
      <Card>
        <Card.Header>
          {sessionStorage.getItem("loginID") !== null ? (
            <>
              <Link to="/list">
                <Button variant="light">회원리스트</Button>
              </Link>
              <Button variant="light" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link to="/join">
                <Button variant="light">회원가입</Button>
              </Link>
              <Link to="/login">
                <Button variant="light">로그인</Button>
              </Link>
            </>
          )}
          <Link to="/board">
            <Button variant="light">게시판</Button>
          </Link>
        </Card.Header>
        <Card.Body>
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/join" element={<Join />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/list" element={<MemberList />}></Route>
              <Route path="/board" element={<Board />}></Route>
              <Route path="/write" element={<Write />}></Route>
            </Routes>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
