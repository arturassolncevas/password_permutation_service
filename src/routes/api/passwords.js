import {checkPassword, lastUpdates} from '../../controllers/api/passwords-controller'
import express from 'express'

const router = express.Router()
const path = '/passwords'

router.post(`${path}/check`, checkPassword)
router.get(`${path}/last-updates`, lastUpdates)

export default router
