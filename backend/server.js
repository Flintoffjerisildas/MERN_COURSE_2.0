require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});