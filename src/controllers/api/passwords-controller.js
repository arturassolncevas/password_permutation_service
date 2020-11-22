import validations from '../../helpers/validators/password-check-validator'
import PasswordManager, { normalize, compare } from "../../services/managers/password-manager"
import UserManager from "../../services/managers/user-manager"

const userManager = new UserManager()
const passwordManager = new PasswordManager()

export const checkPassword = [
    ...validations,
    async (req, res) => {
        let message = { success: false }
        let { username, password } = req.body
        let user = await userManager.findByUserName(username)
        password = normalize(password)

        if (!user) {
            user = await userManager.createUser({username})
            await passwordManager.createMutation({userId: user.id, password })
        } else {
            let passwordHash = await passwordManager.getLastMutationHash(user.id)
            if (!compare(password, passwordHash)) {
                await passwordManager.createMutation({userId: user.id, password })
            } else { message.success = true }
        }
        res.json(message)
    }
]
