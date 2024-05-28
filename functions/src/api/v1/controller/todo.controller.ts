import {Joi} from "express-validation";
import MainController from "./main.controller";
import {collections} from "../../../config/db";


interface ITodo {
  description:string;
  isCompleted: string;
  deadline: Date
}

export const createTodoValidation = {
  body: Joi.object({
    description: Joi.string().required(),
    isCompleted: Joi.boolean().optional().default(false),
    deadline: Joi.date(),
  }),
};
/**
 *
 */
export class Todo extends MainController<ITodo> {
  /**
   *
   */
  constructor() {
    super(collections.todos);
  }
}

export default new Todo();
