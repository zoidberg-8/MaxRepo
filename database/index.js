var mysql = require('mysql');
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'reviewsdb'
})



var getAllReviews = (productid, callback) => {

  con.query(`select * from reviews where productid = ${productid}`,(err,result)=>{
    if (err) {
      callback(err,null)
    } else {
      callback(null,result)
    }
  })
}

var postReview = (productid, formBody, callback) => {
  con.query(`insert into reviews (username, rating, size, comfort, prod_durability, review_title, review_text, country, city,loc_state, usefor,productid ) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  [
    req.body.username,
    req.body.rating,
    req.body.size,
    req.body.comfort,
    req.body.prod_durability,
    req.body.review_title,
    req.body.review_text,
    req.body.country,
    req.body.city,
    req.body.loc_state,
    req.body.userfor,
    productid
  ],(err,result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null,result)
    }
  })
}

module.exports = {
  getAllReviews:getAllReviews
}