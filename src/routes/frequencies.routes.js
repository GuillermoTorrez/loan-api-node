import { Router } from "express";
import * as frequencyCtrl from "../controller/frequencies.controller";

const routerFrequency = Router();

routerFrequency.get('/', frequencyCtrl.getFrequencies);
routerFrequency.post('/', frequencyCtrl.createFrequency);

export default routerFrequency;