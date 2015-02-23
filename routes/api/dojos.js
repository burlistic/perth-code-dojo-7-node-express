var express = require('express');
var router = express.Router();

/* GET Dojo listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({dojos : [
  	{title : "github", date : "2015-03-01"}, 
  	{title : "doesn't matter", date : "2015-03-01"},
   {title : "you can learn this", date : "2015-03-01"}, 
   {title : "Aardvaark", date : "2015-04-01"}
   ]});
});

module.exports = router;