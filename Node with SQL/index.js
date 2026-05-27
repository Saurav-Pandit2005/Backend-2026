const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'new_app',
  password : 'mysql@123'
});


//CREATE TABLE user
//--------------------------

// let q = "SHOW TABLES";

// try{
//   connection.query(q, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//   });
// } catch(err) {
//   console.log(err);
// }

// connection.end();

// INSERT INTO user
//----------------------------- 

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let users = [
//   ["2005", "saurav", "spandit@gmail.com", "9033386459"],
//   ["2002", "gaurav", "goandit@gmail.com", "222155485"],
// ];

// try {
//   connection.query(q, [users], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// Using faker INSERT 100 users data into daatbase..
//----------------------------------------------------

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];

// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());   //100 fake user data
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

//Home and Add Template Function
//-------------------------------


app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query (q, (err, result) => {
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database")
  }
});

app.listen(port, () => {
  console.log(`server at listing to ${port}`)
});

