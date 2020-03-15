const { Router } = require("express");
const auth = require("./auth");

const BillingCycleController = require("../api/controllers/billingCycleController");
const AuthService = require("../api/controllers/authService");

const routes = Router();

routes.post("/login", AuthService.login);
routes.post("/signup", AuthService.signup);
routes.post("/validateToken", AuthService.validateToken);

routes.get(
    "/billingCycles",
    AuthService.validateToken,
    BillingCycleController.show
);
routes.post(
    "/billingCycles",
    AuthService.validateToken,
    BillingCycleController.create
);
routes.put(
    "/billingCycles/:id",
    AuthService.validateToken,
    BillingCycleController.update
);
routes.delete(
    "/billingCycles/:id",
    AuthService.validateToken,
    BillingCycleController.destroy
);

module.exports = routes;
