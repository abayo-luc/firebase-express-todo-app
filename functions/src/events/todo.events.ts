import {
  onDocumentCreated,
} from "firebase-functions/v2/firestore";
import {collections} from "../config/db";

export const onTodoCreate = onDocumentCreated(`${collections.todos}/{todoId}`,
  async (event) => {
    const {data} = event;

    if (data?.exists) {
      await data.ref.update({isCompleted: false});
    }
    return null;
  });
