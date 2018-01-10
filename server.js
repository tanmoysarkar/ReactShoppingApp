var express = require("express")
const http = require('http')
var bodyparser = require("body-parser")
var cookieparser = require("cookie-parser")
var path = require("path")
var app = express()

app.get('/user', function(req, res){
	console.log("api request for user login")
	let data = {
		name:'tammy',
		password:'1234'
	}
	res.json(data)
})

if( process.argv[2] === 'dev'){	
	app.use(express.static(path.join(__dirname, 'public')))
}
else{
	app.use(express.static(path.join(__dirname, 'build')))
}

const port = process.env.PORT || '8080'
app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))

module.exports = app