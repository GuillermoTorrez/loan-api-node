import { config } from "dotenv";
import express from "express";

import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import customersRoutes from "./routes/customers.routes";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import citiesRoutes from "./routes/cities.routes";
import statusRoutes from "./routes/status.routes";
import creditscoreRoutes from "./routes/creditscore.routes";
import typespaymentRoutes from "./routes/types.routes";
import frequenciesRoutes from "./routes/frequencies.routes";
import loansRoutes from "./routes/loans.routes";
import uploadRoutes from "./routes/upload.routes";

const options = {
  definition: { openapi: "3.0.0", info: { title: "API Loans", version: "1.0.0" } },
  apis : ["./src/routes/*.js"]
};

const app = express();
config();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/customers", customersRoutes);
app.use("/loans", loansRoutes);
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

/////
app.use("/cities", citiesRoutes);
app.use("/status", statusRoutes);
app.use("/creditscore", creditscoreRoutes);
app.use("/typespayments", typespaymentRoutes);
app.use("/frequencies", frequenciesRoutes);
app.use("/files", uploadRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(options)));

/////
export default app;
