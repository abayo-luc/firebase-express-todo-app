export interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }

// Mock data for demonstration
const todos: Todo[] = [
  {id: "1", title: "Learn TypeScript", completed: false},
  {id: "2", title: "Build a Firebase app", completed: false},
];

export const getTodos = (): Todo[] => {
  return todos;
};

export const getTodo = (id: string): Todo | undefined => {
  return todos.find((todo) => todo.id === id);
};

export const createTodo = (todo: Todo): void => {
  todos.push(todo);
};

export const updateTodo = (id: string, updatedTodo: Partial<Todo>): void => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    Object.assign(todo, updatedTodo);
  }
};

export const deleteTodo = (id: string): void => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};
