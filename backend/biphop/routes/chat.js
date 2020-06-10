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

router.get(
    "/check",
    chatController.check
)

router.post(
    "/room",
    chatController.room
)
module.exports = router;