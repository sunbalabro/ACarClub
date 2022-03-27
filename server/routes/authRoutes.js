const express = require("express");
const authController = require("../controllers/auth")
const router = express.Router();

router.post("/auth/login",authController.postSignUp)
router.post("/signin",authController.postSignin)


module.exports = router;
