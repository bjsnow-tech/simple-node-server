const express = require('express');
const userRouter = express.Router();

userRouter.get('/user', (req, res) => {
    res.send("Send message back from user router");
});

module.exports = userRouter;