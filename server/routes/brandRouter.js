const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController")


router.post("/", brandController.create);
router.get("/", brandController.getAll);
router.put("/", brandController.put);
router.delete("/", brandController.delete);


module.exports = router