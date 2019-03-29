var mysql = require('mysql');
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'reviewsdb'
})



var getAllReviews = (callback) => {

  con.query(`select * from reviews`,(err,result)=>{
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