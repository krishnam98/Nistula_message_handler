import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import webhookRoutes from "./routes/webhookRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/webhook", webhookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});