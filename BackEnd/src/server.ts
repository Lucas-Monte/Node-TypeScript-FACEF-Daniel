import "dotenv/config"
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import {router} from "./routes/TaskRoutes"
const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", router);

app.use(errorHandler)
app.listen(3000);