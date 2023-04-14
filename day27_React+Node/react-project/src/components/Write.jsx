import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  let titleRef = useRef();
  let contentRef = useRef();
  let [newContent, setNewContent] = useState({});

  const handleWrite = (e) => {
    e.preventDefault();
    setNewContent({
      title: titleRef.current.value,
      content: contentRef.current.value,
      name: sessionStorage.getItem("loginID"),
    });
  };

  useEffect(() => {
    if (newContent.title != undefined) {
      axios
        .post("/addPost", {
          content: newContent,
        })
        .then((res) => {
          if (res.data.result === "success") {
            alert("등록이 완료 되었습니다!");
            navigate("/board");
          } else {
            alert("ERROR!");
          }
        })
        .catch(() => {
          // console.error("error");
        });
    }
  }, [newContent]);

  return (
    <div>
      <Form onSubmit={handleWrite}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="글 제목을 작성해주세요."
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contents</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="내용을 작성해주세요."
            ref={contentRef}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            글쓰기
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              navigate("/board");
            }}
          >
            목록
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Write;
