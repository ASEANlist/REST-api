import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import swaggerDocs from '@src/utils/swagger.ts'
import { version } from '../package.json'
import { pb } from '@src/database/pocketbase'

const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many requests, please try again later."
}))

app.get('/', (req, res) => {
    res.send({
        timestamp: new Date().toISOString(),
        version: version
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
    swaggerDocs(app, port)

    console.log("Logging in to PocketBase...")
    pb.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL!, process.env.POCKETBASE_ADMIN_PASSWORD!)
        .then((data) => {
            console.log(`Logged in as ${data.admin.email}`)
        })
})