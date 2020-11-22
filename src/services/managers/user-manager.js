import knex from '../../../db/knex'

const tableName = 'users'

class UserManager {
    findByUserName(username) {
        return knex(tableName) .where('username', username)
            .then(e => e.length == 1 ? e[0] : null)
    }
    createUser(params) {
        return knex .insert(params)
            .into(tableName)
            .then(e => this.findByUserName(params.username))
    }
}

export default UserManager
