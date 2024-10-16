import express from 'express '
import cookieParser from 'cookie-parser'
export const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())
