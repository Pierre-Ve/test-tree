const express = require("express");
const router = express.Router();
const treeController = require("../controllers/tree");

router.get("/", (req, res) => {
  res.send("Hello World, from express");
});

router.post("/tree-length", treeController.getLength);

module.exports = router;
