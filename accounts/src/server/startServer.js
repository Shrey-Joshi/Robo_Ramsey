import cors from "cors";
import express from "express";

import accessEnv from "#root/helpers/accessEnv";
import setupRoutes from "./routes.js";

const PORT = accessEnv("PORT", 7100);
const ip = "0.0.0.0"

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

setupRoutes(app);

app.listen(PORT, ip, () => {
    console.info(`Accounts service listening on http://${ip}:${PORT}`);
})