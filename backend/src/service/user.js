const dbconnection = require("../db");
function login(username, password) {
    const sql = `SELECT Role,username,password FROM users WHERE username = $1 AND password = $2`;
    const { rows } = await dbConnection.query(sql, [username, password]);
    if(rows.password !== password){
        throw new Error('Password Incorrect')
    }
    if (rows.length === 0) {
     throw new Error('Login Fail')
    }
    return {msg:'Login succcessful',data:rows[0]}
}

function voted(){
    
}
module.exports ={
    login,
    voted
}