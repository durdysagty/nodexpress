"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const home_1 = __importDefault(require("./routes/home"));
const livereload_1 = __importDefault(require("livereload"));
const connect_livereload_1 = __importDefault(require("connect-livereload"));
const liveReloadServer = livereload_1.default.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use((0, connect_livereload_1.default)());
app.use(express_1.default.static('public'));
app.use('/', home_1.default);
app.get('/*', (_req, res) => {
    res.send('Oops.. 404');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
