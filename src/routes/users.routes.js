import { Router } from "express";
import * as usersCtrl from "../controller/users.controller"
import userExtractor from "../middlewares/userExtractor";

const routerUser = Router();

routerUser.get('/', usersCtrl.getUsers);
routerUser.post('/', userExtractor, usersCtrl.createUsers);

export default routerUser;