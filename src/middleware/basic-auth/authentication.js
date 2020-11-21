import basicAuth from 'express-basic-auth'

const { BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } = process.env

const authorization = {
    setup: () => {
        return basicAuth( {
            users: { [BASIC_AUTH_USERNAME] : BASIC_AUTH_PASSWORD },
            challenge: true
        })
    }
}

export default authorization