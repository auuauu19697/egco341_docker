const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Ayo Hello World");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
