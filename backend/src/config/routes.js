const express = require('express');

module.exports = function (server) {

  //URL de todas as rotas
  const router = express.Router();
  server.use('/api', router);

  //Rota do ciclo de pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
}