var express = require('express');
var router = express.Router();

var users = ['ding', 'pingpong', 'booobooo'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
