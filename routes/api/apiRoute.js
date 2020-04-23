const router = require("express").Router();
const controller = require("../../controllers/controller");

// router.route("/model/:model").post(controller.create);

// Matches with "/api/sentences"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/sentences/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
