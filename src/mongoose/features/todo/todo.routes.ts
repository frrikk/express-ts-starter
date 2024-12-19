import express from "express";
import { createTodo, getTodos } from "@/mongoose/features/todo/todo.controller";

const todoRouter = express.Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", getTodos);

export { todoRouter };
