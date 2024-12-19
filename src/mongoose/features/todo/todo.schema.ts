import { z } from "zod";

const todoSchema = z.object({
  title: z
    .string()
    .nonempty()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  completed: z.boolean().optional(),
});

export type TodoType = z.infer<typeof todoSchema>;

export { todoSchema };
