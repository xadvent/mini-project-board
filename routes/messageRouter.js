const { Router } = require("express");
const controller = require("../controllers/messageController");

const router = Router();

router.get("/:messageid", controller.get);

module.exports = router;
