import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const zodMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  switch (err) {
    case z.ZodError:
      res.status(400).json({ error: "Invalid request body" });
      break;
    case Error:
      const error = err as Error & { statusCode?: number };

      res.status(error.statusCode || 500).json({ error: error.message });
    default:
      res.status(500).json({ error: "Internal server error" });
      break;
  }
};

export { zodMiddleware };
