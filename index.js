const express = require('express');
const app = express();
const port = 3000;
const userRouter = require("./routers/user")

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(userRouter);

app.listen(port, 'localhost', () => {
    console.log("Server listening on port" + port)
});