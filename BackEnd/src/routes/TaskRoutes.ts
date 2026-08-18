import { Router } from "express";
import * as TaskController from "../controller/TaskController"

export const router = Router();

router.get("/", TaskController.list);
router.get("/:id", TaskController.getById);
router.post("/", TaskController.create);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.remove);
