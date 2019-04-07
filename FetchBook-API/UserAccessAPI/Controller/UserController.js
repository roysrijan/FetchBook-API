var model=require('../Model/APIModel')
module.exports.signUp=function(req,res){
	console.log('entered user con')
    var johndoe = new model.user ({
        name: { first: req.body.first, last: req.body.last },
        age: req.body.age,
        email:req.body.email
      });

    johndoe.save(function (err) {if (err) console.log ('Error on save!')});  
    res.send('Data received:'+JSON.stringify(req.body))
}

module.exports.fetchBook=function(req,res){
  console.log('entered user con')
  
  // var johndoe = new model.book ({
  //   name: req.body.name,
  //   author : req.body.author ,
  //   rating : req.body.rating,
  //   ratedby : req.body.ratedby ,
  //   reviewedby : req.body.reviewedby ,
  //   description: req.body.description,
  //   imgpath : req.body.imgpath
  // });
  var s=req.body.name
  var r=new RegExp(s,"i")
  model.book.find({name:{ $regex: r}}).then(response=>res.json(response)).catch(err=>console.log("error:"+err))
  //johndoe.save(function (err) {if (err) console.log ('Error on save!'+err)});  
  //res.send('Data received:'+JSON.stringify(req.body))
}