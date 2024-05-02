import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import swaggerDocs from '@src/utils/swagger.ts'
import { version } from '../package.json'
import { pb } from '@src/database/pocketbase'
import { fileURLToPath } from 'url';
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many requests, please try again later."
}))


function* walkSync(dir: any): any {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}

function extractRoute(s: string) {
    s = s.replaceAll('\\', '/')
    s = s.slice(s.indexOf('/src/routes') + 11).slice(0, -3)

    return s
}

for(const filePath of walkSync(__filename.slice(0, -9) + '/routes')) {
    app.use(extractRoute(filePath), require(filePath).default)
}

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