import { Router } from "express";
import * as fileCtrl from "../controller/file.controller";

const routerupload = Router();

routerupload.post("/upload", fileCtrl.upload);
routerupload.get("/getfiles", fileCtrl.getListFiles);
routerupload.get("/:filename", fileCtrl.download);

export default routerupload;
