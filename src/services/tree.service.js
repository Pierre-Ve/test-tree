const treeLengthService = {
  calculate: (tree) => {
    return (
      tree.branches?.reduce(
        (length, branch) => length + treeLengthService.calculate(branch),
        tree.woodLength,
      ) || tree.woodLength
    );
  },
};

export { treeLengthService };
