import { treeLengthService } from "../services/tree.service.js";

const treeController = {
  getLength: (req, res, next) => {
    try {
      const result = treeLengthService.calculate(req.body.tree);
      res.json({ treeLength: result });
    } catch (error) {
      const message = "The calculation failed";
      res.status(500).json({ message, error });
    }
  },
};
export { treeController };
