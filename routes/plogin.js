// requirement of module
const express = require(`express`);
const router = express.Router();
const userController = require(`../controllers/user.js`);

// @desc:   post login info. of user
// @route:  POST `/log`
// @access:  public
router.post(`/log`, userController.postLogin);

module.exports  = router;