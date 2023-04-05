import { Form, Button, Row, Col } from "react-bootstrap";

import React, { useRef } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let sessionStorage = window.sessionStorage;
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handle Login");
    axios
      .post("/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("login result :", res.data.result);
        if (res.data.result === "success") {
          // 세션 저장소에 저장 (브라우저를 껐다 키면 사라지는 반휘발성 데이터)
          sessionStorage.setItem("loginID", idRef.current.value);
          alert("로그인에 성공하셨습니다!");
          navigate("/");
        } else {
          alert("로그인에 실패하셨습니다...");
          idRef.current.value = "";
          pwRef.current.value = "";
        }
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <div>
      {" "}
      <h1>로그인</h1>
      <Form onSubmit={handleLogin}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridID">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={pwRef} />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
