import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Webhook listener is operational.");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).send("Webhook processed");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
