const router = require("./src/routes/router");
const express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use("/api", router)
  .use("*", (req, res) => {
    res.status(404).json({
      message: "Not Found",
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
