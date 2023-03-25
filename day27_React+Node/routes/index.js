const express = require("express");
const router = express.Router();
const conn = require("../config/database");

router.get("/", (req, res) => {
  console.log("main Router");

  res.sendFile(path.join(__dirname, "react-project", "build", "index.html"));
});

router.post("/join", (req, res) => {
  console.log("join Router", req.body.user);
  let sql = "insert into connectUser values (?,?,?)";
  conn.query(
    sql,
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

module.exports = router;
