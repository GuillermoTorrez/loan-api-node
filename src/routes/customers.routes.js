import { Router } from "express";
import * as customersCtrl from "../controller/customers.controller";
import userExtractor from "../middlewares/userExtractor";

const router = Router();

router.get("/", customersCtrl.getCustomers);
router.post("/", userExtractor ,customersCtrl.createCustomer);
router.get("/:customerId", customersCtrl.getCustomerById);
router.put("/:customerId", userExtractor ,customersCtrl.updateCustomerById);
router.delete("/:customerId", userExtractor ,customersCtrl.deleteCustomerById);
router.delete("/", customersCtrl.deleteAllCustomers);

export default router;
