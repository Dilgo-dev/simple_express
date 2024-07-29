import express from "express";
import { PORT } from "./utils/env.js";

const app = express();

app.get("/", (req, res) => res.send("Simple api ! 🐰"));

app.listen(PORT, () => {
    console.log(`Simple api up http://localhost:${PORT} ! 🧙🎩🐇`);
});
