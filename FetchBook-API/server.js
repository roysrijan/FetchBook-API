var express=require('express')
var app=express()
var bodyParser = require('body-parser')
var routes=require('./routes/UserRoutes')
var https=require('https')
var http=require('http')
var fs=require('fs')
var routes2=require('./UserAccessAPI/routes/app')
var mongoose=require('mongoose')



mongoose.connect('mongodb://localhost:27017/UserDb',function(err){
	if(err){
		console.log('connection failed!')
	}
	else{
		console.log('connection successful')
	}
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


app.get('',function(req,res){
	res.send('Hello World!!')
})

app.post('',function(req,res){
	console.log('got the request'+req.body.name)
	//res.send('Server responds with 200')
	res.json({
		"A":"B"
	})
})

routes(app)
routes2(app)
// app.listen(4000,function(){
// 	console.log("Server is listening!!")
// })

var options = {
	key: fs.readFileSync('node-key.pem'),
	cert: fs.readFileSync('node-cert.pem')
}

http.createServer(app).listen(8080,function(){

})

https.createServer(options,app).listen(443,function(){
	
})