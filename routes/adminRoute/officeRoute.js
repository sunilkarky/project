const { Router } = require("express");
const {
  getOffices,
  createOffice,
  deleteOffice,
  updateOffice,
  singleOffice,
} = require("../../controller/admin/officeController");
const catchAsync = require("../../services/catchAsync");

const router = require("express").Router();

router
  .route("/office")
  .get(catchAsync(getOffices))
  .post(catchAsync(createOffice));

router
  .route("/office/:id")
  .get(catchAsync(singleOffice))
  .delete(catchAsync(deleteOffice))
  .patch(catchAsync(updateOffice));

module.exports = router;
