const express = require('express');
const appRoot = require('app-root-path')
const { check } = require('express-validator');
const beatController = require(appRoot + '/controllers/beat');
const router = express.Router();
const isAuth = require(appRoot + "/middlewares/is-auth")
router.post(
    '/write',
    isAuth,
    [
        check('music_path'),
        check('music_title')
            .isLength({ min: 0, max: 50 })
            .escape(),
        check('music_description')
            .isLength({ min: 0, max: 5000 })
            .withMessage("invalid music_description_value")
            .escape(),
        check('music_tag_1')
            .isLength({ min: 0, max: 20 })
            .withMessage("invalid music tag 1 value")
            .escape(),
        check('music_tag_2')
            .isLength({ min: 0, max: 20 })
            .withMessage("invalid music tag 2 value")
            .escape(),
        check('music_tag_3')
            .isLength({ min: 0, max: 20 })
            .withMessage("invalid music tag 3 value")
            .escape(),
    ],
    beatController.write
);
router.post(
    '/gets3path',
    isAuth,
    [check('file_type')
        .trim()
        .not()
        .isEmpty(),
    check('music_title')
        .isLength({ min: 0, max: 50 })
        .escape(),
    check('user_id')
        .trim()
        .escape()
    ],
    beatController.getS3Path
);
router.get(
    '/getlatestlist',
    beatController.getLatestList
);
router.get(
    '/getBeatDetail',
    beatController.getBeatDetail
)
// router.get('/status', isAuth, authController.getUserStatus);

// router.patch(
//   '/status',
//   isAuth,s
//   [
//     body('status')ss
//       .trim()
//       .not()ss
//       .isEmpty()
//   ],s
//   authController.updateUserStatus
// );ss

module.exports = router;
