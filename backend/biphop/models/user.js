const appRoot = require("app-root-path")
const query = require(appRoot + "/utils/rds")
const sql = require(appRoot + "/models/userSQL")

exports.userSignUp = async ({ user_id, nickname, email, tel, password }) => {
    const result = await query(sql.USERSIGNUP({ user_id, nickname, email, tel, password }))
    return result
}
exports.userIsNotExist = async ({ user_id }) => {
    const result = await query(sql.USERIDCOUNT({ user_id }))
    if (result[0][0]['count(*)'] === 0) {
        return true
    }
    else {
        return false
    }
}
exports.userPassFindById = async ({ user_id }) => {
    const result = await query(sql.USERPASSFIND({ user_id }))
    console.log(result)
    return result[0][0] === undefined ? "" : result[0][0]['password']
}