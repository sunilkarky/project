const { Router } = require("express");
const {
  getServices,
} = require("../../controller/userController/serviceController");
const catchAsync = require("../../services/catchAsync");
const router = require("express").Router();

router.route("/office/:id/service").get(catchAsync(getServices));

module.exports = router;
