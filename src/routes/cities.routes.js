import { Router } from "express";
import * as cityCtrl from "../controller/cities.controller";

const routercity = Router();

routercity.get("/:city/:province_id", cityCtrl.getCities);

routercity.get("/", cityCtrl.getAllCities);

export default routercity;
