import passwordRoutes from './passwords'
import express from 'express'

const apiRouter = express.Router()
const path = '/api'

apiRouter.use(path, passwordRoutes)

export default apiRouter
