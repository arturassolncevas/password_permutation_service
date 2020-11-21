import { body } from 'express-validator'

export const validations = [
        body('username', 'missing username').not().isEmpty(),
        body('password', 'missing password').not().isEmpty()
    ]
