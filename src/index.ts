import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000; // Vercel will set the PORT environment variable

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  // Process the webhook payload
  res.status(200).send("Webhook processed");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
