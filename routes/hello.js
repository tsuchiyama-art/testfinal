var express=require("express");
var router=express.Router();

let opt={
    title:"Hello",
    message:"これは新しいWebページです"
}
router.get("/",function(req,res,next){
    res.render("hello",opt);
});
module.exports=router;