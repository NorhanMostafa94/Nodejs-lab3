var express = require('express');
var router = express.Router();

let users = require('../arr');
// console.log(users)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { users });
});

router.post('/users', function (req, res, next) {
  console.log(req.body.name);
  username = req.body.name;
  if (username != '') {
    users.push({ name: username });
  }
  res.redirect('/');
});

module.exports = router;
