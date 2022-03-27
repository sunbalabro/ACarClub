const express = require("express");
const appController = require("../controllers/app");
const { adminMiddleware } = require("../middlewares/adminMiddleware");
const { authFunc } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", appController.getProducts)
router.get("/addProduct", appController.getAddProduct)
router.post("/addProduct", appController.postAddProduct)

router.post("/editProduct", appController.editProduct)
router.delete("/deleteProduct", appController.deleteProduct)

// router.get("/orders", authMiddleware, appController.getOrders)
router.post("/addOrder", appController.addOrder)
router.post("/editOrder", appController.editOrder)
router.delete("/deleteOrder", appController.deleteOrder)


router.get("/app/welcome", appController.getWelcome)
router.get("/logout", appController.logout)


module.exports = router;
