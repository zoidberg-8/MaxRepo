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

module.exports = {
  getAllReviews:getAllReviews
}