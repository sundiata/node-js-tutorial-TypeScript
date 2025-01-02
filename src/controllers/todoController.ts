import { Request, Response } from "express";

import Todo, {ITodo} from "../models/Todo";


export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: "Fetching todos failed.", error });
  }
};


export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, completed, userId } = req.body;
    const todo = new Todo({ title, completed, userId });
    await todo.save();
    res.status(201).json({ message: "Todo created successfully." });
  } catch (error) {
    res.status(400).json({ message: "Creating todo failed.", error });
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: "Failed to update todo.", error });
  }
};



export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete todo.", error });
  }
};




