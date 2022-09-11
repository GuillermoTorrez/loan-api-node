import{ config } from 'dotenv'
import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import customersRoutes from "./routes/customers.routes";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
config();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/customers", customersRoutes);
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

export default app;