import basicAuth from 'express-basic-auth'

const { BASIC_AUTH_USERNAME = '', BASIC_AUTH_PASSWORD = '' } = process.env

const authentication = {
    setup: () => {
        if (BASIC_AUTH_USERNAME.length > 0 && BASIC_AUTH_PASSWORD.length > 0) {
            return basicAuth({
                users: {[BASIC_AUTH_USERNAME]: BASIC_AUTH_PASSWORD},
                challenge: true
            })
        } else {
            return (req, res, next) => { next() }
        }
    }
}

export default authentication