var express = require('express');
var router = express.Router();

let opt={
  title:'TOPPAGE',
  message:'ここはトップページです'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', opt);
});

module.exports = router;
