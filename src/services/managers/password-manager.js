import bcrypt from 'bcrypt'
import knex from "../../../db/knex";

const tableName = 'password_mutations'

class PasswordManager {
    createMutation({ userId, password }, trx = null) {
        return (trx || knex).insert({
            user_id: userId,
            password_hash: hash(password)
        }).into(tableName)
            .then(e => this.getLastMutationHash(userId, trx))
    }

    getLastMutationHash(userId, trx = null) {
        return (trx || knex)(tableName)
            .where('user_id', userId)
            .orderBy('id', 'desc')
            .limit(1)
            .then(e => e.length == 1 ? e[0].password_hash : null)
    }

    getLastMutations(limit, trx = null) {
        return (trx || knex)(tableName)
            .select(knex.raw(`users.username, COUNT(*) as total_updates, MAX(${tableName}.updated_at) as updated_at`))
            .join('users', `${tableName}.user_id`, 'users.id')
            .groupBy('users.id')
            .orderBy(`${tableName}.updated_at`, 'desc')
            .limit(limit)
    }
}

export const normalize = (password) => {
    return password.toLowerCase().split('').sort().join('')
}

export const hash = (password) => {
    return bcrypt.hashSync(password, 10);
}

export const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

export default PasswordManager
