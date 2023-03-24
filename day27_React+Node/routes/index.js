const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("main Router");

  res.sendFile(path.join(__dirname, "react-project", "build", "index.html"));
});

module.exports = router;
