import React from "react";
import { Form, Button } from "react-bootstrap";

const Write = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="글 제목을 작성해주세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contents</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="내용을 작성해주세요."
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
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
