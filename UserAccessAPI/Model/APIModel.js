var mongoose=require('mongoose')

var userSchema = new mongoose.Schema({
    name: {
      first: String,
      last: { type: String, trim: true }
    },
    age: { type: Number, min: 0 },
    email: {type:String, required: true,index:true, unique: true} 
  })

  module.exports.user=mongoose.model('PowerUsers', userSchema)

  userSchema = new mongoose.Schema({
    name: {type:String, required: true,index:true, unique: true} ,
    author : {type:String, required: true,index:true, unique: true} ,
    rating : {type:Number, required: true,index:true, unique: true} ,
    ratedby : {type:Number, required: true,index:true, unique: true} ,
    reviewedby : {type:Number, required: true,index:true, unique: true} ,
    description: {type:String, required: true,index:true, unique: true} ,
    imgpath : {type:String, required: true,index:true, unique: true} 
  })

  module.exports.book=mongoose.model('book', userSchema)