import { fastify } from "fastify";
import mongoose from "mongoose";

const app = fastify({ logger: true });

const processEnv = Number(process.env.PORT);

mongoose.connect(
  "mongodb+srv://mongo:12345@cluster0.lquvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const start = async () => {
  try {
    app.listen({ port: processEnv || 3333 }, () => console.log("🔥🔥🔥"));
  } catch (err) {
    process.exit(1);
  }
};

start();
