require('dotenv').config();
const mysql = require('mysql2/promise');
const dbConfig={
    host: process.env.DB_HOST,
    user: process.env.DB_ID,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
};
const pool = mysql.createPool(dbConfig);
var transactionResult
const queryImplement = async (sql) => {
    try{
        const connection=await pool.getConnection()
        transactionResult=await connection.beginTransaction()
        const queryResult=await connection.query(sql)
        await connection.commit()
        return queryResult
    }
    catch(exception){
        console.log("exception occured: ",exception)
        if(transactionResult!==undefined){
            await connection.rollback()
        }
        throw exception
    }
}
module.exports=queryImplement