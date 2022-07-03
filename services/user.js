const userDao = require("../data-access-objects/user")
class UserService {
    //CREATES A USER
    async createUser(userObj){
        const {username, wallet} = userObj
        //SENDS PARAMETERS TO THE USER DATA ACCESS OBJECT AND GRABS USERID OR OTHER RETURNED VALUES FROM
        //USER DATA ACCESS OBJECT AFTER INSERTING NEW USER INTO TABLE
        const newUser = await userDao.createUser(username, wallet)
        console.log(newUser);
        return newUser;
    }
    //REMOVES A USER FROM THE DATABASE
    async removeUser(userObj){
        const {id} = userObj;
        await userDao.deleteUser(id);
        console.log('deleted')
    }
    
}

module.exports = new UserService()