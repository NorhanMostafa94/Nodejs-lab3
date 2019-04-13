var express = require('express');
var router = express.Router();

let users = require('../arr');
console.log(users)

/* GET home page. */
router.get('/:user', function (req, res, next) {
  console.log(1)
  console.log(req.params.user)
  let userId =req.params.user;
  // let username = req.body.name;
  // users[userId].name=username;
  // users.splice(userId,1)
  res.render('edit', { user:users[userId] ,userIndex:userId});
});

router.post('/:user', function (req, res, next) {
  console.log(req.body.name);
  // users.push({name: req.body.name});
  let user =req.params.user;
  let name = req.body.name;
  users[user].name=name;
  res.redirect('/');
});

module.exports = router;
