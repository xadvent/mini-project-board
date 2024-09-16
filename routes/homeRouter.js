const { Router } = require("express");
const controller = require("../controllers/homeController");

const router = Router();

router.get("/", controller.index);

module.exports = router;
