"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routsTo = exports.routTo = void 0;
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
function routTo(rout, content) {
    router.get(rout, (_req, res) => {
        res.send(`${content}<script src="http://localhost:35729/livereload.js?snipver=1"></script>`);
    });
    return router;
}
exports.routTo = routTo;
function routsTo(routs, content) {
    for (var i = 0; i < routs.length; i++) {
        const s = i;
        router.get(routs[i], (_req, res) => {
            res.send(`${content[s]}<script src="http://localhost:35729/livereload.js?snipver=1"></script>`);
        });
    }
    return router;
}
exports.routsTo = routsTo;
