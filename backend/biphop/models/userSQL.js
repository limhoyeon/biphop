exports.USERSIGNUP=({user_id,nickname,email,tel,password})=>{
    return `INSERT user(user_id,nickname,email,tel,password,created_dt,visit_dt)\
    VALUES('${user_id}','${nickname}','${email}','${tel}','${password}',current_timestamp,current_timestamp)`
}
exports.USERIDCOUNT=({user_id})=>{
    if(user_id===undefined){
        throw "user_id is undefined"
    }
    return `select count(*) from user where user_id='${user_id}'`
}
exports.USERPASSFIND=({user_id})=>{
    if(user_id===undefined){
        throw "user_id is undefined"
    }
    return `select password from user where user_id='${user_id}'`
}