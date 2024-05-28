import express from "express";
import controller, {createTodoValidation} from "../controller/todo.controller";
import {validate} from "express-validation";

// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", validate(createTodoValidation,
  {keyByField: true}), controller.create);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
