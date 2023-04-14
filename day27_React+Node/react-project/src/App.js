import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ButtonGroup, Button, Card, Nav } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { BoardContext } from "./context/BoardContext";

import Join from "./components/Join";
import Login from "./components/Login";
import MemberList from "./components/MemberList";
import Main from "./components/Main";
import Board from "./components/Board";
import Write from "./components/Write";
import Detail from "./components/Detail";

function App() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [detailNum, setDetailNum] = useState(0);

  const handleLogout = () => {
    sessionStorage.removeItem("loginID");
    navigate("/");
  };

  return (
    <BoardContext.Provider value={{ list, setList, detailNum, setDetailNum }}>
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
                <Route path="/detail" element={<Detail />}></Route>
                {/* <Route path="/remove" element={<Detail />}></Route> */}
              </Routes>
            </div>
          </Card.Body>
        </Card>
      </div>
    </BoardContext.Provider>
  );
}

export default App;
