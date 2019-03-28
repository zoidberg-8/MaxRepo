var mysql = require('mysql')
var faker = require('faker')

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'reviewsdb'
})

//SEEDING 20 RECORDS INTO DB
var i =20;
while (i>0){
  con.query(`insert into reviews (username, rating, size, comfort, prod_durability, review_title, review_text,date_submitted, country, city,loc_state, usefor,productid ) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,[faker.internet.userName(),
    faker.random.number({
      'min':1,
      'max':5
    }),
    faker.random.number({
      'min':1,
      'max':3
    }),
    faker.random.number({
      'min':4,
      'max':6
    }),
    faker.random.number({
      'min':7,
      'max':9
    }),
    faker.lorem.words(),
    faker.lorem.sentences(),
    faker.date.past(),
    faker.address.country(),
    faker.address.city(),
    faker.address.state(),
    faker.random.number({
      'min':1,
      'max':5
    }),
    'AH8050-020'
  ],(err,result)=>{
    if(err){
      console.log(err)
    } else {
      console.log('1 data added')

    }

  })
  i--
}




