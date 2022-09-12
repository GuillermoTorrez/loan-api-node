import { Router } from "express";
import * as typesCtrl from "../controller/typespayment.controller";

const routerType = Router();

routerType.get('/', typesCtrl.getTypespayments);
routerType.post('/', typesCtrl.createTypespayment);

export default routerType;