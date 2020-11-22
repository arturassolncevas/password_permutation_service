import passwordsRoutes from './passwords'
import express from 'express'

const webRouter = express.Router()
const path = '/'

webRouter.use(path, passwordsRoutes)

export default webRouter
