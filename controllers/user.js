//requirement of modeles
const path = require('path');

// @desc:   get login page
// @route:  GET `/`
// @acess:  public
exports.getLogin = (req, res) => {
  res.render('login');
  
};

// @desc:   post login info. of user
// @route:  POST `/log`
// @access:  public
exports.postLogin = (req, res) => {
  res.render('log');
  console.log(req.body);
};
