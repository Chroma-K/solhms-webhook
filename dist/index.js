"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Vercel will set the PORT environment variable
app.use(body_parser_1.default.json());
app.post("/webhook", (req, res) => {
    console.log("Webhook received:", req.body);
    // Process the webhook payload
    res.status(200).send("Webhook processed");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
