const express = require("express");
const router = express.Router();
const conn = require("../config/database");

router.get("/", () => {
  res.sendFile(path.join(__dirname, "react-project", "build", "index.html"));
});

module.exports = router;
