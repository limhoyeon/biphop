require('dotenv').config()
var mysql = require('mysql');
const {promisify}  = require('util')
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_ID,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
const query= promisify(con.query).bind(con)

con.connect((err)=>{
    if(err){
        console.log(err)
        throw err
    }
    console.log("my-sql-connected")
})

query("select * from user_info")
.then((data)=>{
    const normalObj = Object.assign({}, data[0]);
    console.log(normalObj)
    console.log(normalObj.user_name)
})
.catch((data)=>{
    console.log(err)
})