const express = require("express");
const router = express.Router();
const treeController = require("../controllers/tree");

router.post("/tree-length", treeController.getLength);

module.exports = router;
