const Router = require("express");
const {request} = require("express");
const router = new Router();
const userController = require("../controllers/userController")


router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.checkRegistration);
// router.put("/");
// router.delete("/");


module.exports = router

// (request, response) => {
//     response.json({message: "Hello2!"})
// }
