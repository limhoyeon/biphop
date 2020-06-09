const appRoot=require('app-root-path')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user = require(appRoot+'/models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        next(error)
        return
    }
    const email = req.body.email;
    const tel = req.body.tel;
    const password = req.body.password;
    const nickname = req.body.nickname
    const user_id = req.body.user_id
    try {
        const hashedPw = await bcrypt.hash(password, 12);
        const result = await user.userSignUp({ email, tel, password : hashedPw, nickname, user_id })
        res.send({"result" : 0})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.login = async (req, res, next) => {
    const user_id = req.body.user_id;
    const password = req.body.password;
    try{
        const dbInfo = await user.userFindById({ user_id })
        if (dbInfo['password'] === "") {
            const error = new Error("user ot signed");
            error.statusCode = 401;
            throw error
        }
        const isEqual = await bcrypt.compare(password, dbInfo['password']);
        if (!isEqual) {
            const error = new Error('Wrong password!');
            error.statusCode = 401;
            throw error;
        }
      const token = jwt.sign(
        {
          user_id: user_id
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, user_id: user_id });
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.check = (req,res,next)=>{
    try{
        console.log(req.query)
    }
    catch(err){
        console.log(err)
    }
}