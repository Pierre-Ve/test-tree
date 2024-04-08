class treeLength {
  calculate(tree) {
    let length = tree.woodLength;
    if (tree.branches) {
      tree.branches.map((branch) => {
        length += this.calculate(branch);
      });
    }
    return length;
  }
}

module.exports = treeLength;
