const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController")
const checkRole = require("../middleware/checkRoleMiddleware")


router.post("/", checkRole("admin"), typeController.create);
router.get("/", typeController.getAll);
// router.put("/", typeController.put);
// router.delete("/", typeController.delete);


module.exports = router