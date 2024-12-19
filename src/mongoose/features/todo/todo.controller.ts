import { todoSchema } from "@/mongoose/features/todo/todo.schema";
import { Request, Response } from "express";
import { service } from "@/mongoose/features/todo/todo.service";

const createTodo = async (req: Request, res: Response) => {
  try {
    const validatedData = todoSchema.parse(req.body);

    const newTodo = await service.createTodo(validatedData);
    res.status(201).json({ message: "Todo created", todo: newTodo });
  } catch (err) {
    res.status(500).json({ error: err });
  } finally {
    res.end();
  }
};

const getTodos = async (_: Request, res: Response) => {
  try {
    const todos = await service.getTodos();
    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).json({ error: err });
  } finally {
    res.end();
  }
};

export { createTodo, getTodos };
