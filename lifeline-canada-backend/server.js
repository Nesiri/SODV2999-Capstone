const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/users");
const resourceRoutes = require("./routes/resources");
const logRoutes = require("./routes/logs");

app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/logs", logRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});