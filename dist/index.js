"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const PORT = process.env.PORT || 3000;
// Placeholder for sum storage
let totalRevenue = 0;
const tierOneSubPrice = 3.99; // Adjust this to your Tier 1 subscription price
app.post("/kofi", (req, res) => {
    const amount = parseFloat(req.body.amount);
    totalRevenue += amount;
    res.status(200).send("Received Ko-fi notification");
});
app.post("/twitch", (req, res) => {
    const { tier } = req.body;
    const valueToAdd = tier === "Tier 3"
        ? 5 * tierOneSubPrice
        : tier === "Tier 2"
            ? 2 * tierOneSubPrice
            : tierOneSubPrice;
    totalRevenue += valueToAdd;
    res.status(200).send("Received Twitch subscription");
});
app.get("/total", (req, res) => {
    res.status(200).json({ totalRevenue });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
