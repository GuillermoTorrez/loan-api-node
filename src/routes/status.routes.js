import { Router } from "express";
import * as StatusCtrl from "../controller/statusmigrations.controller";

const routerStatus = Router();

routerStatus.get("/", StatusCtrl.getStatusMigrations);
routerStatus.post("/", StatusCtrl.createNewStatusMigrations);

export default routerStatus;
