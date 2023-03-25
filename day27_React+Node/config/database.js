// mysql 프로그램을 가져오는게 아니라, 프로그램과 Node를 연결할 수 있는
// mysql 모듈을 가져오는 것

// 외부 DB 와 연결하려면 mysql2 를 설치해야함
const mysql = require("mysql2");

// 나의 DB 정보 기재
let conn = mysql.createConnection({
  host: "project-db-stu2.ddns.net",
  user: "teacher",
  password: "smhrd1",
  port: 3308,
  database: "gjai_3_1_0922",
});

conn.connect();
console.log("mysql 연결 성공! ");

module.exports = conn;
// mysql 과 연결에 성공한 값을 갖고있는 conn을 모듈화 하겠다
