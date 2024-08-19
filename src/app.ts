import { fastify } from "fastify";

const app = fastify({ logger: true });

const processEnv = Number(process.env.PORT);

const start = async () => {
  try {
    app.listen({ port: processEnv || 3333 }, () => console.log("🔥🔥🔥"));
  } catch (err) {
    process.exit(1);
  }
};

start();
