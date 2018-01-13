const express = require('express')
var api = express.Router()
var mongoose = require('mongoose');
var url = 'mongodb://root:root@ds237717.mlab.com:37717/nodejsshoppingcart';
mongoose.connect(url)

var product = require('./models/product')
var user = require('./models/user')

api.get('/product', function(req, res){

	product.find(function(err, result){
		if(err) throw err;
		// console.log(result)
		res.json(result)
	})
})

api.post('/user', function(req, res){
	user.create(req.body,function(err, response){
		if(err) throw err;
		// console.log(response)
		res.json(response)
	})
})

api.post('/signIn', function(req, res){
	user.findOne(req.body,function(err, response){

		console.log(response)
		if (err) {
        	return callback(err)
	    }else {
	        res.json(response)
	    }
		
	})
})

api.post('/addToCart', function(req, res){

	product.findOne(req.body, function(err, response){
		console.log(response)
		if (err){
			return callback(err)
		}else{
			res.json(response)
			
		}
	})
})



module.exports = api;