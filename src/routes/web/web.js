import userRoutes from './users'
import express from 'express'

const webRouter = express.Router()
const path = '/'

webRouter.use(path, userRoutes)

export default webRouter
