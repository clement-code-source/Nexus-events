const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.post("/contact", (req, res) => {
  const { firstname,lastname, phone, message } = req.body;
  console.log("Received:", { firstname,lastname, phone, message });

 
  res.json({ success: true, message: "Message recieved,Our team will contact you at the earliest" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
