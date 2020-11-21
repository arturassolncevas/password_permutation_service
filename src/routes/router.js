import apiRouter from './api/api.js'
import webRouter from './web/web.js'

export const setupRoutes = (express) => {
    express.use('/', apiRouter)
    express.use('/', webRouter)
}
