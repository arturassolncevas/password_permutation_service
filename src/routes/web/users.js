import { index } from '../../controllers/web/users-controller'
import express from 'express'

const router = express.Router()
const path = '/users'

router.get(path, index)

export default router
