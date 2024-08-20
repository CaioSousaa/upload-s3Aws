import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/upload.routes";

const app = express();

dotenv.config();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("server is run"));
