import { Router } from "express";
import * as loansCtrl from "../controller/loans.controller";
import userExtractor from "../middlewares/userExtractor";

const routerloans = Router();

routerloans.get("/", userExtractor, loansCtrl.getLoans);
routerloans.post("/", userExtractor, loansCtrl.createLoan);
routerloans.get("/:loansId", userExtractor, loansCtrl.getLoanById);
routerloans.put("/:loansId", userExtractor, loansCtrl.updateLoanById);
routerloans.delete("/:loansId", userExtractor, loansCtrl.deleteLoanById);

export default routerloans;
