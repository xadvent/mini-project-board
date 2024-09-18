const { Router } = require("express");
const controller = require("../controllers/messageController");

const router = Router();

router.get("/:messageid", controller.get);
router.post("/:messageid", controller.post);

module.exports = router;
