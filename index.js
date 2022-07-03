const express = require('express');
const router = require('./routes/user')
const app = express();
console.log("start?")
app.use(express.json());
app.use("/users", router );

app.listen(8080, ()=> console.log('server listening on port 8080'))