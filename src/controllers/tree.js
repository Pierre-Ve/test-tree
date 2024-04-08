exports.getLength = (req, res, next) => {
  const getTreeLength = require("../services/treeLength");
  const treeLength = new getTreeLength();
  const result = treeLength.calculate(req.body.tree);
  const message = "The calcul was successful";
  res.json({ message, data: result });
};
