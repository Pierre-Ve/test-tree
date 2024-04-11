import { treeLengthService } from "../services/tree.service.js";
import { body } from "express-validator";
import { validationMiddleware } from "../middlewares/validation.middleware.js";

const calculateLengthRouteValidation = [
  body("branch.woodLength").isFloat({ min: 0 }),
  body("branch.**.branches").isArray(),
  body("branch.**.branches.*.woodLength").isFloat({ min: 0 }),
  validationMiddleware,
];

const getLength = async (req, res, next) => {
  try {
    const result = treeLengthService.calculate(req.body.branch);
    res.json({ treeLength: result });
  } catch (error) {
    const message = "The calculation failed";
    res.status(500).json({ message, error });
  }
};

const treeController = {
  calculateLengthRoute: [...calculateLengthRouteValidation, getLength],
};

export { treeController };
