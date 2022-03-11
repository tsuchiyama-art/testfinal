var express=require("express");
var router=express.Router();

let opt={
    title:"制作アプリ一覧",
    message:"私の作ったアプリ一覧を示します"
}
router.get('/',function(req,res,next){
    res.render('applepage',opt);
});
module.exports=router;