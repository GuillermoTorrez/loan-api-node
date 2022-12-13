import { Router } from "express";
import * as customersCtrl from "../controller/customers.controller";
import userExtractor from "../middlewares/userExtractor";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Customers
 *  description: Customers management and retrieval Endpoints
 */

/**
 * @swagger
 * /customers:
 *  get:
 *    summary: Get all customers
 *    tags: [Customers]
 *    produces: [application/json]
 *    parameters: []
 *    responses: {
 *        200 : { description: "Customers list" },
 *        500 : { description: "Server error" }
 *    }
 * */
router.get("/", customersCtrl.getCustomers);

/**
 * @swagger
 * /customers:
 *  post:
 *    summary: Create new customer
 *    tags: [Customers]
 * */
router.post("/", userExtractor, customersCtrl.createCustomer);

router.get("/:customerId", customersCtrl.getCustomerById);
router.put("/:customerId", userExtractor, customersCtrl.updateCustomerById);

/**
 * @swagger
 * /customers/:{customerId}:
 *  delete:
 *    summary: Delete by ID customer
 *    tags: [Customers]
 * */
router.delete("/:customerId", userExtractor, customersCtrl.deleteCustomerById);

router.delete("/", customersCtrl.deleteAllCustomers);

export default router;
