var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/User.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/update/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  // Checks Authorization
  var token = getToken(req.headers);
  if (!token) {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
    user = req.body.user;
    if (user.username && user.password) {
      User.findById(req.params.id, function(err, old_user) {
        if (err) return next(err);
        old_user = user;
        old_user.save();
        res.status(200).json(old_user
          );
      });
    } else {
      return res.status(400).json({success: false, msg: "The fields 'email' and 'password' are required"});
    }
})

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
