import { checkPassword } from '../../controllers/api/passwords-controller'
import express from 'express'

const router = express.Router()
const path = '/passwords'

router.post(`${path}/check`, checkPassword)

export default router
