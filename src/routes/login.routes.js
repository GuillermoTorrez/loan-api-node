import { Router } from "express";
import * as loginCtrl from "../controller/login.controller"

const routerlogin = Router();

routerlogin.post('/', loginCtrl.httpHandleSignUp);

export default routerlogin;