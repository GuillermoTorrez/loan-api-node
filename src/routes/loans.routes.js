import { Router } from "express";
import * as loansCtrl from "../controller/loans.controller";
import userExtractor from "../middlewares/userExtractor";

const routerloans = Router();

routerloans.get("/", userExtractor, loansCtrl.getLoans);
routerloans.post("/", userExtractor, loansCtrl.createLoan);
routerloans.delete("/", loansCtrl.deleteAllLoans);
routerloans.get("/:id", userExtractor, loansCtrl.getLoanById);
routerloans.put("/:id", userExtractor, loansCtrl.updateLoanById);
routerloans.delete("/:id", userExtractor, loansCtrl.deleteLoanById);


export default routerloans;
