import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const addRef = useRef();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {}, [userData]);
  const handleJoin = (e) => {
    e.preventDefault();
    setUserData({
      id: idRef.current.value,
      pw: pwRef.current.value,
      add: addRef.current.value,
    });
  };

  useEffect(() => {
    console.log("userData change", userData.id);

    userData.id !== undefined &&
      axios
        .post("/join", {
          user: userData,
        })
        .then((res) => {
          console.log(res.data.result);
          if (res.data.result === "success") {
            alert("회원가입에 성공하셨습니다!");
            navigate("/");
          } else if (res.data.result === "failed") {
            alert("회원가입에 실패하셨습니다.");
            navigate("/join");
            idRef.current.value = "";
            pwRef.current.value = "";
            addRef.current.value = "";
          } else if (res.data.result === "dup") {
            alert("사용할 수 없는 아이디 입니다.");
            idRef.current.value = "";
            pwRef.current.value = "";
            addRef.current.value = "";
          }
        })
        .catch(() => {
          console.log("Failed to Join");
        });
  }, [userData]);

  return (
    <div>
      {" "}
      <h1>회원가입</h1>
      <Form onSubmit={handleJoin}>
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

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" ref={addRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Join;
