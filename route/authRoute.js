const { signUp } = require("../controller/authController");
const router = require("express").Router();

router.route("/sign-up").post(signUp);

module.exports = router;
