import { Router } from "express";
import * as usersCtrl from "../controller/users.controller"

const routerUser = Router();

routerUser.get('/', usersCtrl.getUsers);
routerUser.post('/',  usersCtrl.createUsers);

export default routerUser;