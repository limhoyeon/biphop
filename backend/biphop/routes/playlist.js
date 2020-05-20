const appRoot=require("app-root-path");
const playlistController = require(appRoot+"/controllers/playlist")
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const isAuth = require(appRoot + "/middlewares/is-auth")

router.get(
    '/getPlayList',
    isAuth,
    playlistController.getPlayListWithInfo
)
router.post(
    '/addPlayList',
    isAuth,
    playlistController.addPlayList
)

module.exports = router;
