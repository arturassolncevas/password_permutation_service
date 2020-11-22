import dotenv from 'dotenv'
import express from 'express'
import { setupRoutes } from './routes/router'
import { setupMiddleware } from './middleware/middleware'

dotenv.config()

const { APP_URL, PORT } = process.env
const webServer = express()

class App {
    start() {
        setupMiddleware(webServer)
        setupRoutes(webServer)
        webServer.listen(PORT, () => {
            console.log(`Listening at ${APP_URL}:${PORT}`)
        })
    }
}

new App().start()
