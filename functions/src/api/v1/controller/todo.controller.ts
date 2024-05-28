import {Joi} from "express-validation";
import MainController from "./main.controller";
import {collections, db} from "../../../config/db";
import {ITodo} from "../../../models/todo.model";
import {Request, Response} from "express";


export const createTodoValidation = {
  body: Joi.object({
    title: Joi.string().required(),
    completed: Joi.boolean().optional(),
    deadline: Joi.date().required(),
  }),
};

export class Todo extends MainController<ITodo> {
  constructor() {
    super(collections.todos);
  }

  softDelete = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const docRef = db.collection(collections.todos).doc(id);
      docRef.update({deleted: true});
      res.status(204).send();
    } catch (error) {
      const err = error as unknown as Error;
      res.status(500).json({message: err.message});
    }
  };
}

export default new Todo();
