import express from "express";
import todo from "./todo.routes";
// eslint-disable-next-line new-cap
const router = express.Router();

router.use("/todos", todo);

// router.use('/v2/todos', )
export default router;
