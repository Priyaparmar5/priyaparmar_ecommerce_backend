    const association = require('../controllers/customer.controller.js');

    const router =  require("express").Router();

    router.post("/customer/add",association.add);    

    module.exports = router;