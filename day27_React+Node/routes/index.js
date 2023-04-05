const express = require("express");
const router = express.Router();
const conn = require("../config/database");

router.post("/join", (req, res) => {
  console.log("join Router", req.body);

  let sql1 = "select id from connectUser where id = ?";
  conn.query(sql1, [req.body.user.id], (err, rows) => {
    if (rows.length > 0) {
      console.log("아이디 중복!");
      res.json({ result: "dup" });
    } else {
      //중복된 아이디가 없어서 가입 가능!
      let sql2 = "insert into connectUser values (?,?,?)";
      conn.query(
        sql2,
        [req.body.user.id, req.body.user.pw, req.body.user.add],
        (err, rows) => {
          if (rows) {
            console.log("joined!");
            res.json({ result: "success" });
          } else {
            res.json({ result: "failed" });
          }
        }
      );
    }
  });
});

router.post("/login", (req, res) => {
  console.log("login", req.body);

  let sql = "select * from connectUser where id = ? and pw = ?";
  conn.query(sql, [req.body.id, req.body.pw], (err, rows) => {
    if (rows.length > 0) {
      console.log("로그인 성공");
      res.json({ result: "success" });
    } else {
      console.log("로그인 실패");
      res.json({ result: "failed" });
    }
  });
});
router.get("/list", (req, res) => {
  console.log("list");
  let sql = "select * from connectUser";
  conn.query(sql, (err, rows) => {
    // console.log(rows);
    res.json(rows);
  });
});

router.get("/", () => {
  res.sendFile(path.join(__dirname, "react-project", "build", "index.html"));
});

module.exports = router;
