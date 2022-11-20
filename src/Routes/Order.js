const express = require("express");
const { createOrder, getOrder } = require("../Controller/Order");
const router = express.Router();

router.post("/order", createOrder);
router.get("/order", getOrder);
module.exports = router;
