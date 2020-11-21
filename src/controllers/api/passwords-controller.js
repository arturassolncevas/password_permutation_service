import { validations } from '../../helpers/validators/password-check-validator'
import { validationResult } from 'express-validator'


export const checkPassword = [
    validations,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.json({ message: "check password" })
    }
].flat()

