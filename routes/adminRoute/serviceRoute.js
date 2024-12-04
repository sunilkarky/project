const {
  createService,
  getServices,
  singleService,
  deleteService,
  updateService,
} = require("../../controller/admin/serviceController");
const catchAsync = require("../../services/catchAsync");

const router = require("express").Router();
router
  .route("/office/:id/service")
  .get(catchAsync(getServices))
  .post(catchAsync(createService));

router
  .route("/office/:id/service/:serviceId")
  .get(catchAsync(singleService))
  .delete(catchAsync(deleteService))
  .patch(catchAsync(updateService));
module.exports = router;
