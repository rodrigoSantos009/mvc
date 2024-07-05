import express, { Application } from "express";
import cors from "cors";

import taskssRoutes from "./services/Tasks";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import { errorMiddleware } from "./middlewares/error";

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(taskssRoutes.router);
app.use(errorMiddleware);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (req, res) => {
  return res.json({
    message: "Termos de serviço",
  });
});