var express = require('express');
var router = express.Router();
const upload = require("../config/multerConfig")


router
  .post("/postImage", upload.single('image'),(req,res)=>{
    // recieving file details
    const imageDetails=req.file;
    res.send({message:"Image uploaded to server!",imageDetails})
})

module.exports = router;
