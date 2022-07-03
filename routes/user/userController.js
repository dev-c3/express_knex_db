const userService = require("../../services/user")
const getUser = (req, res, next) => {
res.send('litty')
}
// CONTROLLER TO CREATE NEW USER INCLUDING HANDLER FUNCTION IF NECCESARRY, THROWS ERROR IF BODY ITEMS ARE NOT VALID OR IF USER ALREADY EXISTS.
const createUser = async (req, res, next)=>{
    try{
        const id = await userService.createUser(req.body)
        res.sendStatus(201).json(id);
    } catch (err){
        console.log(err);
    }
}
//CONTROLLER TO REMOVE A USER BASED ON THEIR ID WHEN A REQUEST IS SENT BY ANYONE. LOGS NOTHING RETURNS NOTHING.
const removeUser = async (req, res,next) =>{
try{
    await userService.removeUser(req.body);
    res.sendStatus(201);
} catch (err){
    console.log(err)
}
}


module.exports =  {getUser, createUser, removeUser}