//var mysql = require('mysql');
var con = require('../database/index')

test('Get all initial data from reviews', done => {
  function callback(data){
    expect(data.length).toBe(20);

    done()
  }
  con.getAllReviews((err,result)=>{
    if(err){callback(err)}
    else {
      callback(result)
    }
  })

})







