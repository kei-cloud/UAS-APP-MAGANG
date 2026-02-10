const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user");
const logbookRoutes = require("./routes/logbook");

app.use("/user", userRoutes);
app.use("/logbook", logbookRoutes);

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
