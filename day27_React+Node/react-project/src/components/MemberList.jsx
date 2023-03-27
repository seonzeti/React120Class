import { Form, Button, Row, Col } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import axios from "../axios";

const MemberList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("/list")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {" "}
      <h1>회원 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>비밀번호</th>
            <th>주소</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, idx) => (
            <tr key={item.id + idx}>
              <td>{item.id}</td>
              <td>{item.pw}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
