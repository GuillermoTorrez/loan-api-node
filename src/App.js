import{ config } from 'dotenv'
import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import customersRoutes from "./routes/customers.routes";
import loansRoutes from "./routes/loans.routes";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import citiesRoutes from "./routes/cities.routes";
import statusRoutes from "./routes/status.routes"; 
import creditscoreRoutes from "./routes/creditscore.routes"; 
import typespaymentRoutes from "./routes/types.routes";
import frequenciesRoutes from "./routes/frequencies.routes";

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
app.use("/loans", loansRoutes);
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

///// 
app.use("/cities", citiesRoutes);
app.use("/status", statusRoutes);
app.use("/creditscore", creditscoreRoutes);
app.use("/typespayments", typespaymentRoutes);
app.use("/frequencies", frequenciesRoutes);
/////


export default app;
