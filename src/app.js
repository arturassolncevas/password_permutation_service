import dotenv from 'dotenv'
import express from 'express'
import knex from '../db/knex'
import { setupRoutes } from './routes/router'

dotenv.config()

const { APP_URL, PORT } = process.env
const webServer = express()

class App {
    start() {
        setupRoutes(webServer)
        webServer.listen(PORT, () => {
            console.log(`Listening at ${APP_URL}:${PORT}`)
        })
    }
}

new App().start()
