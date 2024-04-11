const treeLengthService = {
  calculate(tree) {
    return (
      tree.branches?.reduce(
        (length, branch) => length + this.calculate(branch),
        tree.woodLength,
      ) || tree.woodLength
    );
  },
};

export { treeLengthService };
