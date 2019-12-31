var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var Service = require('../models/Service.js');

/* GET ALL SERVICES */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Service.find(function (err, services) {
        if (err) return next(err);
        res.json(services);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/* SAVE SERVICE */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Service.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

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