var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

router.post('/register', function(req, res) {
    if (!req.body.password && !req.body.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else if (!req.body.username) {
      res.json({success: false, msg: 'Please enter a username.'});
    } else if (!req.body.password) {
      res.json({success: false, msg: 'Please enter a password.'});
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: "",
        lastName: "",
        pseudo: "",
        telNo: "",
        telCountryCode: "",
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
}); 

router.post('/login', function(req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
});

module.exports = router;