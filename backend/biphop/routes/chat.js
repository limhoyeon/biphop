const express = require('express');
const appRoot = require('app-root-path');
const router = express.Router();
const isAuth = require(appRoot + "/middlewares/is-auth");
const chatController = require(appRoot+"/controllers/chat");

router.get(
    "/chatlist",
    isAuth,
    chatController.chatList
);

module.exports = router;