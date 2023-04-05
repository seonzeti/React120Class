import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Board = () => {
  console.log("session", sessionStorage.getItem("loginID"));
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Name</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>혹시 저랑 페스티벌 가실 분 구합니다.</td>
            <td>김광주</td>
            <td>2023.04.04</td>
          </tr>
        </tbody>
      </Table>

      {sessionStorage.getItem("loginID") !== null && (
        <div className="right-btn">
          <Link to="/write">
            <Button variant="primary">글 작성</Button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Board;
