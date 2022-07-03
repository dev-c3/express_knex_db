const express = require('express');

const router = express.Router();
const userRoutes = require("./user/index");
router.use('/user', userRoutes);

module.exports = router;