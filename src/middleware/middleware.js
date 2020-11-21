import authentication from './basic-auth/authentication'
import expressMain from 'express'

export const setupMiddleware = (express) => {
    express.use(expressMain.json())
    express.use(authentication.setup())
}
