const express = require('express');
const router = express.Router();
const {getUser, createUser, removeUser} = require("./userController")
//default routes with corresponding handlers in 
router.get("/", getUser)
router.post("/", createUser)
router.delete("/", removeUser)
router.get("/:id", function (req, res){
    res.send('id');
})

/*
router.post("/",)
router.delete("/",)
router.put("/", )
*/
module.exports = router