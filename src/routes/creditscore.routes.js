import { Router } from "express";
import * as creditscoreCtrl from "../controller/creditscore.controller";

const routercreditscore = Router();

routercreditscore.get("/", creditscoreCtrl.getCreditScore);

export default routercreditscore;
