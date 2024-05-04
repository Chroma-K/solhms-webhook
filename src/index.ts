import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Placeholder for sum storage
let totalRevenue = 0;
const tierOneSubPrice = 3.99;

app.post("/kofi", (req, res) => {
  const data = JSON.parse(req.body.data);
  const amount = parseFloat(data.amount);
  totalRevenue += amount;
  res.status(200).send("Received Ko-fi notification");
});

app.post("/twitch", (req, res) => {
  const { tier } = req.body;
  const valueToAdd =
    tier === "Tier 3"
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
