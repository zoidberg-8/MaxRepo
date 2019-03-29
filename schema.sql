DROP DATABASE IF EXISTS reviewsdb;

CREATE DATABASE reviewsdb;

USE reviewsdb;

CREATE TABLE IF NOT EXISTS reviews (
  review_id int not null auto_increment,
  username varchar(50) not null,
  rating int,
  size int,
  comfort int,
  prod_durability int,
  review_title varchar(50) not null,
  review_text varchar(500) not null,
  date_submitted date,
  country varchar(50),
  city varchar(50),
  loc_state varchar(50),
  usefor varchar(50),
  productid varchar(20) not null,
  PRIMARY KEY(review_id)
);

-- INSERT INTO transactions (id, amount, description, date) VALUES (1, -4.55, "EQUATOR", "2017-08-02");

-- DECLARE @i int = 0
-- WHILE @i<30

--   SET @i = @i+1
-- END