var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({users : [{firstName : "William", lastName : "Webster"}, {firstName : "Peter", lastName : "Gasparik"}]});
});

module.exports = router;
