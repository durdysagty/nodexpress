import express, { Request, Response } from "express"
const app = express()
const port = 3000
import home from './routes/home'

import livereload from "livereload"
import connectLiveReload from "connect-livereload"
const liveReloadServer = livereload.createServer()
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 100);
});
app.use(connectLiveReload());

app.use(express.static('public'))
app.use('/', home)

app.get('/*', (_req: Request, res: Response): void => {
    res.send('Oops.. 404')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})