const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController")


router.post("/", productController.create);
router.get("/", productController.get);
router.get("/:id", productController.getOne);
router.put("/", productController.put);
router.delete("/", productController.delete);

module.exports = router