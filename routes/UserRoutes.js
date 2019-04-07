module.exports=function(app){



	app.route('/success').get(function(req,res){
		res.send('success with status 200')
	})
	app.route('/success').post(function(req,res){
		console.log(req.body)
		res.send('successfully inserted in the db')
	})
}