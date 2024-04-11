import express from "express";
import { treeController } from "../controllers/tree.controller.js";

const router = express.Router();

router.post("/tree-length", treeController.getLength);

export { router };
