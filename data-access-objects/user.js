const db = require('../db/db')

class UserDao {
    //structure for creating a new user and implementing it into the user table.
    async createUser(username, wallet){
        const [id] = await db('users').insert({username: username, wallet: wallet}).returning('id');
        return id;
    }

    async deleteUser(id){
        await db('users').select('users.id').where('users.id', id).del();
    }
}

module.exports = new UserDao();