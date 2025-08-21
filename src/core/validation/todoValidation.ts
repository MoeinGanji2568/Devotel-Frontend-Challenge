import { z } from "zod";

export const todoValidation = z.object({
  addTodo: z.string().min(1, { message: "Todo is required" }),
});
