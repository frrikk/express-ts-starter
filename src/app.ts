import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { zodMiddleware } from "@/middleware/zod.middleware";
import connectDB from "@/mongoose/features/todo/config.todo";
import { todoRouter } from "@/mongoose/features/todo/todo.routes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use("/api/todos", todoRouter);

const start = async () => {
  await connectDB();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start().catch((err) => {
  console.error("Failed to start server: ", err);
});
