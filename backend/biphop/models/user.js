const appRoot = require("app-root-path")
const query = require(appRoot + "/utils/rds")
const sql = require(appRoot + "/models/userSQL")

exports.userSignUp = async ({ user_id, nickname, email, tel, password }) => {
    const result = await query(sql.userSignUp({ user_id, nickname, email, tel, password }))
    return result
}
exports.userIsNotExist = async ({ user_id }) => {
    const result = await query(sql.userIsNotExist({ user_id }))
    if (result[0][0]['count(*)'] === 0) {
        return true
    }
    else {
        return false
    }
}
exports.userFindById = async ({ user_id }) => {
    try{
        const result = await query(sql.userFindById({ user_id }))
        return result[0][0] === undefined ? "" : result[0][0]
    }
    catch(err){
        throw(err);
    }
}