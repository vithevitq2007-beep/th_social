import { Express } from "express";

const app: Express = express();

app.listen(5001, () => {
    console.log("server satart on 5001");
})