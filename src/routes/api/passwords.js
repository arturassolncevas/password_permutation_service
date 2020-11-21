import { index } from '../../controllers/api/users-controller'
import express from 'express'

const router = express.Router()
const path = '/users'

router.get(path, index)
router.post(`${path}/password-check`, index)

export default router
