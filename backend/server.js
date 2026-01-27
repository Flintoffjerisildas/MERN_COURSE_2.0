require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors(
    {
        origin: "https://mern-course-2-0-todoapp.vercel.app",
        credentials: true,
    }
));

connectDB();

app.get("/", (req, res) => {
    res.json("Welome to Flint()'s To do WEB Applicaton");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});