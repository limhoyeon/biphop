const express = require('express');
const appRoot = require('app-root-path')
const { check } = require('express-validator');
const user = require(appRoot + '/models/user');
const userController = require(appRoot + '/controllers/user');
const router = express.Router();

router.put(
    '/signup',
    [
        check('user_id')
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage("invalid length of userid value")
            .custom(async (value, { req }) => {
                const result = await user.userIsNotExist({ user_id: value })
                if (result === true) {
                    return true
                }
                else {
                    throw new Error('same user ID exists');
                }
            })
            .escape(),
        check('email')
            .isEmail()
            .withMessage("incorrect email value")
            .isLength({ min: 6, max: 40 })
            .withMessage("invalid length of email value")
            .normalizeEmail(),
        check('password')
            .trim()
            .isLength({ min: 8, max: 20 })
            .withMessage("invalid length of password value"),
        check('nickname')
            .trim()
            .isLength({ min: 3, max: 20 })
            .withMessage("invalid length of nickname value")
            .escape(),
        check('tel')
            .trim()
            .isNumeric()
            .withMessage("invalid tel value , plz just type number")
            .bail()
            .isLength(11)
            .withMessage("invalid tel value , plz just type 11 number")
    ],
    userController.signup
);


router.post('/login',
    [check('user_id')
        .trim()
        .escape(),
    check('password')
        .trim()]
    , userController.login);
module.exports = router;
