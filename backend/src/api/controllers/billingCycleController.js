const BillingCycle = require("../models/billingCycles");

module.exports = {
    async show(req, res) {
        let billing = await BillingCycle.find();

        return res.json(billing);
    },
    async create(req, res) {
        const billing = await BillingCycle.create(req.body);

        return res.json(billing);
    },
    async destroy(req, res) {
        const billing = await BillingCycle.findByIdAndDelete(req.params.id);

        return res.json(billing);
    },
    async update(req, res) {
        const billing = await BillingCycle.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        return res.json(billing);
    },
    async count(req, res) {
        BillingCycle.count((error, value) => {
            if (error) {
                res.status(500).json({
                    errors: [error]
                });
            } else {
                res.json({
                    value
                });
            }
        });
    },
    async summary(req, res) {
        BillingCycle.aggregate([
            {
                $project: {
                    credit: {
                        $sum: "$credits.value"
                    },
                    debt: {
                        $sum: "$debts.value"
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    credit: {
                        $sum: "$credit"
                    },
                    debt: {
                        $sum: "$debt"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    credit: 1,
                    debt: 1
                }
            }
        ]).exec((error, result) => {
            if (error) {
                res.status(500).json({
                    errors: [error]
                });
            } else {
                res.json(
                    result[0] || {
                        credit: 0,
                        debt: 0
                    }
                );
            }
        });
    }
};
