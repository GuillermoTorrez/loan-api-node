import { Router } from "express";
import * as loansCtrl from "../controller/loans.controller";
import userExtractor from "../middlewares/userExtractor";

const router = Router();

router.get("/", userExtractor, loansCtrl.getLoans);
router.post("/", userExtractor, loansCtrl.createLoan);
router.get("/:loansId", userExtractor, loansCtrl.getLoanById);
router.put("/:loansId", userExtractor, loansCtrl.updateLoanById);
router.delete("/:loansId", userExtractor, loansCtrl.deleteLoanById);
router.delete("/", userExtractor, loansCtrl.deleteAllLoans);

export default router;
