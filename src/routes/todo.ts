import { Router } from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController";
import {authMiddleware } from "../middlewares/authMiddleware";


const tudo = Router();


tudo.get("/", authMiddleware, getTodos);
tudo.post("/", authMiddleware, createTodo);
tudo.put("/:id", authMiddleware, updateTodo);
tudo.delete("/:id", authMiddleware, deleteTodo);

export default tudo;