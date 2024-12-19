import Todo from "@/mongoose/features/todo/todo.model";
import { TodoType } from "@/mongoose/features/todo/todo.schema";

const createTodo = async (todo: TodoType): Promise<TodoType> => {
  return await Todo.create(todo);
};

const getTodos = async (): Promise<TodoType[]> => {
  return Todo.find();
};

export const service = {
  createTodo,
  getTodos,
} as const;
