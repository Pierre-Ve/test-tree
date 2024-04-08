exports.getLength = (req, res, next) => {
  const getTreeLength = require("../services/treeLength");
  const treeLength = new getTreeLength();
  let result;
  try {
    result = treeLength.calculate(req.body.tree);
  } catch (error) {
    const message = "The calcul failed, check the request syntax";
    return res.status(400).json({ message });
  }
  const message = ` The calcul was successful, the total length of wood is ${result}`;
  res.json({ message, data: result });
};
