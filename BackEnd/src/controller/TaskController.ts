import { Request, Response } from "express"
import * as TaskService from "../services/TaskService"

export async function list(req: Request, res: Response) {
    const tasks = await TaskService.findAll();
    res.json(tasks);
}

export async function getById(req: Request, res:Response) {
    const id = Number(req.params.id);
    const task = await TaskService.findById(id);

    res.json(task);
}

export async function create(req: Request, res: Response) {
    const task = await TaskService.create(req.body);
    res.status(201).json(task);
}

export async function update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = await TaskService.update(id, req.body);
    res.json(task);
}

export async function remove(req:Request, res: Response) {
    const id = Number(req.params.id);
    await TaskService.remove(id);

    res.status(204).send();
}