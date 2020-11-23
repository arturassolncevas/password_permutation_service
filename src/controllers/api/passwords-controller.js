import validations from '../../helpers/validators/password-check-validator'
import PasswordManager, { normalize, compare } from "../../services/managers/password-manager"
import UserManager from "../../services/managers/user-manager"
import knex from "../../../db/knex"

const userManager = new UserManager()
const passwordManager = new PasswordManager()

export const checkPassword = [
    ...validations,
    async (req, res, next) => {
        let message = { success: false }
        let { username, password } = req.body
        let user = await userManager.findByUserName(username)
        password = normalize(password)

        try {
            if (!user) {
                let trx = await knex.transaction(async trx => {
                    user = await userManager.createUser({ username }, trx)
                    await passwordManager.createMutation({ userId: user.id, password }, trx)
                })
            } else {
                let passwordHash = await passwordManager.getLastMutationHash(user.id)
                if (!passwordHash || !compare(password, passwordHash)) {
                    await passwordManager.createMutation({userId: user.id, password })
                } else { message.success = true }
            }
            res.json(message)
        } catch (e) {return next(e) }
    }
]

export const lastUpdates = async (req, res) => {
    let passwordMutations = await passwordManager.getLastMutations(10)
    res.json(passwordMutations)
}

