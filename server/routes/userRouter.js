const Router = require("express");
const {request} = require("express");
const router = new Router();
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.checkRegistration);
// router.put("/");
// router.delete("/");


module.exports = router

// (request, response) => {
//     response.json({message: "Hello2!"})
// }
