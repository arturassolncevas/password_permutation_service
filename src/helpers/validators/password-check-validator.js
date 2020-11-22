import { body, validationResult } from 'express-validator'

const validations = [
    body('username', 'missing username').trim().not().isEmpty(),
    body('password', 'missing password').trim().not().isEmpty()
]

const checkValidations = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty())
        return next()
    return res.status(400).json({errors: errors.array()})

}

export default [...validations, checkValidations]
