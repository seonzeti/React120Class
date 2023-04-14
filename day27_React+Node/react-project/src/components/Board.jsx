import axios from "../axios";
import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
const Board = () => {
  const { list, setList, detailNum, setDetailNum } = useContext(BoardContext);

  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("/getPost")
      .then((res) => {
        setList(res.data.list);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

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
          {list.length > 0 &&
            list.map((item, idx) => {
              return (
                <tr
                  key={item.num + idx}
                  onClick={(e) => {
                    setDetailNum(e.target.parentNode.firstChild.innerText);
                    nav("/detail");
                  }}
                >
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.userId}</td>
                  <td>{item.write_date}</td>
                </tr>
              );
            })}
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
