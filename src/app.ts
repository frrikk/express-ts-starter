import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { zodMiddleware } from "@/middleware/zod.middleware";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(zodMiddleware);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
