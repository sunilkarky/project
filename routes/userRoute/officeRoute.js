const { Router } = require("express");
const {
  getOffices,
} = require("../../controller/userController/officeController");
const catchAsync = require("../../services/catchAsync");

const router = require("express").Router();

router.route("/office").get(catchAsync(getOffices));

module.exports = router;
