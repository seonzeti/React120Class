import React, { useContext, useEffect, useState } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { BoardContext } from "../context/BoardContext";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
const Detail = () => {
  const { list, setList, detailNum, setDetailNum } = useContext(BoardContext);

  const [curList, setCurList] = useState([]);
  const nav = useNavigate();
  const removeContent = (e) => {
    axios.post("/deletePost", { detailNum: detailNum }).then((res) => {
      console.log("success", res.data.result);
      res.data.result == "success" ? nav("/board") : alert("삭제 실패!");
    });
  };

  useEffect(() => {
    setCurList(list.filter((item) => item.num == detailNum));
  }, []);
  return (
    <div>
      {curList.length > 0 && (
        <Table striped>
          <thead>
            <tr>
              <th>{curList[0].title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>작성자 : {curList[0].userId}</td>
              <td>작성 날짜 : {curList[0].write_date}</td>
            </tr>
            <tr>
              <td colSpan={2} height="100px">
                {curList[0].content}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <ButtonGroup aria-label="Basic example">
                  {sessionStorage.getItem("loginID") !== null && (
                    <>
                      <Button
                        variant="outline-secondary"
                        onClick={removeContent}
                      >
                        삭제
                      </Button>
                    </>
                  )}

                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      nav("/board");
                    }}
                  >
                    목록으로 돌아가기
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Detail;
