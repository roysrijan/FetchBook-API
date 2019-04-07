module.exports=function(app){
    var userCon=require('../Controller/UserController')
    console.log('entered app')
    app.route('/lost').post(userCon.signUp)
    app.route('/book').post(userCon.fetchBook)
}