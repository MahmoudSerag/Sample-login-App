// requirement of module
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

// @desc:   get login page
// @route:  GET `/`
// @acess:  public
router.get('/', userController.getLogin);

router.get('/log', (req, res) => {
  res.render('log');
});

module.exports = router;