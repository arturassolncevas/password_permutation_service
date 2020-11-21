import userRoutes from './users'
import express from 'express'

const apiRouter = express.Router()
const path = '/api'

apiRouter.use(path, userRoutes)

export default apiRouter
