import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../axios";

const Write = () => {
  let titleRef = useRef();
  let contentRef = useRef();
  let [newContent, setNewContent] = useState({});
  const handleWrite = (e) => {
    e.preventDefault();
    console.log("handle Write Function", titleRef.current.value);
    setNewContent({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
  };

  useEffect(() => {
    axios
      .post("/write", {
        content: newContent,
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
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
          <Button variant="secondary" size="lg">
            목록
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Write;
