var con = require('../database')
var mysql = require('mysql');
var express = require('express');
var bodyParser = require ('body-parser')
var app = express()

app.get('/api/reviews/:productid',(req,res)=>{
var productid = req.params.productid

  con.getAllReviews(productid, (err,result)=>{
    if(err) {
      console.log('ERROR HERE',err)
    } else {
      res.status(200).json(result)
    }
  })


})


var port = 7000
app.listen(port,(err,result)=>{
  if(err){
    console.log('SERVER.JS LINE 10 ERROR')
  } else {
    console.log(`SERVER.JS LINE 13 LISTENING ON ${port}`)
  }
}
)


