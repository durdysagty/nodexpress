import express, { Request, Response } from "express"
let router = express.Router()

export function routTo(rout: string[], content: string) {
    router.get(rout, (_req: Request, res: Response): void => {
        res.send(`${content}<script src="http://localhost:35729/livereload.js?snipver=1"></script>`)
    })
    return router
}

export function routsTo(routs: string[], content: string[]) {
    for (var i = 0; i < routs.length; i++) {
        const s = i
        router.get(routs[i], (_req: Request, res: Response): void => {
            res.send(`${content[s]}<script src="http://localhost:35729/livereload.js?snipver=1"></script>`)
        })
    }
    return router
}