test("calculate tree length", () => {
  const treeLength = require("../src/services/treeLength");
  const tree = require("../test/mockData/tree.json");
  const length = new treeLength().calculate(tree.tree);
  expect(length).toBe(16.4);
});
