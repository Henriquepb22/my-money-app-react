const { Router } = require("express");
const auth = require("./auth");

const BillingCycleController = require("../api/controllers/billingCycleController");
const AuthService = require("../api/controllers/authService");

const routes = Router();

routes.post("/login", AuthService.login);
routes.post("/signup", AuthService.signup);
routes.post("/validateToken", AuthService.validateToken);

routes.use(auth);

routes.get("/billingCycles", BillingCycleController.show);
routes.post("/billingCycles", BillingCycleController.create);
routes.put("/billingCycles/:id", BillingCycleController.update);
routes.delete("/billingCycles/:id", BillingCycleController.destroy);

module.exports = routes;
