import express from 'express';
import config from "config"
import log from "./logger";
const port = config.get("port") as number;
const host = config.get("host") as string;
import connect from './db/connect';
const app = express();
import routes from "./routes";


app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    res.send('Hello World!');
});

app.listen(port, host, async() => {
    log.info(`Server listening on port http://${host}:${port}`);
    await connect();
    routes(app);
});