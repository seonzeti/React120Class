const express = require("express");
const router = express.Router();
const conn = require("../config/database");

router.post("/addPost", (req, res) => {
  let countSql = "SELECT * FROM write_list;";
  let num = 0;
  conn.query(countSql, (err, rows) => {
    console.log("count ", rows.length);
    num = rows.length;
    let today = new Date().toLocaleDateString();

    let sql3 = "insert into write_list values (?,?, ?,?,?);";
    conn.query(
      sql3,
      [
        num + 1,
        req.body.content.title,
        today,
        req.body.content.content,
        req.body.content.name,
      ],
      (err, rows) => {
        if (rows) {
          console.log("success");
          res.json({ result: "success" });
        } else {
          console.log("error");
          res.json({ result: "failed" });
        }
      }
    );
  });
});

router.get("/getPost", (req, res) => {
  let sql = "select * from write_list";
  conn.query(sql, (err, rows) => {
    console.log("rows : ", rows);
    if (rows) {
      res.json({ list: rows });
    }
  });
});

router.post("/getDetail", (req, res) => {
  console.log("getDetail Router", req.body.detailNum);

  let sql = "select * from write_list where num = ? ";
  conn.query(sql, [req.body.detailNum], (err, rows) => {
    console.log(rows);
    res.json({ result: rows });
  });
});

router.post("/deletePost", (req, res) => {
  console.log("delete", req.body.detailNum);
  let sql = "delete from write_list where num = ?;";
  conn.query(sql, [req.body.detailNum], (err, rows) => {
    if (rows) {
      console.log("삭제 성공");
      res.json({ result: "success" });
    } else {
      console.log("삭제 실패");
      res.json({ result: "failed" });
    }
  });
});
module.exports = router;
