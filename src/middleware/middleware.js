import authorization from './basic-auth/authentication'

export const setupMiddleware = (express) => {
    express.use(authorization.setup())
}
