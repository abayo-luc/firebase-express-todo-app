
import {
  onDocumentCreated,
} from "firebase-functions/v2/firestore";
import {collections} from "../config/db";

export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
    deadline: Date
}


export const onTodoCreate = onDocumentCreated(`${collections.todos}/{todoId}`,
  async (event) => {
    const {data} = event;

    if (data?.exists) {
      await data.ref.update({completed: false});
    }
    return null;
  });

