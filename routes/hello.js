var express = require('express');
var router = express.Router();
let opt={
    title:"MyBlog",
    message:"私のブログページです"
}

router.get('/', function(req, res, next) {
    res.render("hello",opt);
    
});



module.exports = router;