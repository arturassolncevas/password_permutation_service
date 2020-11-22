import { index } from '../../controllers/web/passwords-controller'
import express from 'express'

const router = express.Router()
const path = '/'

router.get(`${path}`, index)

export default router
