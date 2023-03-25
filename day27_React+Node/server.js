// 폴더 구성
// config - 데이터 관리 (DB와 관련된 )
// public - 정적인 페이지, 사진 등
// routes - 경로이동
// views - 동적인 페이지

const express = require("express");
const app = express();
const indexRouter = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
let cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "react-project", "build")));

app.set("port", process.env.PORT || 8888);

app.use("/", indexRouter);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 port에서 대기 중...");
});
