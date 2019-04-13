var express = require('express');
var router = express.Router();

let users = require('../arr');
// console.log(users)

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { users });
});

router.get('/:user', function (req, res, next) {
    console.log(req.body.name);
    let userId = req.params.user;
    users.splice(userId, 1)
    res.redirect('/');
});

module.exports = router;
