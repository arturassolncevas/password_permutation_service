import knex from '../../../db/knex'

const tableName = 'users'

class UserManager {
    findByUserName(username, trx = null) {
        return (trx || knex)(tableName) .where('username', username)
            .then(e => e.length == 1 ? e[0] : null)
    }
    createUser(params, trx = null) {
        return (trx || knex) .insert(params)
            .into(tableName)
            .then(e => this.findByUserName(params.username, trx))
    }
}

export default UserManager
