var express = require('express');
var router = express.Router();

var data = [];

router.get('/', function(req, res, next) {

    let opt = {
        title: '掲示板です',
        data:data
    }
    res.render('bull', opt);
});

router.post('/', function(req, res, next) {
    data.unshift(req.body.msg);
    let opt = {
        title: '掲示板です',
        data:data
    }
    res.render('bull', opt);
});

module.exports = router;